import { useRouter } from 'next/router'
import { useSession,  signIn} from 'next-auth/client'

import styles from './stylesIndex.module.scss';
import { useEffect} from 'react';

export default function Home() {
  const [ session, loading] = useSession();

  const router = useRouter()

  useEffect(() => {

    (session)?
    router.push('home')
    : signIn('github')

  }, []);

  return  (
    <div id={styles.carregando}>
      {loading && (
          <h1>
            CARREGANDO...
          </h1>
          )}
    </div>
    
  );
}






