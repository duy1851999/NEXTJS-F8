'use client'
import Image from "next/image";

const SidebarMenu = () => {
    return (
        <div className="fixed top-28 left-0 flex justify-start items-start">
            <aside className="rounded-lg w-30 pl-5">
                <ul>
                    <li className="flex flex-col  justify-start items-center p-4">
                        <Image src="/trangchu.svg" alt="trangchu" width={38} height={38} className="rounded-lg w-6 h-6 cursor-pointer" />
                        <span className="mt-2">Trang chủ</span>
                    </li>
                    <li className="flex flex-col  justify-start items-center p-4">
                        <Image src="/lotrinh.svg" alt="lotrinh" width={38} height={38} className="rounded-lg w-6 h-6 cursor-pointer" />
                        <span className="mt-2">Lộ trình</span>
                    </li>
                    <li className="flex flex-col justify-start items-center p-4">
                        <Image src="/baiviet.svg" alt="baiviet" width={38} height={38} className="rounded-lg w-6 h-6 cursor-pointer" />
                        <span className="mt-2">Bài viết</span>
                    </li>
                    <li className="flex flex-col justify-start items-center p-4 rounded-3xl cursor-pointer mt-96">
                        <div className="mt-20">
                            <Image src="/loa.jpg" alt="loa" width={38} height={38} className="rounded-lg" />
                        </div>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default SidebarMenu;

// 'use client'
// import { useState } from "react";
// import { Home, BookOpen, FileText, ChevronLeft, ChevronRight } from "lucide-react";

// const SidebarMenu = () => {
//     const [isOpen, setIsOpen] = useState(true);

//     return (
//         <aside className={`bg-white h-screen p-4 shadow-lg transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>

//             {/* Danh sách menu */}
//             <nav className="mt-6">
//                 <ul className="space-y-4">
//                     <MenuItem icon={<Home />} text="Trang chủ" isOpen={isOpen} />
//                     <MenuItem icon={<BookOpen />} text="Lộ trình" isOpen={isOpen} />
//                     <MenuItem icon={<FileText />} text="Bài viết" isOpen={isOpen} />
//                 </ul>
//             </nav>
//         </aside>
//     );
// };

// const MenuItem = ({ icon, text, isOpen }) => {
//     return (
//         <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-all">
//             <span className="text-gray-700">{icon}</span>
//             {isOpen && <span className="text-gray-800">{text}</span>}
//         </li>
//     );
// };

// export default SidebarMenu;

// 'use client'
// import { useState } from "react";
// import { Home, BookOpen, FileText, ChevronLeft, ChevronRight } from "lucide-react";

// // Định nghĩa kiểu dữ liệu cho MenuItem
// interface MenuItemProps {
//     icon: JSX.Element;
//     text: string;
//     isOpen: boolean;
// }

// const SidebarMenu: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(true);

//     return (
//         <aside className={`bg-white h-screen p-4 shadow-lg transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
//             {/* Nút toggle Sidebar */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex items-center justify-center p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
//             >
//                 {isOpen ? <ChevronLeft /> : <ChevronRight />}
//             </button>

//             {/* Danh sách menu */}
//             <nav className="mt-6">
//                 <ul className="space-y-4">
//                     <MenuItem icon={<Home />} text="Trang chủ" isOpen={isOpen} />
//                     <MenuItem icon={<BookOpen />} text="Lộ trình" isOpen={isOpen} />
//                     <MenuItem icon={<FileText />} text="Bài viết" isOpen={isOpen} />
//                 </ul>
//             </nav>
//         </aside>
//     );
// };

// // Component MenuItem với kiểu dữ liệu cụ thể
// const MenuItem: React.FC<MenuItemProps> = ({ icon, text, isOpen }) => {
//     return (
//         <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition-all">
//             <span className="text-gray-700">{icon}</span>
//             {isOpen && <span className="text-gray-800">{text}</span>}
//         </li>
//     );
// };

// export default SidebarMenu;
