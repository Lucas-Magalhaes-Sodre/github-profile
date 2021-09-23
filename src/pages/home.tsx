import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react';

import { useSession,  signIn} from 'next-auth/client'

import { api } from '../services/client'

import { Header } from '../components/Header'

import styles from './stylesHome.module.scss';


export default function Home() {
    const [ session, loading] = useSession();

    const [searchedValue, setSearchedValue] = useState('');

    const router = useRouter();

    async function getUserData(event: FormEvent) {
        
        event.preventDefault()

        try {

            const response = await api.get(searchedValue);

            if (localStorage)
                localStorage.setItem('username', JSON.stringify(response.data.login))

            router.push(response.data.login)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id={styles.container} >
            <Header>
                <form onSubmit={getUserData}>
                    <input
                        type="text"
                        id="escrever__perfil"
                        placeholder="Digite o endereço de GitHub desejado"
                        value={searchedValue}
                        onChange={event => setSearchedValue(event.target.value)}
                    />

                    <br />

                    <button
                        type="submit"
                        id={styles.pesquisar__perfil}
                    >
                        Pesquisar
                    </button>
                </form>

            </Header>

        </div>
    );
}
