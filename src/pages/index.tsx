import Head from 'next/head'
import { Dashboard } from '../components/Dashboard'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro Timer</title>
      </Head>

      <main>       
        <CountdownProvider>
          <Dashboard />
        </CountdownProvider>
      </main>
    </>
  )
}
