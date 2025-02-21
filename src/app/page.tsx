// import Image from "next/image";
// import SideBarMenu from "@/components/Menu";
// import Slide from "@/components/Slide";
// import Grid from "@/components/Grid";
// export default function Home() {
//   return (
//     <div className="grid mt-24 grid-rows-[20px_1fr_20px] items-center pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <SideBarMenu></SideBarMenu>
//       <div className="flex flex-1 flex-col w-full p-6">
//         <Slide />
//         <Grid />
//       </div>
//     </div>
//   );
// }


import SideBarMenu from "@/components/Menu";
import Slide from "@/components/Slide";
import Pro_Courses_Grid from "@/components/ProCoursesGrid";
import Free_Courses_Grid from "@/components/FreeCoursesGrid";
import ViewMark from "@/components/ViewMark";
import VideoMark from "@/components/VideoMark";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen font-geist-sans mt-24">
      {/* Sidebar */}
      <div className="hidden md:w-1/12 md:-mt-4 md:block ">
        <SideBarMenu />
      </div>

      {/* Nội dung chính */}
      <div className="w-11/12 px-4 sm:px-0 md:px-0">
        <div className="flex flex-col w-full gap-6">
          <Slide />
          <Pro_Courses_Grid />
          <Free_Courses_Grid />
          <ViewMark />
          <VideoMark />
        </div>
      </div>
    </div>
  );
}
