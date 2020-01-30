import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAthVySejSSf3V27vGFKatek2-_Xbl3RhU",
    authDomain: "vue-testing-bf120.firebaseapp.com",
    databaseURL: "https://vue-testing-bf120.firebaseio.com",
    projectId: "vue-testing-bf120",
    storageBucket: "vue-testing-bf120.appspot.com",
    messagingSenderId: "683338603131",
    appId: "1:683338603131:web:94a22600bcd1fb12cae0de",
    measurementId: "G-PJR2D71WE7"
}

firebase.initializeApp(config)

export default {
  messaging: firebase.messaging()
}