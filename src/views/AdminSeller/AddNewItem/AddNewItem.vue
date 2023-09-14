<template>
  <div class="page-content">
    <div class="breadcrumb">

      Мои товары

      /
      Добавление нового товара
    </div>
    <h3>Добавление нового товара</h3>
    <main>
      <div class="column">
        <div class="column-header">
          Основное
        </div>
        <div class="dropdown">
          <!-- Trigger button -->
          <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>Выберете категорию товара</span>
          </button>

          <!-- Dropdown menu -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </div>
        <input type="text" placeholder="Название">
        <input type="text" placeholder="Цифры штрихкода (если есть)">
        <input type="text" placeholder="Артикул">
        <div class="d-flex gap-4">
          <input type="text" placeholder="Цена за 1-10 ед">
          <input type="text" placeholder="Цена за 20-40 ед">
        </div>
        <div class=" d-flex gap-4">
          <input type="text" placeholder="Цена за 100+ ед">
          <input type="text" placeholder="Цена за 1000+ ед">
        </div>
        <div class="text">
          НДС (Налог на добавленную стоимость) *
        </div>
        <div class="d-flex mt-4">
          <div class=" radio-button d-flex align-items-center">
            <input type="radio" id="test1" name="radio-group" checked>
            <label for="test1">Apple</label>
          </div>
          <div class=" radio-button d-flex align-items-center">
            <input type="radio" id="test2" name="radio-group">
            <label for="test2">Peach</label>
          </div>
          <div  class="radio-button d-flex align-items-center">
            <input type="radio" id="test3" name="radio-group">
            <label for="test3">Orange</label>
          </div>
        </div>
        <div class="text">
          Варианты цвета
        </div>
        <div class="d-flex justify-content-between align-items-center my-4">
          <label for="image">
            <div v-if="selectedOption.url" class="table-image" :style="{ backgroundImage: 'url(' + selectedOption.url + ')' }">
            </div>
            <IconImportImg v-else/>
            <input ref="image" @change="handleFileUpload" class="visually-hidden" type="file" accept="image/*" name="image" id="image">
          </label>
          <input v-model="selectedOption.name" class="importImg" type="text" placeholder="Укажите название">
          <button @click="addOption(selectedOption)" class="btn btn-add">Добавить</button>
        </div>
        <div>
          <table>
            <colgroup>
              <col>
              <col class="middle-column">
              <col>
            </colgroup>
            <tr class="table-head">
              <th>Фото</th>
              <th class="ms-4">Название вариации</th>
              <th class="text-end pe-4">Действие</th>
            </tr>
            <tr v-for="(option, index) in colorOptions" :key="index">
              <td>
                <div class="table-image" :style="{ backgroundImage: 'url(' + option.url + ')' }">
                </div>
              </td>
              <td>
                {{ option.name }}
              </td>
              <td class="text-end pe-4">
                <IconDelete @click="deleteOption(index)"/>
              </td>
            </tr>
          </table>
        </div>
        <div class="text">
          Варианты размеров в наличии
        </div>
        <div class="sizes" >
          <div class="size" v-for="(size, index) in sizes" :key="index">
            <input :id="index" type="checkbox" v-model="size.checked">
            <label :for="index">{{ size.number}}</label>
          </div>
        </div>
        <div class="text">
          Текстовое описание товара
        </div>
        <textarea placeholder="Триггеры отображения" class="form-control mt-4" id="exampleFormControlTextarea1"
                  rows="3"></textarea>
      </div>
      <div class="column">
        <div class="column-header">
          Инфо о товаре
        </div>
        <div class="dropdown">
          <!-- Trigger button -->
          <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>Сезонность</span>
          </button>

          <!-- Dropdown menu -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Состав  ">
          </div>
          <div class="col-6">
            <div class="dropdown">
              <!-- Trigger button -->
              <button data-bs-toggle="dropdown" class="btn dropdown-toggle " type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Единица измерений</span>
              </button>

              <!-- Dropdown menu -->
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">Settings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Состав  ">
          </div>
          <div class="col-6">
            <div class="dropdown">
              <!-- Trigger button -->
              <button data-bs-toggle="dropdown" class="btn dropdown-toggle " type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Единица измерений</span>
              </button>

              <!-- Dropdown menu -->
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">Settings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Состав  ">
          </div>
          <div class="col-6">
            <div class="dropdown">
              <!-- Trigger button -->
              <button data-bs-toggle="dropdown" class="btn dropdown-toggle " type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Единица измерений</span>
              </button>

              <!-- Dropdown menu -->
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">Settings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column-header mt-4">
          Габарит и вес
        </div>
        <input type="text" placeholder="Длина упаковки, мм *">
        <input type="text" placeholder="Ширина упаковки, мм *">
        <input type="text" placeholder="Высота упаковки, мм *">
        <input type="text" placeholder="Вес упаковки *">
        <div class="column-header mt-4">
          Дополнительные опции
        </div>
        <input type="text" placeholder="Дополнительная опция 1">
        <input type="text" placeholder="Дополнительная опция 2">
      </div>
      <div class="column">
        <div class="column-header mb-4">
          Габарит и вес
        </div>
        <div class="image-uploader">
          <div class="preview-list">
            <div class="table-image" :style="{ backgroundImage: 'url(' + selectedOption.url + ')' }">
            </div>
            <div>

            </div>
            <div v-for="(image, index) in uploadedImages" :key="index"  class=" preview-item image-container">
              <img  :src="image" alt="Preview">
              <div class="overlay">
                <IconDeleteImgHover @click="removeImage(index)" />
              </div>
            </div>
          </div>
          <div class="drop-zone" @dragover.prevent @drop="handleDrop">
            <IconUploadImg />

            <p>Переместите фото сюда </p>
            <input type="file" ref="fileInput" @change="handleFileInput" multiple style="display: none;" />
          </div>
        </div>
        <div class="confirm">
          <button class="btn btn-main btn-cancel me-4">Отменить</button>
          <button class="btn btn-main btn-orange ">Создать форму</button>

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

