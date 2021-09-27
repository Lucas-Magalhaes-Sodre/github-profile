import { useRouter } from 'next/router'
import { useSession,  signIn, signOut} from 'next-auth/client'



import styles from './stylesIndex.module.scss';
import { useEffect} from 'react';

export default function Home() {
  const router = useRouter();
  const [session] = useSession();


 /*function login(){
  Cookie.set('token', 'custon-token-here',)
  signIn('github')
}*/
 
  if(session){
    router.push('home')}
  
  
  
 

 /*function logoff(){
   Cookie.remove('token')
}*/




  return (
    <div id={styles.login}>
      <h1>Github Profile</h1>
      <p>Faça login com seu GITHUB para prosseguir:</p>
      <button 
      type="button" 
      onClick={() => signIn('github')}
      id={styles.login_button}
      >
        login
      </button>

      <button 
      type="button" 
      onClick={() => signOut()}
      id={styles.logoff_button}
      >
        logoff
      </button>
    </div>
    
  );

}






