import { addDoc, collection, doc } from "firebase/firestore";

import { firestore as db } from "../firebase";

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