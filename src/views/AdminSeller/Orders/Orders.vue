<template>
  <div class="page-content">
    <div class="breadcrumb">Торговая площадка
      /
      Мой магазин
      /
      Заказы</div>
    <div class="d-flex">
        <h3 class="title">Заказы магазина</h3>
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
      <button class="btn btn-search">Добавить</button>
    </div>
    <main>
      <div class="table-responsive-md">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Номер заказа</th>
            <th scope="col">Время на обработку</th>
            <th scope="col">Имя клиента</th>
            <th scope="col">Сумма </th>
            <th scope="col">Дата заказа </th>
            <th scope="col">Способ оплаты </th>
            <th scope="col">Адрес доставки</th>
            <th scope="col">Способ доставки</th>
            <th scope="col">Подписать?</th>
            <th scope="col">Точка забора товара</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>098756816</td>
            <td>24 часа, 14 мин</td>
            <td>Габрилянов У.</td>
            <td>277.777</td>
            <td>23.07.23/15:46</td>
            <td>Kaspi QR</td>
            <td>Алмата, Кадырбе...</td>
            <td>TradeWay</td>
            <td>Нет</td>
            <td>Майлина 79</td>
          </tr>
          <tr>
            <td>098756816</td>
            <td>24 часа, 14 мин</td>
            <td>Габрилянов У.</td>
            <td>277.777</td>
            <td>23.07.23/15:46</td>
            <td>Kaspi QR</td>
            <td>Алмата, Кадырбе...</td>
            <td>TradeWay</td>
            <td>Нет</td>
            <td>Майлина 79</td>
          </tr>
          <tr>
            <td>098756816</td>
            <td>24 часа, 14 мин</td>
            <td>Габрилянов У.</td>
            <td>277.777</td>
            <td>23.07.23/15:46</td>
            <td>Kaspi QR</td>
            <td>Алмата, Кадырбе...</td>
            <td>TradeWay</td>
            <td>Нет</td>
            <td>Майлина 79</td>
          </tr>
          <tr>
            <td>098756816</td>
            <td>24 часа, 14 мин</td>
            <td>Габрилянов У.</td>
            <td>277.777</td>
            <td>23.07.23/15:46</td>
            <td>Kaspi QR</td>
            <td>Алмата, Кадырбе...</td>
            <td>TradeWay</td>
            <td>Нет</td>
            <td>Майлина 79</td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import IconImportImg from "@/components/icons/IconImportImg.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import IconUploadImg from "@/components/icons/IconUploadImg.vue";
import IconDeleteImgHover from "@/components/icons/IconDeleteImgHover.vue";
import IconEditTitle from "@/components/icons/IconEditTitle.vue";
import EditLogo from "@/components/icons/EditLogo.vue";
import defaultLogo from '@/assets/images/storeinfo.png';
import IconCopy from "@/components/icons/IconCopy.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
export default {
  components: {
    IconSearch,
    IconCopy, EditLogo, IconEditTitle, IconDeleteImgHover, IconUploadImg, IconDelete, IconImportImg},
  data() {
    return {
      logoImage: '',
      avatar: defaultLogo
    };
  },
  methods: {
    handleFileUpload(event) {
      // Handle the file selection and display the image
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.logoImage = reader.result
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
<style scoped>
@import './Orders.sass';
</style>
