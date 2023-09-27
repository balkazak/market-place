<template>
  <div class="page-content">
    <BtnBack :text="'Назад к товарам'" />
    <h3 class="title">Футболка оверсайз мужская в полоску с длинным рукавом</h3>

    <main>
      <div class="row">
        <div class="col-9">
          <div class="card">
           <div class="d-flex justify-content-between align-items-center">
             <div class="card-title">
               Вариации цен:
             </div>
             <div class="d-flex align-items-center">
               <span class="me-3">Одна цена для всех вариаций цвета</span>
               <label class="switch">
                 <input type="checkbox" @click="toggleCheckbox">
                 <div class="slider round"></div>
               </label>
             </div>
           </div>
            <hr>
            <div class="color-item">
              <div class="img" :style="{ backgroundImage: 'url(' + url + ')' }">
              </div>
              <div class="color-item-title">
                <span>Цвет:</span> Черно-белый
              </div>
            </div>
            <hr>
            <div class="price-item" v-for="item in prices">
              <div class="card-title">
                {{ item.name }}
              </div>
              <input v-model="item.fromCnt" type="text" placeholder="От скольки шт.">
              <icon-line class="mx-4"/>
              <input v-model="item.toCnt" type="text" placeholder="До скольки шт.">
              <icon-border-dots class="mx-4"/>
              <input v-model="item.regularPrice" type="text" placeholder="Регулярная цена">
              <icon-border-dots class="mx-4"/>
              <input v-model="item.discountPrice" type="text" placeholder="Акционная цена">
              <icon-border-dots class="mx-4"/>
              <button class="btn btn-main"><icon-checked class="mx-4"/>Сохранить</button>
              <div class="divider"></div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card card-right">
            <div class="card-title">
              Основное:
              <hr>
            </div>

            <div class="card-top">
              <div class="image" :style="{ backgroundImage: 'url(' + url + ')' }">

              </div>
              <Dropdown>
                <!-- trigger element -->
                <template #trigger>
                  <div class="warehouse-dropdown">
                    <div class="ring-container">
                      <div class="ringring ring-green"></div>
                      <div class="circle circle-green"></div>
                    </div>
                    <div class="me-2 text-nowrap">
                      <span>Статус: </span> <br>
                      <span>{{ status }}</span>
                    </div>
                    <IconDropdown/>
                  </div>
                </template>

                <!-- contents display in dropdown -->
                <div class="dropdown-list">
                  some contents
                </div>
              </Dropdown>
              <div class="edit">
                <IconEdit/>
              </div>
            </div>
            <p class="item-text-gray mt-5">Цена: <span class="item-text">3.100₸ - 5.200₸</span></p>
            <p class="item-text-gray">Код продукта: <span class="item-text">009783466378</span></p>
            <p class="item-text-gray">Артикул: <span class="item-text">WDR-2119-BLACK</span></p>
            <p class="item-text-gray">Дата создания: <span class="item-text">21 Февраля 2023 года</span></p>
            <p class="item-text-gray">Дата обновления: <span class="item-text">07 Июля 2023 года</span></p>
            <div class="btn-next">
              <span>Перейти на страницу объявления</span>
              <icon-next/>
            </div>
          </div>
          <div class="d-flex mt-5 float-end">
            <button class="btn btn-main btn-cancel me-4">Отменить</button>
            <button class="btn btn-main btn-orange ">Создать форму</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import IconDelete from "@/components/icons/IconDelete.vue";
import defaultLogo from '@/assets/images/storeinfo.png';
import IconSearch from "@/components/icons/IconSearch.vue";
import ButtonAdd from "@/components/common/ButtonAdd/ButtonAdd.vue";
import IconEye from "@/components/icons/IconEye.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import img from "@/assets/images/store-item-img.png"
import IconCircleGreen from "@/components/icons/IconCircleGreen.vue";
import IconCircleRed from "@/components/icons/IconCircleRed.vue";
import IconCircleOrange from "@/components/icons/IconCircleOrange.vue";
import IconDrag from "@/components/icons/IconDrag.vue";
import IconSwitch from "@/components/icons/IconSwitch.vue";
import BtnBack from "@/components/common/ButtonBack/BtnBack.vue";
import urlImg from "@/assets/images/warehouse-item.png"
import IconNext from "@/components/icons/IconNext.vue";
import Dropdown from "v-dropdown";
import IconDropdown from "@/components/icons/IconDropdown.vue";
import IconLine from "@/components/icons/IconLine.vue";
import IconBorderDots from "@/components/icons/IconBorderDots.vue";
import IconChecked from "@/components/icons/IconChecked.vue";

export default {
  components: {
    IconChecked,
    IconBorderDots,
    IconLine,
    IconDropdown,
    IconNext,
    BtnBack,
    IconSwitch,
    IconDrag,
    IconCircleOrange,
    IconCircleRed,
    IconCircleGreen,
    IconEdit, IconPlus, IconEye,
    ButtonAdd,
    IconSearch,
    IconDelete,
    Dropdown},
  data() {
    return {
      prices: [
        {
          name: 'Розничная цена: ',
          fromCnt: null,
          toCnt: null,
          regularPrice: null,
          discountPrice: null
        },
        {
          name: 'Мелко-оптовая цена: ',
          fromCnt: null,
          toCnt: null,
          regularPrice: null,
          discountPrice: null
        },
        {
          name: 'Оптовая цена: ',
          fromCnt: null,
          toCnt: null,
          regularPrice: null,
          discountPrice: null
        },
        {
          name: 'Крупно-оптовая цена: ',
          fromCnt: null,
          toCnt: null,
          regularPrice: null,
          discountPrice: null
        }
      ],
      category: null,
      status: 'В продаже',
      url: urlImg,
      logoImage: '',
      avatar: defaultLogo,
      finalItem: [
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'В продаже'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'В продаже'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Нет в наличии'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Приостановлено'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Приостановлено'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Приостановлено'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Приостановлено'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Приостановлено'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Приостановлено'
        },
        {
          img: img,
          name: 'Бюстгальтер Треугольной Формы Lara Summer Vibes',
          article: 'KFH198KOID23',
          category: 'Женщины/Нижнее белье',
          price: '17.000 - 21000 ₸ ',
          cnt: [
            {name: 'Склад на майлина', cnt: 235},
            {name: 'Астана', cnt: 59},
            {name: 'Караганда', cnt: 0}
          ],
          status: 'Приостановлено'
        }
      ],
    };
  },
  methods: {

  },
};
</script>
<style scoped>
@import './PriceVariation.sass';
</style>
