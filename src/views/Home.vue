<template>
  <q-page class="flex flex-center">


    <div class="column" style="height: 250px">
      <div class="col-8">
        <h1>home</h1>
      </div>
      <div class="col">
        <div class="row">
        <q-input outlined v-model="text" label="Outlined" size="100" class="mdi-rewind-15"/>
          <q-space />
          <q-btn color="blue"  icon-right="send" label="Send" @click="send"/>
        </div>
        <div class="row">

      </div>
      </div>
    </div>





<!--    <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px">-->

  </q-page>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api/api.js'

export default {
  name: 'Home',
  // Модель данных страницы
  data: () => {
    return {
      text: '',

    }
  },
  // components: {
  //   HelloWorld
  // }
  methods: {
    // // Реакция на кнопку отправки
    // async onSendClick() {
    //   try {
    //     await API.sendMessage(this.username, this.message)
    //     console.log('cleared')
    //     this.message = ''
    //   } catch (e) {
    //     console.error(e)
    //   }
    async send() {
      var mas = await api.sendMessage(this.text)
      console.log(mas[0])
      // console.log("dssdds")
      alert(mas)
    }
  },
}
</script>
