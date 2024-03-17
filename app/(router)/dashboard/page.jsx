"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard';
import SideBanner from '../courses/_components/SideBanner';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '@/app/_utils/GlobalApi';

function Dashboard() {
  const {user}=useUser();
  const [userEnrollCourses,setUserEnrolledCourse]=useState([]);
  useEffect(()=>{
    user&&getAllUserEnrolledCourses();
  },[user]);

  const getAllUserEnrolledCourses=()=>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp)
      setUserEnrolledCourse(resp.userEnrollCourses);
    })
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
    <div className="col-span-2">
      <WelcomeBannerDashboard user={user}/>
      <InProgressCourseList userEnrollCourses={userEnrollCourses}/>
    </div>
    <div className='p-5 bg-white rounded-xl'>
      <SideBanner/>
    </div>
  </div>
  )
}

export default Dashboard
