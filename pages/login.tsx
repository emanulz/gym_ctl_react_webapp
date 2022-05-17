import type { NextPage } from 'next'
import Router from 'next/router'
import Head from 'next/head'
import { KeyboardEvent, MouseEvent, useEffect, useState } from 'react'

import useUser from 'app/data/use-user'
import { login } from 'app/lib/auth'

import styles from '../styles/Login.module.css'
import { useDispatch } from 'react-redux'
import { setUserData } from 'app/store/slices/auth'

const Login: NextPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const { user, mutate, loggedOut } = useUser()

  useEffect(() => {
    if (user && !loggedOut) {
      dispatch(setUserData(user))
      Router.replace('/')
    }
  }, [user, loggedOut, dispatch])

  const handleUsernameEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(username)
    }
  }

  const handlePasswordEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(password)
    }
  }

  const loginButtonPressed = (e: MouseEvent) => {
    e.preventDefault()
    console.log('Button Pressed')
    console.log(username)
    console.log(password)
    login()
    mutate()
  }

  return (
    <div>
      <Head>
        <title>Gym Ctl Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Login Page</h1>
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={(e) => handleUsernameEnter(e)}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={(e) => handlePasswordEnter(e)}
        />
        <button onClick={(e) => loginButtonPressed(e)}>Login</button>
      </main>
    </div>
  )
}

export default Login
