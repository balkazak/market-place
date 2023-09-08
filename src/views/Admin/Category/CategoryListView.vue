<template>
  <div class="page-content">
    <div class="mb-4">

      Торговая площадка

      /
      Категории
    </div>
    <div class="d-lg-flex ">
      <table class="table">
        <thead class="thead-dark">
        <tr class="table-head">
          <th colspan="2" scope="col">Категория</th>
          <th colspan="3" scope="col" @click="addItem('category')">
            <IconPlus/>
            Добавить
          </th>
        </tr>
        </thead>
        <draggable v-model="categories" tag="tbody" item-key="name">
          <template #item="{ element, index }">
            <tr :class="{ 'active': element.active }" @click="setItem(element, index, 'category')">
              <td>
                <IconDrag/>
              </td>

              <td scope="row">
                <IconApple/>
              </td>
              <td class="w-200">{{ element.name }}</td>
              <td class="text-center" @click="editItem(index, 'category')">
                <IconEdit/>
              </td>
              <td class="text-center" @click="deleteItem(index, 'category')">
                <IconDelete/>
              </td>

            </tr>
          </template>
        </draggable>
      </table>
      <table v-if="selectedCategory" class="table">
        <thead class="thead-dark">
        <tr class="table-head">
          <th colspan="2  " scope="col">Категория</th>
          <th colspan="2" scope="col" @click="addItem('subcategory')">
            <IconPlus/>
            Добавить
          </th>
        </tr>
        </thead>
        <draggable v-model="subCategories " tag="tbody" item-key="name">
          <template #item="{ element, index }">
            <tr :class="{ 'active': element.active }" @click="setItem(element, index, 'subcategory')">
              <td>
                <IconDrag/>
              </td>

              <td class="w-200">{{ element.name }}</td>
              <td class="text-center" @click="editItem(index, 'subcategory')">
                <IconEdit/>
              </td>
              <td class="text-center" @click="deleteItem(index, 'subcategory')">
                <IconDelete/>
              </td>

            </tr>
          </template>
        </draggable>
      </table>
      <table v-if="selectedSubCategory" class="table">
        <thead class="thead-dark">
        <tr class="table-head">
          <th colspan="2  " scope="col">Категория</th>
          <th colspan="2" scope="col" @click="addItem('subsubcategory')">
            <IconPlus/>
            Добавить
          </th>
        </tr>
        </thead>
        <draggable v-model="subSubCategories " tag="tbody" item-key="name">
          <template #item="{ element, index }">
            <tr :class="{ 'active': element.active }" @click="setItem(element, index, 'subsubcategory')">
              <td>
                <IconDrag/>
              </td>

              <td class="w-200">{{ element.name }}</td>
              <td class="text-center" @click="editItem(index, 'subsubcategory')">
                <IconEdit/>
              </td>
              <td class="text-center" @click="deleteItem(index, 'subsubcategory')">
                <IconDelete/>
              </td>

            </tr>
          </template>
        </draggable>
      </table>
      <table v-if="selectedSubSubCategory" class="table">
        <thead class="thead-dark">
        <tr class="table-head">
          <th colspan="2  " scope="col">Категория</th>
          <th colspan="3" scope="col" @click="addItem('lastcategory')">
            <IconPlus/>
            Добавить
          </th>
        </tr>
        </thead>
        <draggable v-model="lastCategories " tag="tbody" item-key="name">
          <template #item="{ element, index }">
            <tr :class="{ 'active': element.active }" @click="setItem(element, index, 'lastcategory')">
              <td>
                <IconDrag/>
              </td>

              <td class="w-200">{{ element.name }}</td>
              <td class="text-center">
                <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <IconLink/>
                </button>

                <!-- Dropdown menu -->
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div>
                      <input
                        type="text"
                        v-model="searchText"
                        @input="filterItems"
                        placeholder="Search..."
                    />
                    <ul v-if="filteredItems.length > 0">
                      <li v-for="(item, index) in filteredItems" :key="index">
                        <div @click="selectItem(item)">{{ item }}</div>
                        <IconX @click="removeItem(index)"/>
                      </li>
                    </ul>
                    <ul v-else>
                      <li v-for="(item, index) in items" :key="index">
                        <div @click="selectItem(item)">{{ item }}</div>
                        <IconX @click="removeItem(index)"/>
                      </li>
                    </ul>
                  </div>
                </div>

              </td>

              <td class="text-center" @click="editItem(index, 'lastcategory')">
                <IconEdit/>
              </td>
              <td class="text-center" @click="deleteItem(index, 'lastcategory')">
                <IconDelete/>
              </td>

            </tr>
          </template>
        </draggable>
      </table>
    </div>
    <div v-if="selectedLastCategory">
      <h3>Формы категории: Кеды</h3>
      <table  class="table">
        <thead class="thead-dark">
        <tr class="table-head">
          <th></th>
          <th></th>
          <th scope="col">Название</th>
          <th scope="col">Type</th>
          <th scope="col">Описание</th>
          <th colspan="3" scope="col" @click="addItem('finalitem')">
            <IconPlus/>
            Добавить
          </th>
        </tr>
        </thead>
        <draggable v-model="finalItem " tag="tbody" item-key="name">
          <template #item="{ element, index }">
            <tr :class="{ 'active': element.active }" @click="setItem(element, index, 'finalitem')">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </td>
              <td class="text-center">
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
        </draggable>
      </table>
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
import IconX from "@/components/icons/IconX.vue";

export default {

  components: {IconX, IconEye, IconDelete, IconEdit, IconDrag, IconApple, IconPlus, IconLink, draggable},
  data() {
    return {
      searchText: '',
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
      ],
      filteredItems: [],
      items1: [
        { text: 'Item 1', checked: false },
        { text: 'Item 2', checked: false },
        { text: 'Item 3', checked: false },
      ],
      newItem: '',
      categories: [
        {name: "Abby", active: false},
        {name: "Brooke", active: false},
        {name: "Courtenay", active: false},
        {name: "David", active: false}
      ],
      subCategories: [
        {name: "Abby", active: false},
        {name: "Brooke", active: false},
        {name: "Courtenay", active: false},
        {name: "David", active: false}
      ],
      subSubCategories: [
        {name: "Abby", active: false},
        {name: "Brooke", active: false},
        {name: "Courtenay", active: false},
        {name: "David", active: false}
      ],
      lastCategories: [
        {name: "Abby", active: false},
        {name: "Brooke", active: false},
        {name: "Courtenay", active: false},
        {name: "David", active: false}
      ],
      finalItem: [
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
    filterItems() {
      this.filteredItems = this.items.filter(item =>
          item.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    selectItem(item) {
      // Handle item selection here, e.g., emit an event or update a data property.
      console.log('Selected item:', item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    setItem(el, index, type) {
      switch (type) {
        case 'category':
          const updatedCategory = this.categories.map(obj => {
            if (obj.hasOwnProperty('active')) {
              obj['active'] = false;
            }
            return obj;
          });
          this.categories = updatedCategory
          this.selectedCategory = el;
          this.categories[index].active = true
          break;
        case 'subcategory':
          const updatedSubCategory = this.subCategories.map(obj => {
            if (obj.hasOwnProperty('active')) {
              obj['active'] = false;
            }
            return obj;
          });
          this.subCategories = updatedSubCategory
          this.selectedSubCategory = el;
          this.subCategories[index].active = true
          break;
        case 'subsubcategory':
          const updatedSubSubCategory = this.subSubCategories.map(obj => {
            if (obj.hasOwnProperty('active')) {
              obj['active'] = false;
            }
            return obj;
          });
          this.subSubCategories = updatedSubSubCategory
          this.selectedSubSubCategory = el;
          this.subSubCategories[index].active = true
          break;
        case 'lastcategory':
          const updatedLastCategory = this.lastCategories.map(obj => {
            if (obj.hasOwnProperty('active')) {
              obj['active'] = false;
            }
            return obj;
          });
          this.lastCategories = updatedLastCategory
          this.selectedLastCategory = el;
          this.lastCategories[index].active = true
          break;
        case 'finalitem':
          const updatedFinalItem = this.finalItem.map(obj => {
            if (obj.hasOwnProperty('active')) {
              obj['active'] = false;
            }
            return obj;
          });
          this.finalItem = updatedFinalItem
          this.selectedFinalItem = el;
          this.finalItem[index].active = true
          break;
        default:
      }

    },
    addItem(type) {
      switch (type) {
        case 'category':
          const categoryItem = {}
          categoryItem.name = prompt('add item:');
          if (categoryItem.name) this.categories.push(categoryItem);
          break;
        case 'subcategory':
          const subCategoryItem = {}
          subCategoryItem.name = prompt('add item:');
          if (subCategoryItem.name) this.subCategories.push(subCategoryItem);
          break;
        case 'subsubcategory':
          const subsubcategory = {}
          subsubcategory.name = prompt('add item:');
          if (subsubcategory.name) this.subSubCategories.push(subsubcategory);
          break;
        case 'lastcategory':
          const lastcategory = {}
          lastcategory.name = prompt('add item:');
          if (lastcategory.name) this.lastCategories.push(lastcategory);
          break;
        case 'finalitem':
          const finalItem = {}
          finalItem.name = prompt('add item:');
          if (finalItem.name) this.finalItem.push(finalItem);
          break;
        default:
      }
    },
    editItem(index, type) {
      switch (type) {
        case 'category':
          let categoryItem = prompt('Edit item:', this.categories[index].name);
          if (categoryItem !== null) {
            this.categories[index].name = categoryItem;
          }
          break;
        case 'subcategory':
          let subCategoryItem = prompt('Edit item:', this.subCategories[index].name);
          if (subCategoryItem !== null) {
            this.subCategories[index].name = subCategoryItem;
          }
          break;
        case 'subsubcategory':
          let subSubCategoryItem = prompt('Edit item:', this.subSubCategories[index].name);
          if (subSubCategoryItem !== null) {
            this.subSubCategories[index].name = subSubCategoryItem;
          }
          break;
        case 'lastcategory':
          let lastCategoryItem = prompt('Edit item:', this.lastCategories[index].name);
          if (lastCategoryItem !== null) {
            this.lastCategories[index].name = lastCategoryItem;
          }
          break;
        case 'finalitem':
          let finalItem = prompt('Edit item:', this.finalItem[index].name);
          if (finalItem !== null) {
            this.finalItem[index].name = finalItem;
          }
          break;
        default:
      }


    },
    deleteItem(index, type) {
      const confirmDelete = confirm('Are you sure you want to delete this item?');
      if (confirmDelete) {
        switch (type) {
          case 'category':
            this.categories.splice(index, 1);
            break;
          case 'subcategory':
            this.subCategories.splice(index, 1);
            break;
          case 'subsubcategory':
            this.subSubCategories.splice(index, 1);
            break;
          case 'lastcategory':
            this.lastCategories.splice(index, 1);
            break;
          case 'finalitem':
            this.finalItem.splice(index, 1);
            break;
          default:
        }

      }
    },
  },
};
</script>

<style scoped>
@import './CategorList.sass';
</style>
