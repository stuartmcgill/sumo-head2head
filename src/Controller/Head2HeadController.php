<?php

declare(strict_types=1);

namespace App\Controller;

use stdClass;
use StuartMcGill\SumoApiPhp\Factory\RikishiFactory;
use StuartMcGill\SumoApiPhp\Model\Rikishi;
use StuartMcGill\SumoApiPhp\Service\RikishiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Head2HeadController extends AbstractController
{
    #[Route('head2head')]
    public function view(): Response
    {
        return $this->render('head2head.html.twig', [
            'wrestlers' => json_encode($this->getMakuuchiWrestlers()),
        ]);
    }

    #[Route('head2head/rikishi/{id}')]
    public function head2headsForWrestler(int $id): Response
    {
        $wrestlers = $this->getMakuuchiWrestlers();

        $filename = __DIR__ . '/../../data/rikishi_' . $id  . '.json';

        if (file_exists($filename)) {
            $head2heads = file_get_contents($filename);
        } else {
            $otherIds = array_map(static fn($wrestler) => $wrestler->id, $wrestlers);

            $rikishiService = RikishiService::factory();
            $head2heads = $rikishiService->fetchMatchups($id, $otherIds);
            $head2heads = json_encode($head2heads);

            file_put_contents(filename: $filename, data: $head2heads);
        }

        return $this->render('head2head.html.twig', [
            'head2heads' => $head2heads,
            'wrestlers' => json_encode($wrestlers),
        ]);
    }

    /** @return list<Rikishi> */
    private function getMakuuchiWrestlers(): array
    {
        $filename = __DIR__ . '/../../data/wrestlers.json';

        if (file_exists($filename)) {
            $data = json_decode(file_get_contents($filename));

            $factory = new RikishiFactory();
            $wrestlers = array_values(array_map(
                callback: static function (stdClass $rikishiData) use ($factory) {
                    $rikishiData->birthDate = $rikishiData->birthDate->date;
                    $rikishiData->sumodbId = $rikishiData->sumoDbId;
                    return $factory->build($rikishiData);
                },
                array:$data
            ));
        } else {
            $rikishiService = RikishiService::factory();
            $wrestlers = $rikishiService->fetchDivision('Makuuchi');

            // Save for now
            $wrestlersJson = json_encode($wrestlers);
            file_put_contents(filename: $filename, data: $wrestlersJson);
        }

        return $wrestlers;
    }
}
