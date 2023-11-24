import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0c41_2bfbzetvrPZ6etmWYuIiUv9Zh_c",
  authDomain: "on-the-move-55b84.firebaseapp.com",
  databaseURL: "https://on-the-move-55b84-default-rtdb.firebaseio.com/",
  projectId: "on-the-move-55b84",
  storageBucket: "on-the-move-55b84.appspot.com",
  messagingSenderId: "530384300317",
  appId: "1:530384300317:web:1104cdc0a6e3a162cf99f4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase();
