import { auth, firestore as db } from '../firebase.js';

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const login = async ({ email, password }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        const { uid } = auth.currentUser;

        const userDocRef = doc(db, 'users', uid);
        const userDocSnap = await getDoc(userDocRef);
        return { uid: userDocSnap.id, ...userDocSnap.data() };
    } catch (error) {
        console.log(error);
        return { error: "Could not login!" };
    }
}

const ensureLoggedIn = () => {
    if (!window.sessionStorage.getItem('uid')) {
        location.replace("/auth/login");
        return;
    }
}

export { login, ensureLoggedIn };
