<?php

namespace App\Controller;

use App\Repository\PlanningRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(PlanningRepository $planning): Response
    {
        $events = $planning->findAll();

        $cours = [];

        foreach ($events as $event){
            $cours[] = [
                'id' => $event->getId(),
                'start' => $event->getStart()->format('Y-m-d H:i:s'),
                'end' => $event->getEnd()->format('Y-m-d H:i:s'),
                'title' => $event->getTitle(),
                'backgroundColor' => $event->getBackgroundColor(),
                'textColor' => $event->getTextColor(),
            ];
        }

        $data = json_encode($cours);


        return $this->render('home/index.html.twig', compact('data'));
    }
}

