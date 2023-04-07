import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { store } from './../store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}><Layout>{<Component {...pageProps}/>}</Layout></Provider>
  )
}
