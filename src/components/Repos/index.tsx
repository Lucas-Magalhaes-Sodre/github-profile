//import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { api } from "../../services/client";

import styles from './styles.module.scss'

 interface getUserDataProps {
    profile: string | null;
 }
 
 interface RepositoryData {
    name: string;
 }
 
 export function Repos() {
 
    const [repos, setRepos] = useState<RepositoryData[]>()
 
    const [username, setUserName] = useState('');
 
    
 
    useEffect(() => {
       if (localStorage)
          setUserName(localStorage.getItem('username'))
    }, [])
 
    async function getRepos({ profile }: getUserDataProps) {

        if (!!profile) {
           try {
              const responseRepos = await api.get(`/${JSON.parse(profile)}/repos`);
  
              setRepos(responseRepos.data)
  
  
           } catch (err) {
              console.log(err)
           }
        }
    }
        return(
       <div>
            <div>
                <button  
                id={styles.button_repos}
                onClick={() => getRepos({ profile: username })}
                >

                    <h2>Repos</h2>

                </button>
            </div>
            

           
            {repos && (
                 <div id={styles.repos}>

                    <h1>Repos</h1>

                    {repos.map(repository => (
                    <li>{repository.name}</li>
                     ) )}
                    
            </div>
            )}
            
      </div>
        );
  
  }