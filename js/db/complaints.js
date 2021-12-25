import { addDoc, collection, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import { firestore as db } from "../firebase.js";

const registerComplaint = async ({ subject, description }) => {
    const collectionRef = collection(db, 'complaints');

    try {
        await addDoc(collectionRef, {
            subject,
            description,
            author: doc(db, 'users', 'j2MCGkp816KHWqHgOrWR')
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

export { registerComplaint }