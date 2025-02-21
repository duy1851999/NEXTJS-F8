'use client'
import Image from "next/image";
import SearchBar from '@/components/SearchBar'
import Link from "next/link";



export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white z-40">
            <div className="flex flex-row items-center justify-between w-full border-b-2 px-6 py-2 h-20">
                {/* Logo */}
                <div className="flex flex-row justify-center items-center">
                    <Image src="/f8-icon-lV2rGpF0.webp" alt="F8 Logo" width={38} height={38} className="rounded-lg w-12 h-12 ml-6" />
                    <h1 className="font-bold ml-6 lg:block hidden">Học Lập Trình Để Đi Làm</h1>
                </div>

                {/* Thanh tìm kiếm */}
                <div className="flex  flex-row justify-center items-center">
                    <SearchBar />
                </div>

                {/* Menu bên phải */}
                <div className="flex flex-row items-center space-x-4">
                    <button className="text-gray-600 cursor-pointer hover:text-black whitespace-nowrap lg:block hidden">
                        Khóa học của tôi
                    </button>
                    <Image src="/bells.svg" alt="Thông báo" width={24} height={24} className="cursor-pointer w-8 h-8 mx-2" />
                    <Image src="/avatar.jpg" alt="Avatar" width={32} height={32} className="rounded-full cursor-pointer mx-3" />
                </div>
            </div>
        </header>
    );
}

