import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyC-zo3yd0OzHqIhJeZs8KguG4hJI7-0_AM",
  authDomain: "expense-tracker-react-233c3.firebaseapp.com",
  databaseURL: "https://expense-tracker-react-233c3-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-react-233c3",
  storageBucket: "expense-tracker-react-233c3.appspot.com",
  messagingSenderId: "284398847875",
  appId: "1:284398847875:web:19bfa566294d78b2e898b6"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)