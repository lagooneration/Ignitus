import React from 'react'
import CompanionCard from '@/components/extra/CompanionCard'
import Cta from '@/components/extra/CTA'
import CompanionsList from '@/components/extra/CompanionsList'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main className='py-2'>
      <h1 className='text-2xl underline'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard 
          id='123'
          name="Inclusive Innovation"
          topic="Design and Innovation"
          subject="Design"
          duration={15}
          color="#ffda6e"
          bookmarked={true}
          />
        <CompanionCard 
          id='456'
          name="Social Entrepreneurship"
          topic="Technology and Business"
          subject="Business"
          duration={15}
          color="#e5d0ff"
          bookmarked={false}
          />
        <CompanionCard 
          id='789'
          name="Research Innovation"
          topic="Research and Development"
          subject="Research"
          duration={15}
          color="#BDE7ff"
          bookmarked={false}
          />
      </section>

      <section className='home-section'>
        <CompanionsList 
         title="Recent Sessions"
         companions={recentSessions}
         classNames='w-2/3 max-lg:w-full'
         />
        <Cta />
      </section>
    </main>
  )
}

export default Page