<template>
  <div class="page-content">
    <div class="breadcrumb">Торговая площадка
      /
      Мой магазин
      /
      Заказы
    </div>
    <h3 class="title">Заказ №098756816</h3>
    <main>
      <div class="parent">
        <div class="div1">
          <div class="card">
            <div class="card-title">
              Состав заказа:
            </div>
            <div class="card-body">
              <div class="order-img" :style="{ backgroundImage: 'url(' + orderImg + ')' }"></div>
              <div class="ms-4">
                <p>Артикул: <span>WDR-2119-BLACK</span></p>
                <p>Количество: <span>1</span></p>
                <p>Цена: <span>17.000 ₸ </span></p>
                <p>Название в TradeWay</p>
                <p class="orange">Комплект Sexy Fashion WDR-2119-BLACK Размеры XS - XXL </p>
              </div>
            </div>
            <div class="card-bottom">
              <p>Название в системе продаца:</p>
              <p class="text-dark">Комплект белья из эластичной сетки: топ и трусики S-XXL </p>
            </div>
          </div>
        </div>
        <div class="div2">
          <div class="card">
            <div class="card-title">
              Информация по доставке
            </div>
            <p>Наименование транспортной компании: <span>TradeWay Delivery</span></p>
            <p>Точка передачи заказа: <span>Алматы, Ул. Толстого, 177 </span></p>
            <p>Статус доставки: <span>Ожидает передачу курьеру</span></p>
          </div>
        </div>
        <div class="div3">
          <div class="card">
            <div class="card-title mb-4">
              Подробнее
            </div>
            <p>Статус: <span>Новый (Время на обработку заказа 4 часа, 31 минута)</span></p>
            <p>Адрес доставки: <span>Караганда, улица Кадырбекулы 45, кв. 71</span></p>
            <p>Дата поступления заказа: <span>23.07.2023 / 20:41</span></p>
            <p>Планируемая дата передачи курьеру: <span>29.07.2023 / 12:00</span></p>
            <p>Планируемая дата доставки: <span>29.07.2023 / 15:00</span></p>
            <p>Стоимость доставки для клиента: <span>0 ₸</span></p>
            <p>Способ оплаты: <span>Банковская карта</span></p>
            <div class="card-title my-4">
              История изменений статусов
            </div>
            <div class="row">
              <div class="col-3">
                <p class="mb-4">Дата</p>
                <p><span>24.07.2023/10:00</span></p>
                <p><span>24.07.2023/10:00</span></p>
                <p><span>24.07.2023/10:00</span></p>
              </div>
              <div class="col-3">
                <p class="mb-4">Статус</p>
                <p><span>Передан партнеру</span></p>
                <p><span>Передан в доставку</span></p>
                <p><span>доставлен</span></p>
              </div>
              <div class="col-3">
                <p class="mb-4">Участник</p>
                <p><span>TradeWay</span></p>
                <p><span>TradeWay  delivery</span></p>
                <p><span>Покупатель</span></p>
              </div>
              <div class="col-3">
                <p class="mb-4">Контакты</p>
                <p><span>+7 777 777 77 77</span></p>
                <p><span>+7 777 777 77 77</span></p>
                <p><span>+7 999 999 99 99</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="div4">
          <div class="card">
            <div class="card-title">
              Данные покупателя
            </div>
            <p>Имя: <span>Жасулан Булан Батор</span></p>
            <p>Телефон: <span>+7 707 707 77 77</span></p>
            <p>E-mail: <span>Jasulan.u@mail.kz</span></p>
          </div>
        </div>
        <div class="div5">
          <div class="card">
            <textarea placeholder="Комментарий о заказе" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button class="btn btn-main">Оставить комментарий</button>
          </div>
        </div>
        <div class="div6">
          <ul>
            <li>Убедитесь что товар есть у вас на складе</li>
            <li>Убедитесь что сможете передать товар в сулжбу отправки в поставленный срок</li>
          </ul>
          <div class="d-flex mt-4">
            <button class="btn btn-main btn-cancel me-4">Отменить</button>
            <button class="btn btn-main btn-orange ">Создать форму</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import imgOrder from '@/assets/images/orderImage.png'

export default {
  data() {
    return {
      logoImage: '',
      orderImg: imgOrder
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
@import './SingleOrder.sass';
</style>
