import { Link } from "react-router-dom"

const Errorpage = () => {
  return (
    <div className='h-screen border flex flex-col items-center justify-center'>
            <h1 className='text-2xl'>Oops! Page not found!</h1>
            <Link to={'/'}>Back Home</Link>
    </div>
  )
}

export default Errorpage