<template>
  <div class="page-content">
    <BtnBack :text="'Назад к товарам'" />
    <h3 class="title">Футболка оверсайз мужская в полоску с длинным рукавом</h3>
    <main>
      <div class="row">
        <div class="col-9">
          <div class="card">
            <div class="card-title">
              Склады:
              <hr>
            </div>
            <div class="warehouses" v-for="item in 3">
                <div class="ring-container">
                  <div class="ringring ring-green"></div>
                  <div class="circle circle-green"></div>
                </div>
                <div class="card-title text-nowrap">
                  Warehouse name 1
                </div>
              <div class="address">
                <div class="item-text-gray">
                  Город: <span class="item-text">Алматы</span>
                </div>
                <div class="item-text-gray">
                  Улица: <span class="item-text">Майлина, 79</span>
                </div>
                <div class="item-text-gray">
                  Тип: <span class="item-text">Основной склад</span>
                </div>
              </div>
              <div class="actions">
                <div class="quantity">
                  9999 шт
                </div>
                <div class="switch">
                  Перенести
                  <IconSwitch/>
                </div>
              </div>
              <div class="dropdown">
                <!-- Trigger button -->
                <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>Есть в наличии</span>
                </button>

                <!-- Dropdown menu -->
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
              </div>
              <div class="edit">
                <IconEdit/>
              </div>
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

export default {
  components: {
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
@import './Warehouse.sass';
</style>
