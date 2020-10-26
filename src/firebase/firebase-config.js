import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyApAB2MYMbUU2gPf9p5f3Y5KFX2_FVkDkY",
	authDomain: "react-course-7dd5c.firebaseapp.com",
	databaseURL: "https://react-course-7dd5c.firebaseio.com",
	projectId: "react-course-7dd5c",
	storageBucket: "react-course-7dd5c.appspot.com",
	messagingSenderId: "205039558469",
	appId: "1:205039558469:web:1a22d612e7c36b14f4682c",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
