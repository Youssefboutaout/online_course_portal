import React, {useEffect} from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
function CourseList() {


    useEffect(() => () => {
        GlobalApi.getAllCourseList().then(resq => {
          console.log(resq);
        });
      }, []);
  return (
    <div>
      CourseList
    </div>
  )
}

export default CourseList
