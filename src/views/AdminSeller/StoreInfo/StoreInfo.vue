<template>
  <div class="page-content">
    <div class="breadcrumb">

      Торговая площадка

      /
      Мой магазин
    </div>
    <h3>Информация о магазине</h3>
    <main>
     <div class="row cards-wrapper">
       <div class="col-3">
         <div class="card">
           <div class="card-title">
             <span>Логотип  и название:</span>
             <IconEditTitle />
           </div>
           <hr>
           <div class="card-body">
             <div class="logo" :style="logoImage ? { backgroundImage: 'url(' + logoImage + ')' } : { backgroundImage: 'url(' + avatar + ')' }">
               <label for="image">
                 <div v-if="logoImage" class="table-image" :style="{ backgroundImage: 'url(' + logoImage + ')' }">
                 </div>
                 <div class="edit">
                   <EditLogo />
                 </div>
                 <input ref="image" @change="handleFileUpload" class="visually-hidden" type="file" accept="image/*" name="image" id="image">
               </label>
             </div>
           </div>
           <div class="card-bottom">
             <p>Название: <span class="bold">ТОО Bonton</span></p>
           </div>
         </div>
         <div class="card mt-4">
           <div class="d-flex align-items-center justify-content-between">
             <p>Ссылка на ваш магазин:</p>
             <IconCopy />
           </div>
           <hr class="my-3">
           <div class="d-flex align-items-center justify-content-between">
             <p>Ссылка на ваш магазин:</p>
             <IconCopy />
           </div>
         </div>

       </div>
       <div class="col-5">
         <div class="card">
           <div class="card-title">
             <span>Менеджер обработки заказов: </span>
             <IconEditTitle />
           </div>
           <hr>
           <div class="card-body">
             <p>Имя: <span>Маргарита</span></p>
             <p>Фамилия: <span>Асикайнен</span></p>
             <p>E-mail: <span>margarita_asikainen@yandex.ru</span></p>
             <p>Телефон: <span>+7 707 777 77 77</span></p>
             <p>Время работы: <span>Пн-Вс: 09:00 - 23:00 </span></p>
           </div>
         </div>

       </div>
       <div class="col-4">
         <div class="card">
           <div class="card-title">
             <span>Контактный телефон для покупателей: </span>
             <IconEditTitle />
           </div>
           <hr>
           <div class="card-body">
             <p>Алматы: <span>+7 777 777 77 77 </span></p>
             <p>Астана: <span>+7 999 999 99 99 </span></p>
           </div>
         </div>

       </div>
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
export default {
  components: {IconCopy, EditLogo, IconEditTitle, IconDeleteImgHover, IconUploadImg, IconDelete, IconImportImg},
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
@import './StoreInfo.sass';
</style>
