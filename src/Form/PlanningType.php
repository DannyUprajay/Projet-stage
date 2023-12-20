<?php

namespace App\Form;

use App\Entity\Planning;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanningType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', null, [
                'attr' => ['class' => 'form-control'],
            ])
            ->add('start', DateTimeType::class, [
                'widget' => 'single_text',
                'attr'   => ['class' => 'form-control'],
            ])
            ->add('end', DateTimeType::class, [
                'widget' => 'single_text',
                'attr'   => ['class' => 'form-control'],
            ])
            ->add('background_color', ColorType::class, [
                'attr' => ['class' => 'form-control'],
            ])
            ->add('text_color', ColorType::class, [
                'attr' => ['class' => 'form-control'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Planning::class,
        ]);
    }
}
