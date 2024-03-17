"use client"
import {usePathname} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import CourseEnrollSection from './[coursId]/_components/CourseEnrollSection'
import CourseContentSection from './[coursId]/_components/CourseContentSection'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'

function CoursePreview({params}) {
  const {user}=useUser();
  const [courseInfo,setCourseInfo]=useState();
  const [isUserAlreadyEnrolled,setIsUserAlredyEnrolled] = useState(false);
    useEffect(()=>{
      params&&getCourseInfoById();
    },[params])

useEffect(()=>{
    courseInfo&&user&&checkUserEnrolledToCourse();
},[courseInfo,user])

    const getCourseInfoById=()=>{
        GlobalApi.getCourseById(params?.couseId).then(resp=>{
          setCourseInfo(resp?.courseList);
        })
    }
    const checkUserEnrolledToCourse=()=>{
      GlobalApi.checkUserEnrolledToCourse(courseInfo.slug, user.primaryEmailAddress.emailAddress)
      .then(resp=>{
        if(resp?.userEnrollCourses[0]?.id)
        {
          setIsUsedAlreadyEnrolled(true);
        }
      })
    }
  return courseInfo&&(
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        <div className='col-span-2 bg-white p-3'>
           <CourseVideoDescription/>
        </div>

        <div >
          <CourseEnrollSection courseInfo={courseInfo} 
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
          <CourseContentSection courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
        </div>
      </div>
  )
}

export default CoursePreview