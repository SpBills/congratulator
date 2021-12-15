import { getFirestore, doc, updateDoc, arrayUnion, addDoc, collection, getDocs } from "firebase/firestore"; 
import { Item } from "../models/Item";


export const addNewItem = async (pageId: string, item: Item): Promise<void> => {
    const db = getFirestore();

    const collRef = collection(db, "pages", pageId, "items");
    addDoc(collRef, item);
}

export const updateItem = async (pageId: string, item: Item): Promise<void> => {
    const db = getFirestore();

    // TODO: Make this actually update the item.
    const docRef = doc(db, "pages", pageId, "items", item.id as string);
    updateDoc(docRef, {...item});
}

export const getItemsOnPage = async (pageId: string): Promise<Item[]> => {
    const db = getFirestore();

    const collRef = collection(db, "pages", pageId, "items");
    const snapshot = await getDocs(collRef);
    const items = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        } as Item;   
    });
    return items;
}