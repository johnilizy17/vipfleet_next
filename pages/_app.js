import '../styles/globals.css'
import Script from "next/script";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title> VIP FLEETS </title>
      <meta name="keywords" content="Airport pickup, Luxury"/>
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
      id="my-script"
        strategy="lazyOnload"
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments); }
        gtag('js', new Date());
      
        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`
        }
    </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
