"use client"

import AuthForm from './auth-form'
import * as React from 'react';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center pt-40 " >
      <div className='w-80'>
        <div >
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
