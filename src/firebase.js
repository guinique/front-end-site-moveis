import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDeOJ6djSF1MjghUXZ0vHKn0-RXNy8jf30",
    authDomain: "sitemoveis-fff9d.firebaseapp.com",
    projectId: "sitemoveis-fff9d",
    storageBucket: "sitemoveis-fff9d.appspot.com",
    messagingSenderId: "710590500020",
    appId: "1:710590500020:web:8d6748241ae09743759be1",
    measurementId: "G-PW40M5MZ9R"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}