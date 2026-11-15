import { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
function Navbar() {
  const navigate = useNavigate()
  const [log, setLog] = useState(false)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLog(true)
        console.log("User logged In")
      } else {
        setLog(false)
        console.log("User logged Out")
      }
    })

    return () => unsubscribe()
  }, [])



  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login', { replace: true })
      console.log("Logout successful")
    } catch (error) {
      console.log("Logout Error:", error.message)
    }
  }

  return (
    <div className='py-5 flex justify-between items-center'>
      <Link to={"/home"}>      <h2 className='text-2xl font-bold'> <span className='text-4xl font-bold text-[#FAA116]'>B</span>log <span className='text-4xl font-bold text-[#FAA116]' >P</span>ortfolio</h2>
</Link>
      <div className='flex items-center'>
        <Link className='list-none px-5' to={"/home"}>Home</Link>
        <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
        
        {
          log ? <button className='button-style hidden md:block' onClick={handleLogout}>Logout</button> : <button className='button-style hidden md:block' onClick={() => navigate("/login")}>Login</button>


        }
      </div>
    </div>
  )
}

export default Navbar