<template>
  <div>
    <h1>This is Geolocation</h1>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        {{ 'lat: ' + latitud}}
        <br />
        {{ 'lng: ' + longitud}}
      </v-card-text>
    </v-card>
    <div class="my-2">
      <v-btn color="primary" @click="clearCoordinates">Stop Geolocation</v-btn>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import LayoutDefault from "../layouts/LayoutDefault.vue";

export default {
  name: "geolocation",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  beforeMount() {},
  mounted() {
    this.watchPosition();
  },
  beforeDestroy() {},
  data() {
    return {
      watchPositionId: "",
      latitudeHistory: [],
      longitudeHistory: [],
      latitud: 0,
      longitud: 0
    };
  },
  components: {},
  methods: {
    watchPosition: async function() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      if (navigator.geolocation) {
        // Await es necesario en watchPosition
        this.watchPositionId = await navigator.geolocation.watchPosition(
          this.watchPositionSuccess,
          this.watchPositionError,
          options
        );
      } else {
        console.log("Geolocation is not supported by this browser");
      }
    },
    watchPositionSuccess: async function(position) {
      this.latitudeHistory.push(parseFloat(position.coords.latitude));
      this.longitudeHistory.push(parseFloat(position.coords.longitude));
      // Calcula el promedio de la ubicacion par que el mapa de google se actualice
      this.calcularPromedioUbicacion();
    },
    watchPositionError: function(err) {
      console.log(err);
      console.log("Ha ocurrido un error al ejecutar watch Position");
    },
    calcularPromedioUbicacion: function() {
      var averageLatitude, averageLongitude;
      var tempLat = 0,
        tempLon = 0;
      for (let i = 0; i < this.latitudeHistory.length; i++) {
        tempLat += this.latitudeHistory[i];
        tempLon += this.longitudeHistory[i];
      }
      averageLatitude = tempLat / this.latitudeHistory.length;
      averageLongitude = tempLon / this.latitudeHistory.length;

      this.latitud = averageLatitude;
      this.longitud = averageLongitude;
    },
    clearCoordinates: function() {
      console.log("Deteniendo watchpostiino");
      console.log(this.watchPositionId);
      navigator.geolocation.clearWatch(this.watchPositionId);
      // this.watchPosition();
    }
  }
};
</script>
