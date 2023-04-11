import React from "react";
import styles from '@/styles/Home.module.css'
import Image from "next/image";

const Logo = () => <Image src='/mapicon.png' alt='Website icon of a map' width='50' height='50'/>

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Logo/>
            <h1>Smart Map</h1>
        </div>
    )
}
