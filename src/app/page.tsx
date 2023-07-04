"use client"
import styles from './page.module.css'
import Dashboard from './dashboard/Dashboard'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Providers from './components/Provider'
import Login from './components/login/Login'
import { useSession } from 'next-auth/react'

export default function Home() {
 const {data: session } = useSession()

  return (
    <main className={styles.main}>
        <Header />
        {session && (
          <>
          <Sidebar />
          <Dashboard />
          </>
        )}
        <Login />
    </main>
  )
}
