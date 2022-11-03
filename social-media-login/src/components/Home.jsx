import { async } from '@firebase/util'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useData } from '../context'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate=useNavigate()

  const { signOutProfile } = useData()

const handleSignOut = async (e) => {
  e.preventDefault()
  try {
    await signOutProfile()
    navigate('/')
  }
  catch (err) {
    alert(err.message)
  }
}


  return (
    <div>
      <div className="p4 box mt-3 text-center">Hello Welcome  </div>
      <div className="d-grid gap-2">
        <Button variant='primary' onClick={handleSignOut} >Log out</Button>
      </div>
    </div>
  )
}

export default Home