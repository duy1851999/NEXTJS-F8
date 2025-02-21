'use client'
import Image from 'next/image';
const courses = [
    { image: "/Pro_Courses/1.png", title: "HTML, CSS Pro", org_price: "2.500.000đ", price: "1.299.000đ", author: "Sơn Đặng", view: "591", course_time: "116h50p" },
    { image: "/Pro_Courses/2.png", title: "JavaScript Pro", org_price: "3.299.000đ", price: "1.399.000đ", author: "Sơn Đặng", view: "187", course_time: "35h3p" },
    { image: "/Pro_Courses/3.png", title: "Ngôn ngữ Sass", org_price: "400.000đ", price: "299.000đ", author: "Sơn Đặng", view: "591", course_time: "6h18p" },
];

const Pro_Courses_Grid = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Khóa học Pro</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
                        <Image src={course.image} alt={course.title} width={312} height={175} className="w-full h-auto" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <p className="text-sm text-gray-600">
                                <span className="line-through text-gray-400 ">{course.org_price}</span>{' '}
                                <span className="text-red-500 font-bold px-0 sm:px-2 md:px-3 lg:px-6">{course.price}</span>
                            </p>
                            {/* <div className="flex flex-row gap-6">
                                <p className="text-sm text-gray-500">👤 {course.author}</p>
                                <p className="text-sm text-gray-500">👁 {course.view}</p>
                                <p className="text-sm text-gray-500">⏳ {course.course_time}</p>
                            </div> */}
                            <div className="flex flex-row gap-6 items-center">
                                <div className="flex items-center gap-4">
                                    <Image src="/Pro_Courses/founder.webp" alt="Author" width={14} height={14} />
                                    <p className="text-sm text-gray-500">{course.author}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src="/Pro_Courses/continue.svg" alt="View" width={14} height={14} />
                                    <p className="text-sm text-gray-500">{course.view}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src="/Pro_Courses/svgviewer-output.svg" alt="Time" width={14} height={14} />
                                    <p className="text-sm text-gray-500">{course.course_time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pro_Courses_Grid;