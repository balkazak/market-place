<template>
  <div class="swiper-footer">
    <div class="title">
      Вы смотрели
    </div>
    <div class="d-flex align-items-center">
      <div class="prev" @click="prevSlide">
        <IconSwiperPrev />
      </div>
      <div ref="slider" class="keen-slider">
        <div class="keen-slider__slide number-slide1" v-for="item in items">
          <div class="slide">
            <div class="image" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
            <div class="right-content">
              <div class="slide-title">{{ item.name }}</div>
              <div class="desc">{{ item.desc }}</div>
              <div class="bar">
                <BarRating :rate="4"/>
              </div>
              <div class="price">
                {{ item.price }} ₸ <span>Мин.: {{ item.cnt }} шт.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next" @click="nextSlide">
        <IconSwiperNext />
      </div>
    </div>
  </div>
</template>

<script>
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css'
import BarRating from "@/components/common/BarRating/BarRating.vue";
import IconSwiperPrev from "@/components/icons/IconSwiperPrev.vue";
import IconSwiperNext from "@/components/icons/IconSwiperNext.vue";

import airpods from '@/assets/images/airpods.png'
import sit from '@/assets/images/sit.png'
import woman from '@/assets/images/woman.png'


export default {
  components: {IconSwiperNext, IconSwiperPrev, BarRating},
  data() {
    return {
      items: [
        {
          name: 'Airpods pro',
          desc: 'уникальные беспроводные наушники. Они легко настраиваются ',
          price: '1200 - 1600',
          cnt: 1,
          img: airpods
        },
        {
          name: 'Кресло СТРАНДМОН',
          desc: 'Кресло с высокой спинкой обеспечит оптимальный комфорт.',
          price: '3500 - 4500',
          cnt: 1,
          img: sit
        },
        {
          name: 'Художественное полотно',
          desc: 'кукла из международного телешоу «Улица Сезам», пушистый ...',
          price: '7000 - 9500',
          cnt: 1,
          img: woman
        },
        {
          name: 'Airpods pro',
          desc: 'уникальные беспроводные наушники. Они легко настраиваются ',
          price: '1200 - 1600',
          cnt: 1,
          img: airpods
        }
      ]
    };
  },
  mounted() {
    // Initialize Keen Slider when the component is mounted
    this.slider = new KeenSlider(this.$refs.slider, {
      loop: true, // Enable loop if you want it to cycle through slides continuously
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 4, spacing: 24 },
        },
      },
      slides: { perView: 1 },
    });
  },
  methods: {
    nextSlide() {
      this.slider.next();
    },
    prevSlide() {
      this.slider.prev();
    }
  },
}
</script>

<style scoped>
  @import './Swiper.sass';
</style>