export default {
  components: {IconDeleteImgHover, IconUploadImg, IconDelete, IconImportImg},
  data() {
    return {
      imageList: [],
      previewUrl: '',
      imageTitle: '',
      colorOptions: [],
      selectedOption: {
        name: '',
        url: ''
      },
      sizes: [
        {
          number: 28,
          checked: false
        },
        {
          number: 32,
          checked: false
        },
        {
          number: 34,
          checked: false
        },
        {
          number: 35,
          checked: false
        },
        {
          number: 17,
          checked: false
        },
        {
          number: 21,
          checked: false
        },
        {
          number: 12,
          checked: false
        },
        {
          number: 11,
          checked: false
        },
        {
          number: 55,
          checked: false
        },
        {
          number: 44,
          checked: false
        }
      ],
      uploadedImages: [],
    };
  },
  methods: {
    addOption(option) {
      if (option.name && option.url) {
        this.colorOptions.push({...this.selectedOption});
        this.selectedOption = {};
      }
    },
    handleFileUpload(event) {
      // Handle the file selection and display the image
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.selectedOption.url = reader.result
        };
        reader.readAsDataURL(file);
      }
    },
    deleteOption(index) {
      this.colorOptions.splice(index, 1);
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    },
    handleFileInput() {
      const files = this.$refs.fileInput.files;
      this.handleFiles(files);
    },
    handleFiles(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = () => {
            this.uploadedImages.push(reader.result);
          };
          reader.readAsDataURL(file);
        }
      }
    },
    removeImage(index) {
      this.uploadedImages.splice(index, 1);
    },
  },
};
</script>
<style scoped>
@import './AddNewItem.sass';
</style>
