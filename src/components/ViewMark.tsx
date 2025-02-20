// 'use client'
// import Image from 'next/image';
// const courses_free = [
//     { image: "/ViewMark/1.png", title: "Tổng hợp các sản phẩm của học viên tại F8", org_price: "", price: "", author: "Sơn Đặng", view: "/ViewMark/SonDang.jpg", course_time: "6 phút đọc" },
//     { image: "/ViewMark/2.png", title: "[Phần 1] Tạo dự án ReactJS với Webpack và Babel", org_price: "", price: "", author: "Sơn Đặng", view: "/ViewMark/SonDang.jpg", course_time: "12 phút đọc" },
//     { image: "/ViewMark/3.png", title: "Cách đưa code lên GitHub và tạo GitHub Pages", org_price: "", price: "", author: "Võ Minh Kha", view: "/ViewMark/VoMinhKha.jpg", course_time: "4 phút đọc" },
//     { image: "/ViewMark/4.png", title: "Ký sự ngày thứ 25 học ở F8 ", org_price: "", price: "", author: "Sơn Sơn", view: "/ViewMark/SonSon.webp", course_time: "1 phút đọc" },
//     { image: "/ViewMark/5.png", title: "Các nguồn tài nguyên hữu ích cho 1 front-end developer", org_price: "", price: "", author: "Dương Vương", view: "/ViewMark/DuongVuong.webp", course_time: "2 phút đọc" },
//     { image: "/ViewMark/6.png", title: "Thời gian và Động lực", org_price: "", price: "", author: "Dong Ngo", view: "/ViewMark/DongNgo.jpg", course_time: "6 phút đọc" },
//     { image: "/ViewMark/7.png", title: "Tổng hợp tài liệu tự học tiếng anh cơ bản.", org_price: "", price: "", author: "Trung Thành Lê", view: "/ViewMark/LuuTrungThanh.jpg", course_time: "10 phút đọc" },
//     { image: "/ViewMark/8.png", title: "Học như thế nào là phù hợp ?", org_price: "", price: "", author: "Ngoc Tien Pham", view: "/ViewMark/PhamTienNgoc.webp", course_time: "4 phút đọc" },
// ];

// const ViewMark = () => {
//     return (
//         <div className="p-1">
//             <div className="flex flex-row justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">Bài viết nổi bật</h2>
//                 <button className="text-red-500 relative flex items-center gap-1 group hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500 hover:after:left-0 hover:after:bottom-[-2px] transition">
//                     Xem tất cả
//                     <Image
//                         src="Free_Courses/arrow.svg"
//                         alt="arrow"
//                         width={10}
//                         height={10}
//                         className="transition-transform transform group-hover:translate-x-1 fill-red-500"
//                     />
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
//                 {courses_free.map((course_free, index) => (
//                     <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 py-4">
//                         <Image src={course_free.image} alt={course_free.title} width={312} height={175} />
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold">{course_free.title}</h3>
//                             <div className="flex flex-row gap-6 items-center">
//                                 <div className="flex items-center gap-4">
//                                     <Image src={course_free.view} alt="Author" width={14} height={14} />
//                                     <p className="text-sm text-gray-500">{course_free.author}</p>
//                                 </div>

//                                 <div className="flex items-center gap-4">
//                                     <Image src="/Pro_Courses/svgviewer-output.svg" alt="Time" width={14} height={14} />
//                                     <p className="text-sm text-gray-500">{course_free.course_time}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ViewMark;


// 'use client'
// import Image from 'next/image';

// const courses_free = [
//     { image: "/ViewMark/1.png", title: "Tổng hợp các sản phẩm của học viên tại F8", author: "Sơn Đặng", view: "/ViewMark/SonDang.jpg", course_time: "6 phút đọc" },
//     { image: "/ViewMark/2.png", title: "[Phần 1] Tạo dự án ReactJS với Webpack và Babel", author: "Sơn Đặng", view: "/ViewMark/SonDang.jpg", course_time: "12 phút đọc" },
//     { image: "/ViewMark/3.png", title: "Cách đưa code lên GitHub và tạo GitHub Pages", author: "Võ Minh Kha", view: "/ViewMark/VoMinhKha.jpg", course_time: "4 phút đọc" },
//     { image: "/ViewMark/4.png", title: "Ký sự ngày thứ 25 học ở F8 ", author: "Sơn Sơn", view: "/ViewMark/SonSon.webp", course_time: "1 phút đọc" },
//     { image: "/ViewMark/5.png", title: "Các nguồn tài nguyên hữu ích cho 1 front-end developer", author: "Dương Vương", view: "/ViewMark/DuongVuong.webp", course_time: "2 phút đọc" },
//     { image: "/ViewMark/6.png", title: "Thời gian và Động lực", author: "Dong Ngo", view: "/ViewMark/DongNgo.jpg", course_time: "6 phút đọc" },
//     { image: "/ViewMark/7.png", title: "Tổng hợp tài liệu tự học tiếng anh cơ bản.", author: "Trung Thành Lê", view: "/ViewMark/LuuTrungThanh.jpg", course_time: "10 phút đọc" },
//     { image: "/ViewMark/8.png", title: "Học như thế nào là phù hợp ?", author: "Ngoc Tien Pham", view: "/ViewMark/PhamTienNgoc.webp", course_time: "4 phút đọc" },
// ];

