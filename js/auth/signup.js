import { firestore as db, auth } from '../firebase.js';

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const signup = async ({ email, password, ...rest }) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const { uid } = auth.currentUser;
        const colRef = doc(db, 'users', uid)

        const data = { email, ...rest };
        await setDoc(colRef, data);

        return { uid, ...data };
    } catch (error) {
        return { error };
    }
}


export { signup };
