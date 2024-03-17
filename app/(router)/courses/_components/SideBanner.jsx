import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
function SideBanner() {
  const [sideBannerList, setSIdeBannerList] = useState();
  useEffect(() => {
    getSideBanner();
  }, []);
  const getSideBanners = () => {
    getSideBanner().then((resp) => {
      console.log(resp);
      setSIdeBannerList(resp.sideBanners);
    });
  };
  return (
    <div>
      {sideBannerList.map((item, index) => (
        <div>
          <Image src={item.banner.url} alt="banner" width={500} height={300} onClick={()=>window.open(item?.url)}
            className="rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanner;
