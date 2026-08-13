import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-products',
  imports: [],
  templateUrl: './corporate-products.html',
  styleUrl: './corporate-products.css',
})
export class CorporateProducts {
  currentSlide = 0;
  totalSlides = 5;

  onSlide(event: any) {
    this.currentSlide = event?.to ?? 0;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;

    const carouselElement = document.getElementById('industryCarousel');
    if (!carouselElement) {
      return;
    }

    const bootstrapCarousel = (window as any).bootstrap?.Carousel?.getOrCreateInstance?.(carouselElement);
    if (bootstrapCarousel) {
      bootstrapCarousel.to(index);
      return;
    }

    const slides = carouselElement.querySelectorAll<HTMLElement>('.carousel-item');
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });
  }
}
