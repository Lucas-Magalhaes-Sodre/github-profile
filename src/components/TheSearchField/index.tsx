import { ReactNode } from 'react';
import styles from './styles.module.scss'

interface HeaderProps {
    children: ReactNode;
}

export function TheSearchField({ children }: HeaderProps) {
    return (
        <div id={styles.header}>

            <h1>GITHUB PROFILE</h1>
            {children}

        </div >

    );
}