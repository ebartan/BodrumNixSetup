import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps}) {
const serverUrlt = process.env['serverUrl']
const appId = process.env['APPID']
  return (
    <MoralisProvider appId={"8tBntj4KUT0ATbZXZ7cQ1mBTn6imRqT3DuK3y3Ae"} serverUrl={"https://cbyty9li9um6.usemoralis.com:2053/server"}>
    <Component {...pageProps} />
    </MoralisProvider>)
}

export default MyApp
