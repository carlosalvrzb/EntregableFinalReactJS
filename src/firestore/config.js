import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDoI2FgcQh6Jyj5z15m737tRrW_hQw9ap4",
//   authDomain: "coder-app-11621.firebaseapp.com",
//   projectId: "coder-app-11621",
//   storageBucket: "coder-app-11621.appspot.com",
//   messagingSenderId: "94029995141",
//   appId: "1:94029995141:web:b4a8345e6eda71daa65dec"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBaO07n6IFvc4SsHLTisq-zdDHoKRSc1nA",
  authDomain: "proyecto-react-carlos.firebaseapp.com",
  projectId: "proyecto-react-carlos",
  storageBucket: "proyecto-react-carlos.appspot.com",
  messagingSenderId: "437119641854",
  appId: "1:437119641854:web:9f39d0c7b68a35ea281daf"
};


const app = initializeApp(firebaseConfig);

export const initFirestoreApp  = () => {
  return app
}