import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
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

   const [ session, loading] = useSession();

   const router = useRouter()


   useEffect(() => {
      if (localStorage)
         setUserName(localStorage.getItem('username'))
   }, []);

      

   return (
      
      <div id={styles.result}>

         <img id={styles.foto__perfil} src={avatar_url} alt={name} />
         <h3>{name}</h3>
         <div className={styles.Buttons}>
         <Repos />
         </div>
         <div className={styles.Buttons}>
         <Starred />
         </div>
     </div>
   );
}
   