<?php

declare(strict_types=1);

namespace App\Controller;

use StuartMcGill\SumoApiPhp\Service\RikishiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Head2HeadController extends AbstractController
{
    #[Route('head2head')]
    public function view(): Response
    {
        $filename = __DIR__ . '/../../data/wrestlers.json';

        if (file_exists($filename)) {
            $wrestlers = file_get_contents($filename);
        } else {
            $rikishiService = RikishiService::factory();
            $wrestlers = $rikishiService->fetchDivision('Makuuchi');
            $wrestlers = json_encode($wrestlers);
            file_put_contents(filename: $filename, data: $wrestlers);
        }

        return $this->render('head2head.html.twig', [
            'wrestlers' => $wrestlers,
        ]);
    }
}
