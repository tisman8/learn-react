// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile_props'
import MyComp from './qcomps/firstcomp'
import RecipeList from './qcomps/recipes'
import TodoList from './qcomps/todos'
import Gallery from './qcomps/gallery_props'
import Holder from './components/square'
import PackingList from './qcomps/props_item'
import List from './qcomps/list_keys_id'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <MyComp />
        <List />
        <RecipeList />
        {/* <Bio /> */}
        {/* <PackingList /> */}
        {/* <TodoList />
        <Gallery />
        <Holder /> */}
    </div>
  )
}