// const ViewMark = () => {
//     return (
//         <div className="p-6">
//             <div className="flex flex-row justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">Bài viết nổi bật</h2>
//                 <button className="text-red-500 relative flex items-center gap-1 group hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500 hover:after:left-0 hover:after:bottom-[-2px] transition">
//                     Xem tất cả
//                     <Image
//                         src="Free_Courses/arrow.svg"
//                         alt="arrow"
//                         width={10}
//                         height={10}
//                         className="transition-transform transform group-hover:translate-x-1 fill-red-500"
//                     />
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
//                 {courses_free.map((course_free, index) => (
//                     <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 py-4">
//                         {/* Đảm bảo hình ảnh luôn có kích thước cố định */}
//                         <div className="w-[312px] h-[175px] relative">
//                             <Image
//                                 src={course_free.image}
//                                 alt={course_free.title}
//                                 width={312}
//                                 height={175}
//                                 className="object-cover w-full h-full"
//                             />
//                         </div>
//                         <div className="p-4">
//                             {/* <h3 className="text-lg font-semibold">{course_free.title}</h3> */}
//                             <h3 className="text-lg font-semibold line-clamp-2 h-[48px] overflow-hidden">
//                                 {course_free.title}
//                             </h3>
//                             <div className="flex flex-row gap-6 items-center mt-2">
//                                 <div className="flex items-center gap-2">
//                                     <Image src={course_free.view} alt="Author" width={20} height={20} className="rounded-full" />
//                                     <p className="text-sm text-gray-500">{course_free.author}</p>
//                                 </div>

//                                 <div className="flex items-center gap-2">
//                                     <Image src="/Pro_Courses/svgviewer-output.svg" alt="Time" width={14} height={14} />
//                                     <p className="text-sm text-gray-500">{course_free.course_time}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ViewMark;


'use client';
import Image from 'next/image';

const courses_free = [
    { image: "/ViewMark/1.png", title: "Tổng hợp các sản phẩm của học viên tại F8", author: "Sơn Đặng", view: "/ViewMark/SonDang.jpg", course_time: "6 phút đọc" },
    { image: "/ViewMark/2.png", title: "[Phần 1] Tạo dự án ReactJS với Webpack và Babel", author: "Sơn Đặng", view: "/ViewMark/SonDang.jpg", course_time: "12 phút đọc" },
    { image: "/ViewMark/3.png", title: "Cách đưa code lên GitHub và tạo GitHub Pages", author: "Võ Minh Kha", view: "/ViewMark/VoMinhKha.jpg", course_time: "4 phút đọc" },
    { image: "/ViewMark/4.png", title: "Ký sự ngày thứ 25 học ở F8", author: "Sơn Sơn", view: "/ViewMark/SonSon.webp", course_time: "1 phút đọc" },
    { image: "/ViewMark/5.png", title: "Các nguồn tài nguyên hữu ích cho 1 front-end developer", author: "Dương Vương", view: "/ViewMark/DuongVuong.webp", course_time: "2 phút đọc" },
    { image: "/ViewMark/6.png", title: "Thời gian và Động lực", author: "Dong Ngo", view: "/ViewMark/DongNgo.jpg", course_time: "6 phút đọc" },
    { image: "/ViewMark/7.png", title: "Tổng hợp tài liệu tự học tiếng anh cơ bản.", author: "Trung Thành Lê", view: "/ViewMark/LuuTrungThanh.jpg", course_time: "10 phút đọc" },
    { image: "/ViewMark/8.png", title: "Học như thế nào là phù hợp?", author: "Ngoc Tien Pham", view: "/ViewMark/PhamTienNgoc.webp", course_time: "4 phút đọc" },
];

const VideoMark = () => {
    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Bài viết nổi bật</h2>
                <button className="text-red-500 flex items-center gap-1 group hover:underline">
                    Xem tất cả
                    <Image src="/Free_Courses/arrow.svg" alt="arrow" width={10} height={10} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {courses_free.map((course_free, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 py-4">
                        {/* Ảnh khóa học */}
                        {/* <div className="w-full aspect-[16/9] relative">
                            <Image src={course_free.image} alt={course_free.title} layout="fill" className="object-cover" />
                        </div> */}
                        <div className="w-[312px] h-[175px] relative">
                            <Image
                                src={course_free.image}
                                alt={course_free.title}
                                width={312}
                                height={175}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Nội dung */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-2 h-[55px] mb-2">{course_free.title}</h3>
                            <div className="flex flex-wrap gap-4 items-center">
                                {/* Tác giả */}
                                <div className="flex items-center gap-2">
                                    <Image src={course_free.view} alt="Author" width={20} height={20} className="rounded-full" />
                                    <p className="text-sm text-gray-500">{course_free.author}</p>
                                </div>

                                {/* Thời gian đọc */}
                                <div className="flex items-center gap-2">
                                    <Image src="/Pro_Courses/svgviewer-output.svg" alt="Time" width={14} height={14} />
                                    <p className="text-sm text-gray-500">{course_free.course_time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoMark;