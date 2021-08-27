import Head from 'next/head'
// import feature 
import Transaction from '../components/Transaction'
import Section from '../components/Section'
import Home from '../components/Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Online | Banking | App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    <Transaction />
    <Section />
    </div>
  )
}
