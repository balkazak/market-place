<template>
  <div class="page-content">
    <div class="breadcrumb">Торговая площадка
      /
      Мой магазин
      /
      Заказы</div>
      <h3 class="title mb-4">Сообщения от покупателей</h3>
    <main class="content">
      <div class=" p-0">
        <div class="card">
          <div class="row  g-0">
            <div class="col-12 col-lg-5 border-right">
              <div class="p-lg-3 p-2=0=== d-none d-md-block">
                <div class="d-flex align-items-center">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button id="button-addon2" type="submit" class="btn btn-link text-warning">
                        <IconSearch />
                      </button>
                    </div>
                    <input type="search" placeholder="Поиск сообщений по имени" aria-describedby="button-addon2" class="form-control  ">
                  </div>
                </div>
              </div>

             <div class="list">
               <a href="#" class="list-group-item  list-group-item-action border-0" v-for="user in users">
                 <div class="user">


                   <img src="@/assets/images/chat-ava.png" class="rounded-circle mr-1" alt="Vanessa Tucker">
                   <div class="user-title flex-grow-1 ms-3">
                     Vanessa Tucker
                     <div class="badge float-right">55</div>
                     <span class="time">21:00</span>
                     <p class="user-text">Мнение малообразованной, но крайне самоуверенной истерички для меня особенно важно.🤣</p>
                   </div>
                 </div>
               </a>
             </div>
              <hr class="d-block d-lg-none mt-1 mb-0">
            </div>
            <div class="col-12 col-lg-7 border-left">
              <div class="py-2 px-4 border-bottom d-none d-lg-block">
                <div class="d-flex align-items-center py-1">
                  <div class="position-relative">
                    <img src="@/assets/images/chat-ava.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40">
                  </div>
                  <div class="flex-grow-1 ps-3">
                    <strong>Sharon Lessman</strong>
                    <div class="text-muted small"><em>Последнее сообщение: Сегодня, 21:00</em></div>
                  </div>
                  <div>
                    <IconSearch />
                    <IconThreeDots class="ms-4" />
                  </div>
                </div>
              </div>

              <div class="position-relative">
                <div class="chat-messages p-4">
                  <div class="chat-message-left pb-4" v-for="item in 4">
                    <div>
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40">
                    </div>
                    <div class="flex-shrink-1 message-left py-2 px-3 ms-3">
                      <div class="message-time">20:21</div>
                      Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                    </div>
                  </div>
                  <div class="chat-message-right mb-4" v-for="item in 10">
                    <div>
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40">
                    </div>
                    <div class="flex-shrink-1 message-right py-2 px-3 me-3">
                      <div class="message-time">20:21</div>
                      Cum ea graeci tractatos.
                    </div>
                  </div>
                </div>
              </div>

                <form class="d-flex align-items-center chat-bottom" action="#" method="post" enctype="multipart/form-data">
                  <!-- Custom File Input with Icon -->
                  <label class="file-label" for="fileInput">
                    <span class="file-icon"><icon-upload /></span>
                  </label>
                  <input type="file" id="fileInput" name="fileInput" class="file-input">

                  <!-- Textarea Input with Emoji Support -->
                  <input id="messageInput" name="messageInput" type="text" placeholder="Type your message here...">

                  <!-- Emoji Picker (if you have one) -->
                  <!-- Add your emoji picker component here -->

                  <!-- Send Button -->
                  <button type="submit" class="send">
                    <icon-send />
                  </button>
                </form>

            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch.vue";
import img from "@/assets/images/chat-ava.png"
import IconThreeDots from "@/components/icons/IconThreeDots.vue";
import IconUpload from "@/components/icons/IconUpload.vue";
import IconSend from "@/components/icons/IconSend.vue";
export default {
  components: {
    IconSend,
    IconUpload,
    IconThreeDots,
    IconSearch

  },
  data() {
    return {
      users: [
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        },
        {
          name: 'Alexey Prohorov',
          url: img
        }
      ]
    };
  },
  methods: {

  },
};
</script>
<style scoped>
@import './Chat.sass';
</style>
