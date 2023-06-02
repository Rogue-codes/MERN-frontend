import Card from '@/components/card/Card'
import Category from '@/components/categories/Category'
import Profile from '@/components/profile/Profile'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-5 h-[90vh] overflow-y-scroll pb-12">
      <Profile/>
      <Card/>
      <Category/>
    </main>
  )
}
