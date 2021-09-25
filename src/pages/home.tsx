import { useRouter } from 'next/router'
import { FormEvent,  useState, useEffect } from 'react';

import { api } from '../services/client'

import { TheSearchField } from '../components/TheSearchField'
import Cookie from 'js-cookie'

import styles from './stylesHome.module.scss';


export default function Home() {

    const [searchedValue, setSearchedValue] = useState('');

    const router = useRouter()

    useEffect(() => {
        const token = Cookie.get('token')

        if (!token) {
            router.replace('/')
        }
    },[])

    
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