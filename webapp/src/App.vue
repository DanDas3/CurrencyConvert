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
            <select class="form-select" v-model="fromCurrency">
              <option v-for="fCurrency in fromCurrencies" v-bind:key="fCurrency.value" v-bind:value="fCurrency.value"> {{fCurrency.name}} </option>
            </select>
            <input class="form-control" v-model="valor" type="number">
          </div>

          <div class="col-md">
            <select class="form-select" v-model="toCurrency">
              <option v-for="tCurrency in toCurrencies" v-bind:key="tCurrency.value" v-bind:value="tCurrency.value"> {{tCurrency.name}} </option>
            </select>
            <input class="form-control" v-model="convertido" type="number" readonly>
          </div>
        </div>
        <button class="btn-primary" v-on:click="converter(valor,fromCurrency,toCurrency)">Converter</button>
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
      convertido: 0,
      fromCurrency:"",
      toCurrency:"",
      fromCurrencies: [{name:"Dólar", value:"USD"},{name:"Real", value:"BRL"}, {name:"Euro", value:"EUR"}],
      toCurrencies: [{name:"Dólar", value:"USD"},{name:"Real", value:"BRL"}, {name:"Euro", value:"EUR"}]
    };
  },
  methods: {
    converter(value, fromCurrency, toCurrency) {
      var query = `${fromCurrency}_${toCurrency}`;
      currency.obterValorConversao(query).then((response) => {
        var ratio = response.data[query];
        this.convertido = value * Number.parseFloat(ratio) ;
      });
    }
  }
}
</script>
