"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from 'next-auth'
import { Avatar, Button } from '@mui/material'


const Login = () => {
  const { data: session } = useSession()
  console.log(session?.user)

  if (session) {
    return <>
      <Button variant={'contained'} color={'error'} onClick={() => signOut()}>Sign out</Button>
    </>
  }
  return <>
   <h2>Please log in</h2> <br />
    <Button variant={'contained'} color={'success'} onClick={() => signIn()}>Sign in</Button>
  </>
}

export default Login