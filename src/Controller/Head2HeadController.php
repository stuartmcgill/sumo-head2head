<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Head2HeadController extends AbstractController
{
    #[Route('head2head')]
    public function number(): Response
    {
        $number = random_int(0, 100);

        return $this->render('head2head.html.twig', [
            'number' => $number,
        ]);
    }
}
