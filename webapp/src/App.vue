<template>
<!--  <div id="app">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
  <div>
    <h1 class="text-center">Conversor de Moedas <span class="fa fa-money"></span> </h1>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h6>Real</h6>
            <input class="form-control" v-model="valor">
          </div>

          <div class="col-md">
            <h6>Dólar</h6>
            <input class="form-control" v-model="convertido">
          </div>
        </div>
        <button class="btn-primary" v-on:click="converter(valor)">Converter</button>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import currency from "./service/currency";
export default {
  name: 'App',
  data(){
    return {
      valor: 0,
      convertido: 0
    };
  },
  methods: {
    converter(valor) {
      currency.obterValorConversao().then((response) => {
        var ratio = response.data["USD_BRL"];
        console.log(ratio);
        this.convertido = valor * Number.parseFloat(ratio) ;
      });

      // console.log(objeto.valueOf("USD_BRL"));
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
