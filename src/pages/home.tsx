import { useRouter } from 'next/router'
import { FormEvent,  useState, useEffect } from 'react';

import { api } from '../services/client'

import { TheSearchField } from '../components/TheSearchField'

import styles from './stylesHome.module.scss';
//import { useSession } from 'next-auth/client';


export default function Home() {

    const [searchedValue, setSearchedValue] = useState('');
   // const [session] = useSession()
    const router = useRouter()

    /*if(session){
        router.replace('/')}*/  
    
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
        <div id={styles.home} >
            <TheSearchField>
                <form onSubmit={getUserData}>
                    <input
                        type="text"
                        id={styles.escrever__perfil}
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

            </TheSearchField>

        </div>
    );
}