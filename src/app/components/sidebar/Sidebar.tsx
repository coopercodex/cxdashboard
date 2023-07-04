import Analytics from '@/app/dashboard/analytics/Analytics'
import Profile from '@/app/dashboard/profile/Profile'
import Settings from '@/app/dashboard/settings/Settings'
import React from 'react'


const Sidebar = () => {
  return (
    <div>
      <Analytics />
      <Profile />
      <Settings />
    </div>
  )
}

export default Sidebar
