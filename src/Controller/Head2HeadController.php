<?php

declare(strict_types=1);

namespace App\Controller;

use App\SumoApi\RikishiServiceFacade;
use StuartMcGill\SumoApiPhp\Service\RikishiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Head2HeadController extends AbstractController
{
    private readonly RikishiServiceFacade $rikishiService;

    public function __construct()
    {
        $this->rikishiService = new RikishiServiceFacade(RikishiService::factory());
    }

    #[Route('head2head')]
    public function view(): Response
    {
        return $this->render('head2head.html.twig', [
            'wrestlers' => json_encode($this->rikishiService->getMakuuchiWrestlers()),
        ]);
    }

    #[Route('head2head/{id}')]
    public function head2headsForWrestler(int $id): JsonResponse
    {
        return new JsonResponse(
            json_encode($this->rikishiService->getHead2headsForWrestler($id))
        );
    }
}
