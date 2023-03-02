import '@/styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode
}

type AppPropsWidthLayout = AppProps & {
  Component: NextPageWithLayout,

}

export default function App({ Component, pageProps } : AppPropsWidthLayout) {
  return <Component {...pageProps} />
}
