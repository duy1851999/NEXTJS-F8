// 'use client'
// const Slide = () => {
//     return (
//         <div className="w-full h-40 bg-purple-600 text-white flex items-center justify-center rounded-lg">
//             <h2 className="text-2xl font-bold">Mở bán khóa JavaScript Pro 🏆</h2>
//         </div>
//     );
// };

// export default Slide;


// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//     {
//         title: "Mở bán khóa JavaScript Pro",
//         description:
//             "Từ 08/08/2024 khóa học sẽ có giá 1.399k. Khi khóa học hoàn thiện sẽ trở về giá gốc.",
//         image: "/slide/slide_pro.png",
//     },
//     {
//         title: "Học HTML CSS cho người mới",
//         description:
//             "Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.",
//         image: "/slide/html_css_pro.png",
//     },
//     {
//         title: "Học ReactJS Miễn Phí!",
//         description:
//             "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
//         image: "/slide/Reactjs.png",
//     },
//     {
//         title: "Thành Quả của Học Viên",
//         description:
//             "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
//         image: "/slide/f8_show.png",
//     },
//     {
//         title: "F8 trên Youtube",
//         description:
//             "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
//         image: "/slide/Banner_03_youtube.png",
//     },
//     {
//         title: "F8 trên Facebook",
//         description:
//             "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
//         image: "/slide/Facebook.png",
//     },
// ];

// const Slide = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Tự động chuyển slide sau 5 giây
//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [currentIndex]);

//     // Chuyển sang slide tiếp theo
//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     // Chuyển về slide trước đó
//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//         );
//     };

//     return (
//         <div className="relative w-[1690px] h-[300px] mx-auto overflow-hidden rounded-lg">
//             <div className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {slides.map((slide, index) => (
//                     <div key={index} className="w-full flex">
//                         {/* Phần mô tả */}
//                         <div className="w-[640px] h-[300px] bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-lg text-white flex flex-col justify-center">
//                             <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
//                             <p className="mb-4">{slide.description}</p>
//                             <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-purple-600 transition">
//                                 XEM THÀNH QUẢ
//                             </button>
//                         </div>

//                         {/* Phần chính giữa (trùng màu) */}
//                         <div className="flex-grow bg-gradient-to-r from-purple-600 to-blue-500 h-[270px]"></div>

//                         {/* Phần hiển thị ảnh */}
//                         <div className="w-[600px] h-[300px] relative">
//                             <Image
//                                 src={slide.image}
//                                 alt="Slide image"
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="rounded-lg"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Nút điều hướng */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
//             >
//                 <ChevronLeft size={24} />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
//             >
//                 <ChevronRight size={24} />
//             </button>

//             <div className="absolute bottom-10 left-3 flex space-x-1">
//                 {slides.map((_, index) => (
//                     <div
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "w-14 bg-gray-700" : "w-8 bg-gray-300"
//                             }`}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Slide;


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        title: "Mở bán khóa JavaScript Pro",
        description:
            "Từ 08/08/2024 khóa học sẽ có giá 1.399k. Khi khóa học hoàn thiện sẽ trở về giá gốc.",
        image: "/slide/slide_pro.png",
        action: "HỌC THỬ MIỄN PHÍ"
    },
    {
        title: "Học HTML CSS cho người mới",
        description:
            "Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.",
        image: "/slide/html_css_pro.png",
        action: "HỌC THỬ MIỄN PHÍ"
    },
    {
        title: "Học ReactJS Miễn Phí!",
        description:
            "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
        image: "/slide/Reactjs.png",
        action: "ĐĂNG KÝ NGAY"
    },
    {
        title: "Thành Quả của Học Viên",
        description:
            "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
        image: "/slide/f8_show.png",
        action: "XEM THÀNH QUẢ"
    },
    {
        title: "F8 trên Youtube",
        description:
            "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
        image: "/slide/Banner_03_youtube.png",
        action: "ĐĂNG KÝ KÊNH"
    },
    {
        title: "F8 trên Facebook",
        description:
            "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
        image: "/slide/Facebook.png",
        action: "THAM GIA NHÓM"
    },
];

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="relative w-[1690px] h-[300px] rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 ">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 flex">
                            {/* Phần mô tả */}
                            <div className="w-[640px] h-[300px] p-6  text-white flex flex-col justify-center ">
                                <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
                                <p className="mb-4">{slide.description}</p>
                                <button className="py-1 border-2 border-white rounded-xl w-40 hover:bg-white hover:text-purple-600 transition">
                                    {slide.action}
                                </button>
                            </div>

                            {/* Phần hiển thị ảnh */}
                            <div className="flex-grow h-[300px] relative">
                                <Image
                                    src={slide.image}
                                    alt="Slide image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nút điều hướng */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 -ml-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 -mr-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots điều hướng */}
            <div className="absolute -bottom-6 left-10 transform flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "w-12 bg-gray-700" : "w-8 bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slide;


