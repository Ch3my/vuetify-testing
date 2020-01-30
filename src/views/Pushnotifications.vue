<template>
  <div>
    <h1>Push Notification Testing</h1>
    <v-btn color="primary" @click="enableNotifications">Primary</v-btn>

    <push-notification
      ref="pushNotification"
      :currentToken="userToken"
      @update-token="onUpdateToken"
      @new-message="onNewMessage"
    />

    <p>
      curl -i -H 'Content-type: application/json'
      -H 'Authorization: key={{ firebaseServerKey }}'
      -XPOST https://fcm.googleapis.com/fcm/send -d '{
      "registration_ids":["{{ userToken }}"],
      "data": {
      "title":"Title of your notification",
      "body":"content of your notification"
      }
      }'
    </p>

    <p>Windows</p>
    <p>
      curl -i -H "Content-type: application/json"
      -H "Authorization: key={{ firebaseServerKey }}"
      -XPOST https://fcm.googleapis.com/fcm/send -d "{
      \"to\":\"{{ userToken }}\",
      \"data\": {
      \"title\":\"Title of your notification\",
      \"body\":\"content of your notification\"
      }
      }"
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from "../layouts/LayoutDefault.vue";
import PushNotification from "@/components/PushNotification";

export default {
  name: "pushnotifications",
  data() {
    return {
      firebaseServerKey:
        "AAAAnxonmns:APA91bGicNRIF87ZTw8cBZQHJdQ_EuDboB6ZlkW3gB4CFe8EudoqbDeaDk1xla5HVv83EtpmDKVsgh1-20UAkbSHNI_HIO0sg7aqtJJhvI0UEiAV08isWmcSBP0J4CQI_HFhvLsLyAOF",
      userProfile: {},
      askForPermission: false,
      userToken: null
    };
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
    var userLoggedId = 1;
    // check if user has a token
    console.log(userLoggedId);
    // api.user_profile(userLoggedId).then(response => {
    //   this.userProfile = response.data;
    //   this.userToken = this.userProfile.push_notification.ask_for_permission.token;
    //   if (this.userProfile.push_notification.ask_for_permission) {
    //     setTimeout(() => {
    //       // Simulate it wont ask for permission in the first user access
    //       this.askForPermission = true;
    //     }, 4000);
    //   }
    // });
  },
  components: {
    PushNotification
  },
  methods: {
    enableNotifications() {
      this.$refs.pushNotification.askForPermission();
    },
    onUpdateToken(newToken) {
      this.userToken = newToken;
      // send token to the server
      // api.update_token(this.userProfile, this.userToken);
      console.log(this.userProfile);
      console.log(this.userToken);
    },
    onNewMessage(message) {
      console.log("new Message")
      console.log(message);
      // var snackbarContainer = document.querySelector("#snackbar-message");
      // var data = {
      //   message: message.notification.title + ": " + message.notification.body,
      //   timeout: 10000,
      //   actionText: "OK"
      // };
      // snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
  }
};
</script>