import { useRouter } from 'next/router'
import { useSession,  signIn} from 'next-auth/client'

import styles from './stylesIndex.module.scss';
import { useEffect} from 'react';

export default function Home() {
  const [ session, loading] = useSession()

  const router = useRouter()

  useEffect(() => {

    (session)?
    router.push('home')
    : signIn('github')

  }, []);

  return  (
    <div id={styles.login}>
      <h1>GitHub Autentication</h1>

      <button onClick={(): Promise<void> => signIn('github')}>Login</button>
    </div>

  );
}






