import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function LoginPage() {
  return (
    <div className='flex flex-col w-full mx-auto h-screen justify-center items-center'>
      <Card className='shadow-none rounded-md'>
        <CardHeader>
          <CardTitle>Home</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome to the home page</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage