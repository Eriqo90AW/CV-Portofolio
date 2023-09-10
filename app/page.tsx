import Image from 'next/image'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Main from './components/Main'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Main/>
    </main>
  )
}
