import {useMoralis,logout} from 'react-moralis'
import Image from 'next/image'
import BodrumDappLogo from '../public/Bodrum-Dapp-Logo.png'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'
function Header () {
  const {user,logout} = useMoralis()
  return (
    <div className="sticky top-0 p-5 z-50 text-pink-500 bg-black shadow-md border-b-2 border-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-32 w-32 mx-auto hidden lg:inline-grid border-4 border-pink-100 rounded-full shadow-xl">
        <Image 
        layout="fill"
        objectFit="cover"
        className="rounded-full"
        src={BodrumDappLogo}/>
        </div>

        <div className="col-span-4 text-left lg:text-center">

        <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-4 rounded-full"><Avatar logoutOnPress/></div>

        <h1 className="text-3xl text">Welcome to the Bodrum Metaverse</h1>
        <h2 className="text-4xl font-bold truncate">{user.getUsername('')}</h2>
         <button onClick={logout} className="bg-pink-200 rounded-md p-1 text-white-100">Logout</button>

        <ChangeUsername/>



        {/*Welcome Message*/}


        {/*username*/}

        {/*Change Username*/}




        </div>

      
      
      </div>

    </div>
  )

}
export default Header