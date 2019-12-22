<template>
  <div>
    <h1>I'm Form and API</h1>
    <v-form ref="form" @submit.prevent="handleParsingForm">
      <v-text-field v-model="formData.name" :counter="10" label="Name" required></v-text-field>
      <v-btn class="mr-4" @click="handleParsingForm">submit</v-btn>
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </v-form>
    <br>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <h3>Informacion de: {{result.nombre}}</h3>
        <span>Codigo: {{ result.codigo }}</span>
        <br />
        <span>Valor: {{ result.valor | numeralFormat }} &nbsp; {{ result.unidad_medida || '' }}</span>
        <br />
        <span>MomentJS Testing: {{ moment().format('YYYY-MM-DD') }}</span>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
// @ is an alias to /src
import LayoutDefault from "../layouts/LayoutDefault.vue";
import axios from "axios";

export default {
  name: "form-testing",
  data() {
    return {
      formData: {},
      result: {}
    };
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  components: {},
  methods: {
    handleParsingForm: async function() {
      var argins = this.formData;
      console.log(argins.name);
      try {
        const response = await axios.get("https://mindicador.cl/api");
        console.log(response);
        this.result = this.$_.find(response.data, o => {
          return o.codigo == argins.name;
        });
        console.log(this.result);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
