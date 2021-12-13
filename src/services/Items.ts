import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore"; 
import { Item } from "../models/Item";

const db = getFirestore();

export const getAllItems = async (): Promise<Item[]> => {
    const docCollection = collection(db, "items");
    const snapshot = await getDocs(docCollection);
    const docs: Item[] = snapshot.docs.map(doc => doc.data() as Item);
    return docs;
}

export const addNewItem = async (item: Item) => {
    const docCollection = collection(db, "items");
    addDoc(docCollection, item);
}