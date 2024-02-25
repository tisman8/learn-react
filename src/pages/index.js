// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BucketList from './qcomps/arrObj'
import List from './qcomps/artistsRemoveArr'
import Scoreboard from './qcomps/updObjectsForm'

export default function Home() {
  return (
    <div className={styles.main}>
        <BucketList />
    </div>
  )
}
