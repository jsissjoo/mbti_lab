import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useState } from 'react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <Link href="/login"><button>login</button></Link>
     <Link href="/mypage"><button>mypage</button></Link>
    </div>
  )
}

export default Home
