<template>
  <div>
    <h1>I am the Camera</h1>
    <input type="file" name="pic" accept="image/*" />
    <div class="my-2">
      Take Picture
      <v-btn color="error" fab large dark @click="takePicture">
        <v-icon>mdi-camera</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import LayoutDefault from "../layouts/LayoutDefault.vue";

export default {
  name: "camera",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  components: {},
  methods: {
    takePicture: function() {
      // navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 50,

      });
    },
    onSuccess: function(imageURI) {
      var image = document.getElementById("myImage");
      image.src = imageURI;
    },
    onFail: function(message) {
      alert("Failed because: " + message);
    }
  }
};

// Handle Camera for Cordova
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log(navigator.camera);
}
</script>
