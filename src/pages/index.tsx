import { useRouter } from 'next/router'
import { useSession, getSession, signIn, signOut } from 'next-auth/client'

import styles from './stylesIndex.module.scss';

export default function Home() {

  const router = useRouter()

  async function handleLogin() {

    await signIn('github')

    router.push('home')

  }


  return (
    <div id={styles.login}>
      <h1>GitHub Autentication</h1>

      <button onClick={handleLogin}>Login</button>
    </div>

  )
}