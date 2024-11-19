import { Component, OnInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    var swiper1 = new Swiper('.swiper1', {
      slidesPerView: 3,
      // spaceBetween: 10,
      loop: true,
      allowTouchMove: true,
      disableOnInteraction: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next-test',
        prevEl: '.swiper-button-prev-test',
      },
    });

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      slidesPerView: 4,
      // speed: 3500,
      // autoplay: {
      //   delay: 4,
      // },
      // spaceBetween: 5,
      // centeredSlides: true,
      allowTouchMove: true,
      disableOnInteraction: false,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 2,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
