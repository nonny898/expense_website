import firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';
import FirebaseContext from './context';

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
  }

  doSignInWIthEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();
}
export default Firebase;

export { FirebaseContext };
