import Image from 'next/image'
import styles from './page.module.css'
import  Dashboard  from './dashboard/Dashboard'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Sidebar />
     <Dashboard />
    </main>
  )
}
