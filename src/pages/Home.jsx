import React from 'react'
import { LinkBtn } from '../components/Button'

function Home() {
  return (
    <main className='container homepage'>
      <section className='homepage__hero'>
        <p className='home__hero__text'>Hello there 👋</p>
        <p className="home__hero__bold">I’m <span>Sandeep Sharma</span></p>
        <h1 className='home__hero__title'>
        I love creating cool, Fun and Interactive designs using code and I also like to talk about them.
        </h1>
        <LinkBtn text="View Projects" path='projects' />
      </section>
    </main>
  )
}

export default Home
