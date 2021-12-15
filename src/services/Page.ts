import { Page } from "@/models/Page";
import { getFirestore, collection, getDoc, addDoc, doc } from "@firebase/firestore";
import { updateDoc } from "firebase/firestore";

export const getPageInfo = async (id: string): Promise<Page> => {
    const db = getFirestore();
    const docRef = doc(db, "pages", id);
    const snapshot = await getDoc(docRef);
    const pageInfoData = snapshot.data() as Page;

    return pageInfoData;
}

export const createPage = async (page: Page): Promise<void> => {
    const db = getFirestore();
    const docCollection = collection(db, "pages");
    const newDoc = doc(db, "pages", page.name);
    await addDoc(docCollection, newDoc);
}

export const updatePage = async (page: Page): Promise<void> => {
    const db = getFirestore();
    const docRef = doc(db, "pages", page.name);
    await updateDoc(docRef, {...page});
}