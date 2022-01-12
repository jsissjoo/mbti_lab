import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <input type='text' name='id' placeholder='아이디'/>
      <input type='password' name='pwd' placeholder='패스워드'/>
      <input type='submit' />
     <Link href="/"><button>home</button></Link> 
    </div>
  )
}

export default Login
