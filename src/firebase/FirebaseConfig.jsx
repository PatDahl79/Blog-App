import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYzrb91znr5wEe-E8_C31NzZRALunVbp0",
  authDomain: "blog-app-d953d.firebaseapp.com",
  projectId: "blog-app-d953d",
  storageBucket: "blog-app-d953d.appspot.com",
  messagingSenderId: "931961983980",
  appId: "1:931961983980:web:f2d8096e627619934c26c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}

function MyComponent() {
  const history = useHistory();
  
  // Use history.push() to navigate
  const handleButtonClick = () => {
    history.push("/some-route");
  };

  return (
    <button onClick={handleButtonClick}>Route</button>
  );
}
