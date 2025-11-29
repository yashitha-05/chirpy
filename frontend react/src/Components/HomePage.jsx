import { Grid } from '@mui/material'
import React from 'react'
import Navigation from './Navigation/Navigation'
import HomeSection from './Home/MiddlePart/HomeSection'
import UsersSection from './Home/MiddlePart/UsersSection'
import RightPart from './RightPart/RightPart'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile/Profile'
import TwitDetail from './Home/MiddlePart/TwitDetail'
import Explore from './Explore/Explore'
import Notifications from './Notifications/Notifications'
import Messages from './Messages/Messages'
import Lists from './Lists/Lists'
import Communities from './Communities/Communities'
import More from './More/More'

const HomePage = () => {
  const {theme}=useSelector(store=>store);
  return (
    <Grid container className='px-5 lg:px-36 justify-between'xs={12}>

        <Grid item xs={0} lg={2.5} className='hidden lg:block  w-full relative'>   
                <Navigation/>

            </Grid>
        <Grid item xs={12} lg={6} className={`px-5 lg:px-9 border ${theme.currentTheme==="dark"?"border-gray-800":""} `}>
          <Routes>
            <Route path='/' element={<UsersSection/>}></Route>
            <Route path='/home' element={<UsersSection/>}></Route>
            <Route path='/explore' element={<Explore/>}></Route>
            <Route path='/notifications' element={<Notifications/>}></Route>
            <Route path='/messages' element={<Messages/>}></Route>
            <Route path='/lists' element={<Lists/>}></Route>
            <Route path='/communities' element={<Communities/>}></Route>
            <Route path='/more' element={<More/>}></Route>
            {/* <Route path='/profile' element={<Profile/>}></Route> */}
            <Route path='/profile/:id' element={<Profile/>}></Route>
            <Route path='/twit/:id' element={<TwitDetail/>}></Route>
          </Routes>
            
        </Grid>
        <Grid item  xs={0} lg={3} className='hidden lg:block '>
            <RightPart/>
        </Grid>

    </Grid>
  )
}

export default HomePage