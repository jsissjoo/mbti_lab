import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useRouter } from 'next/router';
import UndefinedPage from './404';
import { useEffect } from 'react';


const Mbti: NextPage = () => {

  const router = useRouter()
  const MBTI = router.query?.mbti || ''

  useEffect(()=>{
    // TODO: 절-대 수정훼
    const MBTIS = ["istj","iftp","isfj","isfp","intj","intp","infj","infp","eSTj","eSTp","eSfj","eSfp","enTj","enTp","enfj","enfp"]

    console.log(MBTI)
    if(!MBTIS.includes(MBTI)) {
      router.push('/404')
    }
  }, [])
  
  return (
    <div className={styles.container}>
      {MBTI}
     <Link href="/login"><button>login</button></Link> 
    </div>
  )
}

export default Mbti
