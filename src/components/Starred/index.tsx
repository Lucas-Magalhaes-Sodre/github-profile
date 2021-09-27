import { useEffect, useState } from "react";
import { api } from "../../services/client";

import styles from './styles.module.scss'

interface getUserDataProps {
   profile: string | null;
}

interface RepositoryData {
   name: string;
}

export function Starred() {


   const [starred, setStarred] = useState<RepositoryData[]>()

   const [username, setUserName] = useState('');


   useEffect(() => {
      if (localStorage)
         setUserName(localStorage.getItem('username'))
   }, [])

   

   async function getStarred({ profile }: getUserDataProps) {

      if (!!profile) {
         try {

            const responseStarred = await api.get(`/${JSON.parse(profile)}/starred`);

            setStarred(responseStarred.data)


         } catch (err) {
            console.log(err)
         }
      }
   }
    
      return(
      <div>
        <div>
        <button  
         id={styles.button_starred}
         onClick={() => getStarred({ profile: username})}
         >
           <h2>Starred</h2>
        </button>
        </div>

    
        <div>
        {starred && (
           <div id={styles.starred}>

              <h1>Starred</h1>

              {starred.map(repository => (
                 <li id={styles.repos}>{repository.name}</li>
              ))}
        </div>
            )}
           </div> 
      </div>
        );
   
  }
   