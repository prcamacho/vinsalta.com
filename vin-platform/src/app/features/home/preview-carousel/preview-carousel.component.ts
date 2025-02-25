import { Component } from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-preview-carousel',
  standalone: true,
  imports: [],
  templateUrl: './preview-carousel.component.html',
  styleUrl: './preview-carousel.component.scss',
})
export class PreviewCarouselComponent {
  slides = [
    { src: 'assets/images/vin/slide1.png', alt: 'Slide 1' },
    { src: 'assets/images/vin/slide2.png', alt: 'Slide 2' },
    { src: 'assets/images/vin/slide3.png', alt: 'Slide 3' },
    { src: 'assets/images/vin/slide4.png', alt: 'Slide 4' },
    { src: 'assets/images/vin/slide5.png', alt: 'Slide 5' },
    { src: 'assets/images/vin/slide6.png', alt: 'Slide 6' },
    { src: 'assets/images/vin/slide7.png', alt: 'Slide 7' },
    { src: 'assets/images/vin/slide8.png', alt: 'Slide 8' },
    { src: 'assets/images/vin/slide9.png', alt: 'Slide 9' },
    { src: 'assets/images/vin/slide10.png', alt: 'Slide 10' },
    { src: 'assets/images/vin/slide11.png', alt: 'Slide 11' },
    { src: 'assets/images/vin/slide12.png', alt: 'Slide 12' },
    { src: 'assets/images/vin/slide13.png', alt: 'Slide 13' },
    { src: 'assets/images/vin/slide14.png', alt: 'Slide 14' },
    { src: 'assets/images/vin/slide15.png', alt: 'Slide 15' },
    { src: 'assets/images/vin/slide16.png', alt: 'Slide 16' },
  ];

  swiperInstance: Swiper | null = null;
  lightboxOpen = false;
  currentIndex = 0;

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  initializeSwiper(): void {
    this.swiperInstance = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 50,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.carousel__button--next',
        prevEl: '.carousel__button--prev',
      },
      pagination: {
        el: '.carousel__pagination',
        clickable: true,
      },
    });
  }

  openLightbox(index: number): void {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
