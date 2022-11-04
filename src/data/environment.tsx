import { initializeApp } from 'firebase/app';
import {
  query, getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, orderBy
} from 'firebase/firestore';
import {
  getStorage, ref, getDownloadURL
} from 'firebase/storage';


const fbApp = initializeApp({
  apiKey: "AIzaSyCcXtSx61469Ard8iUofFAXqWzVBeTYehM",
  authDomain: "portifolio-gabriel-cerqueira.firebaseapp.com",
  projectId: "portifolio-gabriel-cerqueira",
  storageBucket: "portifolio-gabriel-cerqueira.appspot.com",
  messagingSenderId: "1046397385524",
  appId: "1:1046397385524:web:042bc53414846d1318c361",
  measurementId: "G-SFFW9RB3PS"
});


const db = getFirestore(fbApp);

export async function Read(module: string, props?: {order?: any}) {
  let col
  if(props?.order) {
    col = query(collection(db, module), orderBy(props.order));
  } else {
    col = collection(db, module);
  }
  
  const snapshot = await getDocs(col);
  const list = snapshot.docs.map(doc => doc.data());
  return list;
}

export async function Save(module: string, item: any) {
  if (item.id) {
    let docRef = await setDoc(doc(db, module, item.id), item);
    return docRef
  } else {
    let docRef: any = await addDoc(collection(db, module), item);
    item.id = docRef.id
    docRef = await setDoc(doc(db, module, docRef.id), item);
    return docRef
  }
}

export async function Remove(module: string, item: any) {
  let docRef = await deleteDoc(doc(db, module, item.id));
  return docRef
}

/* Get images */
export function GetFile(way: string) {
  return getDownloadURL(ref(getStorage(), way))
}

/* Send Email */
export function SetEmail(info: any) {
  const reqOpt = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      info: info
    })
  }
  return fetch('/api', reqOpt)
  /* return fetch('https://us-central1-portfolio-gc.cloudfunctions.net/app', reqOpt) */
}
