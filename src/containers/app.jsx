import React from 'react'
import TopBar from '../components/TopBar'

export default function({children}) {
  return (
    <div>
      <TopBar/>
      {children}
    </div>
  )
}