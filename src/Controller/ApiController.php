<?php

namespace App\Controller;

use App\Entity\Planning;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api')]
class ApiController extends AbstractController
{
    #[Route('/', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    #[Route('/{id}/edit', name: 'app_api_edit',  methods: ['PUT']) ]
    public function majEvent(?Planning $planning, Request $request, EntityManagerInterface $entityManager): Response
    {
        $donnees = json_decode($request->getContent());

        if(
            isset($donnees->title) && !empty($donnees->title) &&
            isset($donnees->start) && !empty($donnees->start) &&
            isset($donnees->end) && !empty($donnees->end) &&
            isset($donnees->backgroundColor) && !empty($donnees->backgroundColor) &&
            isset($donnees->textColor) && !empty($donnees->textColor)
        ){

            $code = 200;

            if(!$planning){
                $planning = new Planning();
                $code = 201;
            }
            $planning->setTitle($donnees->title);
            $planning->setStart(new DateTime($donnees->start));
            $planning->setEnd(new DateTime($donnees->end));
            $planning->setBackgroundColor($donnees->backgroundColor);
            $planning->setTextColor($donnees->textColor);

            $entityManager->persist($planning);
            $entityManager->flush();

            return new Response('Ok', $code);
        }else{

            return new Response('Données incomplètes', 404);
        }



    }


}
