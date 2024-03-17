import React, {useEffect , useState} from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function CourseList() {
    const [courseList,setCourseList] = useState([]);
    useEffect(() => () => {
        GlobalApi.getAllCourseList().then(resq => {
          setCourseList(resp?.CourseLists)
        });
      }, []); 
  return (
    <div className='p-5 bg-white rounded-lg mt-3'>
      <div>
         <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
         <Select>
          <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
       {courseList?.length<0? courseList.map((item, index)=>(
        <Link href={'/course-preview/'+item.slug}>
         <div key={index}>
            <CourseList course={item}/>
         </div>
         </Link>
       ))
       :
       [1,2,3,4,5,6,7].map((item,index)=>(
        <div key={index} className='w-full h-[240px] 
        rounded-xl m-2 bg-slate-200 animate-pulse'>

        </div>
       ))
       }
      </div>
    </div>
  )
}

export default CourseList
