'use client'
import Image from 'next/image';
const courses_free = [
    { image: "/Free_Courses/1.png", title: "Kiến Thức Nhập Môn IT", org_price: "Miễn phí", price: "Miễn phí", author: "132.970", view: "9", course_time: "3h12p" },
    { image: "/Free_Courses/2.png", title: "Lập trình C++ cơ bản, nâng cao", org_price: "Miễn phí", price: "Miễn phí", author: "32.940", view: "55", course_time: "10h18p" },
    { image: "/Free_Courses/3.png", title: "HTML CSS từ Zero đến Hero", org_price: "Miễn phí", price: "Miễn phí", author: "206.782", view: "117", course_time: "29h5p" },
    { image: "/Free_Courses/4.png", title: "Responsive Với Grid System", org_price: "Miễn phí", price: "Miễn phí", author: "46.397", view: "34", course_time: "6h31p" },
    { image: "/Free_Courses/5.png", title: "Lập Trình JavaScript Cơ Bản", org_price: "Miễn phí", price: "Miễn phí", author: "144.547", view: "112", course_time: "24h15p" },
    { image: "/Free_Courses/6.png", title: "Lập Trình JavaScript Nâng Cao", org_price: "Miễn phí", price: "Miễn phí", author: "39.855", view: "19", course_time: "8h41p" },
    { image: "/Free_Courses/7.png", title: "Làm việc với Terminal & Ubuntu", org_price: "Miễn phí", price: "Miễn phí", author: "19.985", view: "28", course_time: "4h59p" },
    { image: "/Free_Courses/8.png", title: "Xây Dựng Website với ReactJS", org_price: "Miễn phí", price: "Miễn phí", author: "72.909", view: "112", course_time: "27h32p" },
    { image: "/Free_Courses/9.png", title: "Node & ExpressJS", org_price: "Miễn phí", price: "Miễn phí", author: "46.321", view: "36", course_time: "12h8p" },
    { image: "/Free_Courses/10.png", title: "App Đừng Chạm Tay Lên Mặt", org_price: "Miễn phí", price: "Miễn phí", author: "10.587", view: "13", course_time: "1h34p" },
];

const Free_Courses_Grid = () => {
    return (
        <div className="p-6">
            <h5 className="text-1xl mb-1">431.805+ người khác đã học</h5>
            <div className="flex flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Khóa học miễn phí</h2>
                <button className="text-red-500 relative flex items-center gap-1 group hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500 hover:after:left-0 hover:after:bottom-[-2px] transition">
                    Xem lộ trình
                    <Image
                        src="Free_Courses/arrow.svg"
                        alt="arrow"
                        width={10}
                        height={10}
                        className="transition-transform transform group-hover:translate-x-1 fill-red-500"
                    />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {courses_free.map((course_free, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 py-4">
                        <Image src={course_free.image} alt={course_free.title} width={312} height={175} className="w-full h-auto" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{course_free.title}</h3>
                            <p className="text-sm text-gray-600">
                                <span className="text-red-500 font-bold">{course_free.price}</span>
                            </p>
                            <div className="flex flex-row gap-6 items-center">
                                <div className="flex items-center gap-4">
                                    <Image src="/Pro_Courses/founder.webp" alt="Author" width={14} height={14} />
                                    <p className="text-sm text-gray-500">{course_free.author}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src="/Pro_Courses/continue.svg" alt="View" width={14} height={14} />
                                    <p className="text-sm text-gray-500">{course_free.view}</p>
                                </div>
                                <div className="flex items-center gap-4">
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

export default Free_Courses_Grid;