import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBW7AihJCZtOkbLhoUD4H5ySuTnCgVGXmQ",
  authDomain: "story-app-3d4fc.firebaseapp.com",
  projectId: "story-app-3d4fc",
  storageBucket: "story-app-3d4fc.appspot.com",
  messagingSenderId: "502016586414",
  appId: "1:502016586414:web:daac6430c224c21bc7333f"
};


const app = initializeApp(firebaseConfig);
export default firebase.firestore();