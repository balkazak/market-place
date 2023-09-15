<template>
  <div class="page-content ps-0">
    <div class="breadcrumb ps-4">

      Торговая площадка

      /
      Мой магазин
    </div>
    <div class="d-flex">
      <h3 class="title ps-4">Товары вашего магазина</h3>
      <div class=" rounded rounded-pill">
        <div class="input-group">
          <div class="input-group-prepend">
            <button id="button-addon2" type="submit" class="btn btn-link text-warning">
              <IconSearch />
            </button>
          </div>
          <input type="search" placeholder="Поиск заказа по ФИО или номеру заказа" aria-describedby="button-addon2" class="form-control border-0 bg-light">
          <div class="input-group-append">
            <button id="button-addon1" type="submit" class="btn btn-main btn-orange h-100">Найти</button>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <!-- Trigger button -->
        <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>Категория</span>
        </button>

        <!-- Dropdown menu -->
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <div class="dropdown">
        <!-- Trigger button -->
        <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>По наличию</span>
        </button>

        <!-- Dropdown menu -->
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      <button-add class="ms-auto" :plus="true"> ДОБАВИТЬ </button-add>
    </div>
    <main>
      <div class="table-wrapper">
        <table  class="table">
          <thead class="thead-dark">
          <tr class="table-head">
            <th></th>
            <th> Товар</th>
            <th scope="col"></th>
            <th scope="col">Категория</th>
            <th scope="col">Цена</th>
            <th scope="col">Количество на складах</th>
            <th scope="col">Статус</th>
          </tr>
          </thead>
          <tbody>
            <template v-for="(element, index) in finalItem">
              <tr :class="{ 'active': element.active }" @click="setItem(element, index, 'finalitem')">
                <td>
                  <input type="checkbox">
                </td>
                <td>
                  <div class="item-img" :style="{ backgroundImage: 'url(' + element.img + ')' }"></div>
                </td>
                <td class="">
                  <div>
                    <h2 class="item-title">{{ element.name }}</h2>
                    <p class="item-text-gray">Артикул: <span class="item-text">{{element.article}}</span></p>
                  </div>
                </td>
                <td>
                  {{ element.category }}
                </td>
                <td>
                  {{ element.price }}
                </td>
                <td>
                  <div v-for="item in element.cnt" class="item-text-gray">
                    {{ item.name}}: <span class="item-text">{{ item.cnt}} шт.</span>
                  </div>
                </td>
                <td>
                  <IconCircleGreen class="me-1" v-if="element.status === 'В продаже'"/>
                  <IconCircleRed class="me-1" v-if="element.status === 'Нет в наличии'"/>
                  <IconCircleOrange class="me-1" v-if="element.status === 'Приостановлено'"/>
                  {{ element.status }}
                </td>
                <td class="text-center" @click="editItem(index, 'finalitem')">
                  <IconEye/>
                </td>
                <td class="text-center" @click="editItem(index, 'finalitem')">
                  <IconEdit/>
                </td>
                <td class="text-center" @click="deleteItem(index, 'finalitem')">
                  <IconDelete/>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
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
export default {
  components: {
    IconCircleOrange,
    IconCircleRed,
    IconCircleGreen,
    IconEdit, IconPlus, IconEye,
    ButtonAdd,
    IconSearch,
    IconDelete},
  data() {
    return {
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
@import './GoodsList.sass';
</style>
