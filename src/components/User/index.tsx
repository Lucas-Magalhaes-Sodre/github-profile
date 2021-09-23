import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { api } from "../../services/client";
import styles from './styles.module.scss'

interface UserProps {
   avatar_url?: string;
   name?: string;
}

interface getUserDataProps {
   profile: string | null;
}

interface RepositoryData {
   name: string;
}

export function User({ name, avatar_url }: UserProps) {

   const [repos, setRepos] = useState<RepositoryData[]>()

   const [starred, setStarred] = useState<RepositoryData[]>()

   const [username, setUserName] = useState('');

   const [ session, loading] = useSession();

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

      return

   }

   async function getStarred({ profile }: getUserDataProps) {

      if (!!profile) {
         try {

            const responseStarred = await api.get(`/${JSON.parse(profile)}/starred`);

            setStarred(responseStarred.data)


         } catch (err) {
            console.log(err)
         }
      }

      return

   }

   return (
      <div>
         {session.user.name}
      </div>
      <div id={styles.result}>

         <img id={styles.foto__perfil} src={avatar_url} alt={name} />
         <h3>{name}</h3>
         <div>
            <button onClick={() => getRepos({ profile: username })}>
               <h4>Repos</h4>
            </button>

            <button onClick={() => getStarred({ profile: username })}>
               <h4>Starred</h4>
            </button>
         </div>

         <div id={styles.response}>
            {repos && (
               <div id={styles.div_repos}>

                  <h1>Repos</h1>

                  {repos.map(repository => (
                     <li id={styles.repos}>{repository.name}</li>
                  ))}
               </div>
            )}

            {starred && (
               <div id={styles.div_starred}>

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