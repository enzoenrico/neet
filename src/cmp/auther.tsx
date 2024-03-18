
import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider
} from 'firebase/auth';

export const handleLoginWithGoogle = () => {
    const googleAuth = new GoogleAuthProvider();
    const auth = getAuth();

    return signInWithPopup(auth, googleAuth)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log(user, token);
            return token;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error(errorCode, errorMessage, email, credential);
        });

};

export const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            console.log('Logged out');
        }).catch((error) => {
            console.error(error);
        });
};