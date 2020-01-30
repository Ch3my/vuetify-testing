importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js')
// importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-analytics.js')
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAthVySejSSf3V27vGFKatek2-_Xbl3RhU",
    authDomain: "vue-testing-bf120.firebaseapp.com",
    databaseURL: "https://vue-testing-bf120.firebaseio.com",
    projectId: "vue-testing-bf120",
    storageBucket: "vue-testing-bf120.appspot.com",
    messagingSenderId: "683338603131",
    appId: "1:683338603131:web:94a22600bcd1fb12cae0de",
    measurementId: "G-PJR2D71WE7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const messaging = firebase.messaging()

// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log("handler from SW")
//     console.log(self)
//     const title = 'Hello World'
//     const options = {
//         body : payload.data.body
//     }
//     return self.registration.showNotification(title, options)
// })

