import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const VSignIn = () => {
  return (
    
      <section className="w-full h-screen flex justify-center items-center bg-slate-500">
        <div className='flex flex-col gap-10 px-14 py-24 bg-slate-200  rounded-lg'>
          <div className='text-3xl font-bold text-center'>Login</div>
          <div className='flex flex-col gap-3 items-start'>
            <div>
              <Label htmlFor="username">UserName</Label>
              <Input type="username" id="username" placeholder="Username" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <button className='bg-blue-600 text-white py-2 rounded-lg w-full mt-6'>Login</button>
          </div>
          <div>
            <div>Forgot Password</div>
            <div>Don't have an account? Sign Up</div>
          </div>
        </div>
      </section>
    
  )
} 

export default VSignIn