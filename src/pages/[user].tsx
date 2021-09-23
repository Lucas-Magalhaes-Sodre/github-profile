import { GetServerSideProps } from 'next'

import { ResultsView } from '../components/ResultsView'

interface DetailProps {

    name: string;
    avatar_url: string;

}

export default function Detail({ avatar_url, name }: DetailProps) {

    return (
        <ResultsView name={name} avatar_url={avatar_url} />
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

    const { user } = params
    
    const response = await fetch(`https://api.github.com/users/${user}`);

    const data = await response.json()
    
    return {
        
        props: {
            name: data.name,
            avatar_url: data.avatar_url
        }
    
    }
}