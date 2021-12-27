import { doc, collection, query, getDocs, getDoc, setDoc, where } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import { firestore as db } from "../firebase.js";

const registerComplaint = async ({ subject, description }) => {
    const collectionRef = collection(db, 'complaints');

    try {

        const docRef = doc(collectionRef);
        await setDoc(docRef, {
            subject,
            description,
            author: window.sessionStorage.getItem('uid'),
            status: 'Pending',
            id: docRef.id
        });

        return {
            status: 'Success',
            message: 'Your complaint was successfully registered'
        }
    } catch (error) {
        return {
            status: 'Failure',
            message: 'There was an error in registering your complaint'
        }
    }
}


const getAllComplaints = async () => {
    const collectionRef = collection(db, 'complaints');
    const querySnapshot = await getDocs(collectionRef);

    const complaints = [];
    querySnapshot.docs.forEach(docSnap => complaints.push(docSnap.data()));

    for (let complaint of complaints) {
        try {
            const docSnap = await getDoc(doc(db, 'users', complaint['author']));
            console.log(docSnap.data());
            complaint['author'] = docSnap.data()['name'];
        } catch (error) {
            console.log(complaint);
        }
    }

    return complaints;
};

const getComplaints = async () => {
    const collectionRef = collection(db, 'complaints');
    const q = query(collectionRef, where('author', '==', window.sessionStorage.getItem('uid')));
    const querySnapshot = await getDocs(q);

    const complaints = [];
    querySnapshot.docs.forEach(docSnap => complaints.push({ ...docSnap.data(), author: window.sessionStorage.name }));

    return complaints;
};

const updateComplaint = async (id, data) => {
    const docRef = doc(db, 'complaints', id);
    await setDoc(docRef, data);
};

export { registerComplaint, getAllComplaints, getComplaints, updateComplaint };