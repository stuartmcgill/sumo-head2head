<?php

declare(strict_types=1);

namespace App\Controller;

use App\SumoApi\RikishiServiceFacade;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Head2HeadController extends AbstractController
{
    public function __construct(private readonly RikishiServiceFacade $rikishiService)
    {
    }

    #[Route('head2head')]
    public function view(): Response
    {
        return $this->render('head2head.html.twig', [
            'wrestlers' => json_encode($this->rikishiService->getMakuuchiWrestlers()),
        ]);
    }

    #[Route('head2head/{id}')]
    public function head2headsForWrestler(int $id): Response
    {
        return $this->rikishiService->getHead2headsForWrestler($id);
    }
}
