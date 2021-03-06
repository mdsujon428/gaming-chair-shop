import initializeAuthentication from "../components/Pages/Loging/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isAdmin,setIsAdmin] = useState(false)
    // console.log(user.displayName)
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    // const [error,setError] = useState(false)
    // const [success,setSuccess] = useState(false)
    const auth = getAuth()

    const registration = (email,name, password,history,location) => {
        createUserWithEmailAndPassword(auth,email, password)
            .then(userCredential => {
                const newUser ={email:email,displayName:name} 
                setUser(newUser);
                setSuccess('Register Successfully')
                //Store data to database.
                saveData(email,name,'POST')
                setError('')
                 //send name to firebase after creation.
                 updateProfile(auth.currentUser,{
                    displayName:name
                 })
                 .then(()=>{

                 })
                 .catch(error=>{
                     setError(error.message)
                     console.log(error)
                 })
                 setError('');
                history.push(location.stage?.from || '/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // ..
            });
    }
    
    //Observer user state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return ()=>unsubscribe;
    },[])

    const SignIn=(email,password,history,location)=>{
        signInWithEmailAndPassword(auth,email,password,history,location)
        .then(userCredential=>{
            const user = userCredential.user;
            setUser(user)
            setSuccess("SigIn Successfully")
            history.push( location.state?.from || '/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage, " ",errorCode)
          });
    }

    const Logout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
            
        })
        .catch(()=>{
            // console.log()
        })
    }
    //Observer user is admin or not
    useEffect(()=>{
        fetch(`https://sheltered-shore-72007.herokuapp.com/users/${user?.email}`)
        .then(res=> res.json())
        .then(data => setIsAdmin(data.admin))
        .catch(()=>{
            setError('Something went wrong user is not admin.')
        })
    },[user?.email])
    //Function to POST/UPDATE user data to Database of user collection.
    const saveData=(email,name,method)=>{
          const newUser={email:email,displayName:name}
          fetch(`https://sheltered-shore-72007.herokuapp.com/users`,{
              method:method,
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(newUser)
          })
    }
    return {
        user,
        registration,
        SignIn,
        Logout,
        error,
        success,
        isAdmin
    }

}

export default useFirebase