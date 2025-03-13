'use client'
import  AnimatedGridBackground  from '@/components/animatingBackground'
import Announcements from '@/components/Announcements'
import Countdown from '@/components/Time'
import React from 'react'
import VantaGlobe from '../components/vantaglobe/VantaGlobe'

export default function page() {
  return (
    <>
      <VantaGlobe/>
      <Countdown/>
      <AnimatedGridBackground/>
      <Announcements/>
    </>
  )
}
