import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyCDdUf3Cllwoc8KDMPaMq1Me768BlIwM48",
    authDomain: "invac-5b3e2.firebaseapp.com",
    projectId: "invac-5b3e2",
    storageBucket: "invac-5b3e2.appspot.com",
    messagingSenderId: "132681643170",
    appId: "1:132681643170:web:32c7b42ea32617ab2193fb",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);

  nuxtApp.vueApp.provide("storage", storage);
  nuxtApp.provide("storage", storage);
});
