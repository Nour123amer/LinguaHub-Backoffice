import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/nextAuth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function DashboardLayout({children}:
    {children:React.ReactNode}) {
    
    const session = await getServerSession(authOptions);
    if(!session) redirect(`/signin`);
  return (
    <div>
        {children}
    </div>
  )
}
