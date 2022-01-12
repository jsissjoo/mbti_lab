import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const MyPage: NextPage = () => {
  return (
    <div className={styles.container}>
      mypage
     <Link href="/login"><button>login</button></Link> 
    </div>
  )
}

export default MyPage
