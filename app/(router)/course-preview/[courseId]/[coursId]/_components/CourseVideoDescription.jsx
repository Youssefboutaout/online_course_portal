import React from "react";
import VedioPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Item } from "@radix-ui/react-select";

function CourseVideoDescription({
  courseInfo,
  activeChapterIndex,
  watchMode = false,
  setChapterCompleted,
}) {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo.name}</h2>
      <h2 className="text-gray-500 text-[14px] mb-3">{courseInfo.author}</h2>
      <VedioPlayer
        videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
        poster={!watchMode ? courseInfo?.banner?.url : null}
      />
      <h2 className="mt-5 text-[17px] font-semibold">
        {watchMode ? (
          <span className="flex justify-between items-center">
            {courseInfo?.chapter[activeChapterIndex]?.name}
            <Button
              onClick={() =>
                setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)
              }
            >
              Mark Completed
            </Button>
          </span>
        ) : (
          <span>About This Course</span>
        )}
        About This Course
      </h2>
      <div>
        {watchMode ? (
          <Markdown className="text-[12px] font-light mt-2 leading-6">
            {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
          </Markdown>
        ) : (
          <Markdown className="text-[12px] font-light mt-2 leading-6">
            {courseInfo.description}
          </Markdown>
        )}
      </div>
    </div>
  );
}

export default CourseVideoDescription;
