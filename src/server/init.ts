import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyALl73PWQp_nFFPd0l4qws8yyDWQT4QfEc",
  authDomain: "whoseturn-28c3b.firebaseapp.com",
  databaseURL: "https://whoseturn-28c3b.firebaseio.com",
  projectId: "whoseturn-28c3b",
  storageBucket: "whoseturn-28c3b.appspot.com",
  messagingSenderId: "377584902690",
  appId: "1:377584902690:web:8e46d25b32485a1759e07b",
};

const init = () => {
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

export default init;
