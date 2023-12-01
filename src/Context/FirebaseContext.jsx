import { useContext, createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { FireBaseConfig } from "../utils/firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const FirebaseContext = createContext(null)

const _firebaseAuth = getAuth(FireBaseConfig);
const storage = getStorage(FireBaseConfig);
export const useFirebase = () => useContext(FirebaseContext)

export const FireBase_Provider = ({children})=>{
    const [user, setUser] = useState(null);
    useEffect(() => {
      onAuthStateChanged(_firebaseAuth, (user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    }, []);
    const isLoggedIn = user ? true : false;

    const _handleRegister = (email, password)=> createUserWithEmailAndPassword(_firebaseAuth, email, password)
    const _handleLogin = (email, password)=> signInWithEmailAndPassword(_firebaseAuth, email, password)
    const _updateProfile = (user, updates) => updateProfile(user, updates)
    const _logout_user = () => signOut(_firebaseAuth)
    // const imageRef = ref(storage, `uploads/images/https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg`);
    return(
        <>
            <FirebaseContext.Provider  value={{_handleRegister,_handleLogin,isLoggedIn,_updateProfile,_logout_user}}>
                {children}
            </FirebaseContext.Provider>
        </>
    )
}