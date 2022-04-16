import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAh1t2H_gX3j9IdiM8IZGizmSC1QV2U-wQ",
	authDomain: "clone-web3-3063b.firebaseapp.com",
	projectId: "clone-web3-3063b",
	storageBucket: "clone-web3-3063b.appspot.com",
	messagingSenderId: "200256124443",
	appId: "1:200256124443:web:503a88bcca98d25b27eabe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
