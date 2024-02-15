// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Counter from './components/queueUpdates'
import PersonData from './components/stateObj'
import Form from './components/snapshot2'
import FeedbackForm from './qcomps/thankYouCrash'
import RequestTracker from './qcomps/shoppingCart'

export default function Home() {
  return (
    <div className={styles.main}>
        <RequestTracker />
    </div>
  )
}
