import { createContext } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,

} from 'firebase/auth'
import { auth } from './firebase';
import { useContext } from 'react';


const Context = createContext()

export const ContainerProvider = ({ children }) => {

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutProfile = () => {
        return signOut(auth)
    }

    const signWithGoogle = () => {
        const google = new GoogleAuthProvider()
        return signInWithPopup(auth, google)
    }

    return <Context.Provider value={{ signUp, signIn, signOutProfile, signWithGoogle }}>{children}</Context.Provider>

}

export const useData = () => {
    return useContext(Context)
}