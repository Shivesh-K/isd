import { firestore as db } from '../../js/firebase.js';
import { collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const getAllWorkers = async () => {
    try {
        const workersRef = collection(db, 'workers');
        const workersSnap = await getDocs(workersRef);

        const response = [];
        workersSnap.docs.forEach(docSnap => response.push({ id: docSnap.id, ...docSnap.data() }));

        return response;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const addWorker = async (workerData) => {
    try {
        const collectionRef = collection(db, 'workers');
        await addDoc(collectionRef, workerData);
    } catch (error) {
        return { error: "The worker could not be added" };
    }
}

const removeWorker = async (workerId) => {
    try {
        const docRef = doc(db, 'workers', workerId);
        await deleteDoc(docRef);
        return { status: "Success", message: "Worker removed successfully" };
    } catch (error) {
        console.log(error);
        return { status: "Error", message: "There was an error in removing the worker" };
    }
}

export { getAllWorkers, removeWorker, addWorker };