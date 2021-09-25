import { useRouter } from 'next/router'
import { useSession,  signIn, signOut} from 'next-auth/client'
import Cookie from 'js-cookie'


import styles from './stylesIndex.module.scss';
import { useEffect} from 'react';

export default function Home() {
  const router = useRouter()


 function login(){
  Cookie.set('token', 'custon-token-here',)
  signIn('github')
}
  
  
 

 function logoff(){
   Cookie.remove('token')
}




  return  (
    <div id={styles.login}>
      <h1>Github Profile</h1>
      <p>Faça login com seu GITHUB para prosseguir:</p>
      <button 
      type="button" 
      onClick={login}
      id={styles.login_button}
      >
        login
      </button>

      <button 
      type="button" 
      onClick={logoff}
      id={styles.logoff_button}
      >
        logoff
      </button>
    </div>
    
  );
}






