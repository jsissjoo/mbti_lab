import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useRouter } from 'next/router';

const UndefinedPage: NextPage = () => {
 
  return (
    <div className={styles.container}>
      404
     <Link href="/"><button>BackHome</button></Link> 
    </div>
  )
}

export default UndefinedPage
