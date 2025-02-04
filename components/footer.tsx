import React from 'react'
import { lastModified } from '@/lib/data'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; {lastModified.year} Eriqo. All rights reserved. Last modified on {lastModified.date}.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built with React & Next.js
            (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend,
            and Vercel.
        </p>
    </footer>
  )
}
