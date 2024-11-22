import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-preview-carousel',
  standalone: true,
  imports: [],
  templateUrl: './preview-carousel.component.html',
  styleUrl: './preview-carousel.component.scss',
})
export class PreviewCarouselComponent implements AfterViewInit {
  slides = [
    { src: 'assets/images/vin/slide1.jpg', alt: 'Slide 1' },
    { src: 'assets/images/vin/slide2.jpg', alt: 'Slide 2' },
    { src: 'assets/images/vin/slide3.jpg', alt: 'Slide 3' },
    { src: 'assets/images/vin/slide4.jpg', alt: 'Slide 4' },
  ];

  swiperInstance: Swiper | null = null;
  lightboxOpen = false;
  lightboxImage = '';

  @ViewChildren('carouselImage') images!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    const imageElements = this.images.toArray();
    let loadedImagesCount = 0;

    imageElements.forEach((imageElement, index) => {
      const img = imageElement.nativeElement as HTMLImageElement;

      // Si la imagen ya está cargada, incrementamos el contador
      if (img.complete) {
        loadedImagesCount++;
      } else {
        img.onload = () => {
          loadedImagesCount++;
          // Si todas las imágenes han sido cargadas, inicializamos Swiper
          if (loadedImagesCount === imageElements.length) {
            this.initializeSwiper();
          }
        };
      }
    });

    // Si todas las imágenes ya estaban cargadas
    if (loadedImagesCount === imageElements.length) {
      this.initializeSwiper();
    }
  }

  initializeSwiper(): void {
    // Inicializa el Swiper una vez que todas las imágenes estén cargadas
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

  openLightbox(image: string): void {
    this.lightboxImage = image;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }
}

