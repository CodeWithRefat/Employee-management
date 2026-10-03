import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    setEmail('')
    setPassword('')
  }


  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className='flex justify-center items-center flex-col'
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            required
            placeholder='Enter your Email'
            className='border-emerald-600 border-2 outline-none text-xl py-3 px-5 rounded-full placeholder:text-gray-400 bg-transparent '
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder='Enter your Password'
            className='border-emerald-600 border-2 outline-none text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400 bg-transparent '
          />
          <button
            className='bg-emerald-600 border-none active:scale-95 outline-none text-xl py-2.5 px-25 mt-7 rounded-full placeholder:text-gray-400'
          >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
