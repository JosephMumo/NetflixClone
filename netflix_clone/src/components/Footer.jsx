import React from 'react'

const Footer = () => {
  return (
    <div className='text-gray-400 flex flex-col md:flex-row justify-around py-6'>
        <section className='flex flex-col p-3 space-y-1 md:space-y-2'>
            <a href='#'>FAQ</a>
            <a href='#'>Investor Relations</a>
            <a href='#'>Privacy</a>
            <a href='#'>Speed Test</a>
        </section>
        <section className='flex flex-col p-3 space-y-1 md:space-y-2'>
            <a href='#'>Help Center</a>
            <a href='#'>Jobs</a>
            <a href='#'>Cookie Preferences</a>
            <a href='#'>Legal Notices</a>
        </section>
        <section className='flex flex-col p-3 space-y-1 md:space-y-2'>
            <a href='#'>Account</a>
            <a href='#'>Ways to Watch</a>
            <a href='#'>Corporate Information</a>
            <a href='#'>Only on Netflix</a>
        </section>
        <section className='flex flex-col p-3 space-y-1 md:space-y-2'>
            <a href='#'>Media Center</a>
            <a href='#'>Terms of Use</a>
            <a href='#'>Contact Us</a>
        </section>
    </div>
  )
}

export default Footer