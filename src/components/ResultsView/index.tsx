import React, { useEffect, useState } from "react";
import { Repos } from "../Repos";
import { Starred } from "../Starred";


import styles from './styles.module.scss'

interface UserProps {
   avatar_url?: string;
   name?: string;
}

export function ResultsView({ name, avatar_url }: UserProps) {

  
   const [username, setUserName] = useState('');

  /* const [ session, loading] = useSession();

   const router = useRouter()

   useEffect(() => {
      const token = Cookie.get('token')

      if (!token) {
          router.replace('/')
      }
  },[])*/

   useEffect(() => {
      if (localStorage)
         setUserName(localStorage.getItem('username'))
   }, []);

      

   return (
      
      <div id={styles.result}>
         
            <img id={styles.foto__perfil} src={avatar_url} alt={name} />           
         
            <h1>{name}</h1>
         
         <div id={styles.repos}>
            <Repos />
         </div>
         <div id={styles.starred}>
             <Starred />
         </div>
     </div>
   )
}