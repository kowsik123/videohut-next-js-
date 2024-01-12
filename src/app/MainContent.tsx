"use client"
import Card from '@/components/Card'
import MovieCategory from '@/components/MovieCategory'
import Video from '@/components/Video'
import React from 'react'

function MainContent() {
  return (
    <div>
      <Video src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' muteOption tag='U/A 7+' />
      <div>
        <MovieCategory>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
        </MovieCategory>
        <MovieCategory>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
        </MovieCategory>
        <MovieCategory>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
        </MovieCategory>
        <MovieCategory>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
          <Card type='compact'></Card>
        </MovieCategory>
      </div>
    </div>
  )
}

export default MainContent