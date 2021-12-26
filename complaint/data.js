import { doc, collection, query, getDocs, getDoc, setDoc, where } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import { firestore as db } from "../js/firebase.js";

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

const getComplaints = async (authorId) => {
    const collectionRef = collection(db, 'complaints');
    const q = query(collectionRef, where('author', '==', window.localStorage.getItem('uid')));
    const querySnapshot = await getDocs(q);

    const complaints = [];
    querySnapshot.docs.forEach(docSnap => complaints.push({ ...docSnap.data(), author: window.localStorage.name }));

    return complaints;
};

const updateComplaint = async (id, data) => {
    const docRef = doc(db, 'complaints', id);
    await setDoc(docRef, data);
};
const addComplaint = (data) => complaints.push({ id: complaints.size + 1, ...data });
const setComplaintStatus = (id, status) => complaints[id].status = status;

export { getAllComplaints, getComplaints, updateComplaint, addComplaint, setComplaintStatus };


