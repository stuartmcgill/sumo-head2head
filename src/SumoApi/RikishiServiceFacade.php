<?php

declare(strict_types=1);

namespace App\SumoApi;

use stdClass;
use StuartMcGill\SumoApiPhp\Factory\RikishiFactory;
use StuartMcGill\SumoApiPhp\Model\Rikishi;
use StuartMcGill\SumoApiPhp\Service\RikishiService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class RikishiServiceFacade
{
    public function __construct(private readonly RikishiService $service)
    {
    }

    /** @return list<Rikishi> */
    public function getMakuuchiWrestlers(): array
    {
        $wrestlers = $this->service->fetchDivision('Makuuchi');

        usort(
            array: $wrestlers,
            callback: static function (Rikishi $a, Rikishi $b) {
                return $a->shikonaEn <=> $b->shikonaEn;
            },
        );

        return $wrestlers;
    }

    public function getHead2headsForWrestler(int $id): Response
    {
        $wrestlers = $this->getMakuuchiWrestlers();

        $filename = __DIR__ . '/../../data/rikishi_' . $id  . '.json';

        if (file_exists($filename)) {
            $head2heads = file_get_contents($filename);
        } else {
            $otherIds = array_map(static fn($wrestler) => $wrestler->id, $wrestlers);

            $head2heads = $this->service->fetchMatchups($id, $otherIds);
            $head2heads = json_encode($head2heads);

            file_put_contents(filename: $filename, data: $head2heads);
        }

        return new JsonResponse($head2heads);
    }
}
