import Image from 'next/image'
import BodrumDappLogo from '../public/Bodrum-Dapp-Logo.png'
import BodrumDappBackground from '../public/background-bodrum.png'
import {useMoralis} from 'react-moralis'
function Login({ data ,props}) {

  const {authenticate} = useMoralis();

  return(
    <div className="bg-black relative">
    <h1>I am login page</h1>
    <div className="flex flex-col absolute z-30 h-4/6 w-full items-center justify-center space-y-4">
    <Image className="rounded-full shadow-xl" src={BodrumDappLogo} width={250} height={250}/>    

    <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"> Login to the METAVERSE</button>
    </div>
    
    <div className="w-full h-screen">
     
    <Image
      src={BodrumDappBackground}
      alt="Bodrum Dapp App"
      layout="fill"
      objectFit="cover"
    /></div>

    
    </div>
  )
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }

}

export default Login