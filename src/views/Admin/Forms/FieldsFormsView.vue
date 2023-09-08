<template>
  <div class="page-content">
    <div class="mb-4">

      Торговая площадка

      /
      Поля и формы
    </div>
    <h3>Поля и формы</h3>

    <div class="row">
      <div class="col-9 p-0">
        <table class="table">
          <thead class="thead-dark">
          <tr class="table-head">
            <th></th>
            <th></th>
            <th scope="col">Название</th>
            <th scope="col">Системное имя</th>
            <th scope="col">Форматы отображения</th>
            <th scope="col" colspan="4">Триггер</th>

          </tr>
          </thead>
          <draggable v-model="forms" tag="tbody" item-key="name">
            <template #item="{ element, index }">
              <tr :class="{ 'active': element.active }">
                <td>
                  <IconDrag/>
                </td>
                <td>
                  Style:
                </td>
                <td class="w-200">{{ element.name }}</td>
                <td>
                  Text
                </td>
                <td>
                  Box with content, Drop down;
                </td>
                <td>
                  Text
                </td>
                <td class="text-center">
                  <label class="switch">
                    <input type="checkbox" @click="toggleCheckbox">
                    <div class="slider round"></div>
                  </label>
                </td>

                <td class="text-center" @click="editItem(index, 'finalitem')">
                  <IconEdit/>
                </td>
                <td class="text-center" @click="deleteItem(index, 'finalitem')">
                  <IconDelete/>
                </td>

              </tr>
            </template>
          </draggable>
        </table>
      </div>
      <div class="col-3 p-0">
        <div class="rightbar">
          <h2 class="rightbar-header">General</h2>

          <div class="sidebar-footer">
            <form action="">
              <input type="text" placeholder="Название поля">
              <input type="text" placeholder="Системное название (латиница)">
              <div class="dropdown">
                <!-- Trigger button -->
                <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>Тип поля</span>
                </button>

                <!-- Dropdown menu -->
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            </form>
            <hr>
            <div class="d-flex align-items-center justify-content-between">
              <h2 class="rightbar-header">Формат отображения</h2>
              <div class="d-flex">
                <IconPlus/>
                Добавить
              </div>
            </div>
            <div class="dropdown">
              <!-- Trigger button -->
              <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Тип поля</span>
              </button>

              <!-- Dropdown menu -->
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">111</a>
                <a class="dropdown-item" href="#">222</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">333</a>
              </div>
            </div>
            <hr>
            <textarea placeholder="Триггеры отображения" class="form-control" id="exampleFormControlTextarea1"
                      rows="3"></textarea>
            <hr>
            <button class="btn btn-main btn-orange ">Создать форму</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlus from "@/components/icons/IconPlus.vue";
import IconApple from "@/components/icons/IconApple.vue";
import IconDrag from "@/components/icons/IconDrag.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import IconLink from "@/components/icons/IconLink.vue";
import draggable from "vuedraggable";
import IconEye from "@/components/icons/IconEye.vue";

export default {

  components: {IconEye, IconDelete, IconEdit, IconDrag, IconApple, IconPlus, IconLink, draggable},
  data() {
    return {
      checkbox: false,
      newItem: '',
      forms: [
        {name: "Abby", active: false},
        {name: "Brooke", active: false},
        {name: "Courtenay", active: false},
        {name: "David", active: false}
      ],
      dragging: false,
      selectedCategory: null,
      selectedSubCategory: null,
      selectedSubSubCategory: null,
      selectedLastCategory: null,
      selectedFinalItem: null,
      isActive: false
    };
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    },
    editItem(index) {
      let finalItem = prompt('Edit item:', this.forms[index].name);
      if (finalItem !== null) {
        this.forms[index].name = finalItem;
      }
    },
    deleteItem(index) {
      const confirmDelete = confirm('Are you sure you want to delete this item?');
      if (confirmDelete) {
        this.forms.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
@import '../Category/CategorList.sass';
@import './FieldForms.sass';
</style>
