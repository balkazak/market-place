<template>
  <div class="page-content">
    <div class="mb-4">

      Торговая площадка

      /
      Поля и формы
    </div>
    <h3>Добавление юрлица</h3>

    <div class="row">
      <div class="col-lg-9 p-0">
        <table class="table">
          <thead class="thead-dark">
          <tr class="table-head">
            <th></th>
            <th></th>
            <th scope="col">Название</th>
            <th scope="col">ИИН / БИН</th>
            <th scope="col">Администратор</th>
            <th scope="col">Телефон</th>
            <th scope="col">E-mail</th>
            <th></th>
            <th></th>
            <th></th>

          </tr>
          </thead>
          <draggable v-model="companies " tag="tbody" item-key="name">
            <template #item="{ element, index }">
              <tr :class="{ 'active': element.active }">
                <td>
                  <IconDrag/>
                </td>
                <td>
                  ТОО:
                </td>
                <td class="w-200">{{ element.name }}</td>
                <td>
                  06686577656
                </td>
                <td>
                  Кунаев Динмухамед
                </td>
                <td>
                  +7 707 708 44 55
                </td>
                <td>
                  Admin@bramf.kz
                </td>
                <td class="text-center">
                  <label class="switch">
                    <input type="checkbox" @click="toggleCheckbox">
                    <div class="slider round"></div>
                  </label>
                </td>

                <td class="text-center" @click="editItem(index)">
                  <IconEdit/>
                </td>
                <td class="text-center" @click="deleteItem(index)">
                  <IconDelete/>
                </td>
              </tr>
            </template>
          </draggable>
        </table>
      </div>
      <div class="col-lg-3 p-0">
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
              <h2 class="rightbar-header">Администратор</h2>
              <div>
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
      companies: [
        {name: "BRAMF", active: false},
        {name: "Microsoft", active: false},
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
      let finalItem = prompt('Edit item:', this.companies[index].name);
      if (finalItem !== null) {
        this.companies[index].name = finalItem;
      }
    },
    deleteItem(index) {
      const confirmDelete = confirm('Are you sure you want to delete this item?');
      if (confirmDelete) {
        this.companies.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
@import '../Category/CategorList.sass';
@import './Companies.sass';
</style>
