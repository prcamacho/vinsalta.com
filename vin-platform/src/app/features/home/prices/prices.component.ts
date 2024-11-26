import { Component } from '@angular/core';

@Component({
  selector: 'vin-prices',
  standalone: true,
  imports: [],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
})
export class PricesComponent {
  // Ejemplo de datos dinámicos (puedes cargar estos datos desde un servicio o archivo JSON)
  pricingCategories = [
    {
      title: 'Canales VIP',
      items: [{ name: 'Sets - Lésbico - Vivos:', price: '$15000 al mes' }],
    },
    {
      title: 'Sexting',
      items: [
        { name: 'Solo texto:', price: '$800 el min' },
        { name: 'Con contenido del momento:', price: '$1500 el min' },
      ],
    },
    {
      title: 'Llamadas',
      items: [
        { name: 'Llamada de voz:', price: '$1000 el min' },
        { name: 'Videollamada:', price: '$2000 el min' },
      ],
    },
    {
      title: 'Audios',
      items: [
        { name: 'Grabado por Whatsapp/Telegram:', price: '$3000 el min' },
      ],
    },
    {
      title: 'Calificación de pene',
      items: [
        { name: 'Escrito:', price: '$2500' },
        { name: 'Audio:', price: '$3500' },
        { name: 'Video vestida normal:', price: '$7000' },
        { name: 'Video en lenceria:', price: '$9000 el min' },
        { name: 'Video desnuda:', price: '$15000 el min' },
        { name: 'Video con amiga:', price: '$25000' },
      ],
    },
    {
      title: 'Calificación de esperma',
      items: [
        { name: 'Sola:', price: '$7000' },
        { name: 'Con amiga:', price: '$11000' },
      ],
    },
    {
      title: 'Calificación de conchita',
      items: [{ name: 'Por foto:', price: '$7000' }],
    },
    {
      title: 'Fotos personalizadas',
      items: [
        { name: 'No explicita:', price: '$3000' },
        { name: 'Explicita:', price: '$4500' },
        { name: 'Zings:', price: '$7500' },
      ],
    },
    {
      title: 'Videos personalizados',
      items: [
        { name: 'No explicito:', price: '$8000 el minuto' },
        { name: 'Explicita:', price: '$11500 el minuto' },
      ],
    },
    {
      title: 'Novia virtual',
      items: [
        { name: '1 Dia:', price: '$40000' },
        { name: '1 Semana:', price: '$200000' },
        { name: '1 Mes:', price: '$500000' },
      ],
    },
    {
      title: 'Sumisa/Ama virtual',
      items: [
        { name: '1 Dia:', price: '$70000' },
        { name: '1 Semana:', price: '$300000' },
        { name: '1 Mes:', price: '$750000' },
      ],
    },
    {
      title: 'Fetiches extra disponibles',
      items: [
        { name: 'Fumar en el video:', price: '$5000' },
        { name: 'Pies:', price: '$3500' },
        { name: 'Menstruacion:', price: '$9000' },
        { name: 'Lluvia dorada:', price: '$9000' },
        { name: 'Anal (Solo 10 cm o menos):', price: '$35000' },
        { name: 'Ropa interior usada:', price: '$60000 envío incluido' },
        { name: 'Sin antifaz:', price: '$25000' },
      ],
    },
    {
      title: 'Hacer el amor sin limite de orgasmos',
      items: [
        { name: 'Precio por media hora sola:', price: '$60000' },
        {
          name: 'Precio por media hora en trio con amiga:',
          price: '$120000',
        },
        { name: 'Precio por hora sola:', price: '$120000' },
        {
          name: 'Precio por hora en trio con amiga:',
          price: '$220000',
        },
        {
          name: 'Opcionales:',
          price: '',
        },
        {
          name: 'Besos:',
          price: 'Dependiendo de la higiente',
        },
        {
          name: 'Caricias:',
          price: 'Si',
        },
        {
          name: 'Acabar en mis pechos:',
          price: 'Si',
        },
        {
          name: 'Acabar en mi panza:',
          price: 'Si',
        },
        {
          name: 'Tiempo para conocernos, comer, tomar algo:',
          price: 'Si, maximo 1 hora',
        },
        {
          name: 'Oral:',
          price: 'Si',
        },
        {
          name: 'Vaginal:',
          price: 'Si',
        },
        {
          name: 'Anal:',
          price: 'Ver tabla fetiches',
        },
        {
          name: 'Sin Proteccion:',
          price: 'No negociable',
        },
        {
          name: 'Hacerme Oral:',
          price: 'No negociable',
        },
      ],
    },
  ];
}
