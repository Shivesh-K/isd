import { auth } from '../firebase.js';

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const login = async ({ email, password }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        const { uid, name } = auth.currentUser;
        return { uid, name };
    } catch (error) {
        return { error: "Could not login!" };
    }
}

const ensureLoggedIn = () => {
    if (!window.localStorage.uid) {
        window.location.replace("/auth/login");
        return;
    }
}

export { login, ensureLoggedIn };
