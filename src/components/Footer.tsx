// 'use client'
// import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
// import Image from "next/image";

// export default function Footer() {
//     return (
//         <footer className="bg-gray-900 text-gray-300 py-8 px-6">
//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16">
//                 {/* Cột 1 */}
//                 <div>
//                     <h2 className="text-white text-lg font-semibold flex items-center gap-2">
//                         <Image src="/f8-icon-lV2rGpF0.webp" alt="F8 Logo" width={38} height={38} className="rounded-lg w-10 h-10" /> Học Lập Trình Để Đi Làm
//                     </h2>
//                     <p className="mt-2">Điện thoại: 08 1919 8989</p>
//                     <p>Email: contact@fullstack.edu.vn</p>
//                     <p>Địa chỉ: Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
//                     <img src="/DMCA_protected.png" alt="DMCA" className="mt-3 w-32" />
//                 </div>

//                 {/* Cột 2 */}
//                 <div>
//                     <h3 className="text-white font-semibold">VỀ F8</h3>
//                     <ul className="mt-2 space-y-2">
//                         <li><a href="#" className="hover:text-white">Giới thiệu</a></li>
//                         <li><a href="#" className="hover:text-white">Liên hệ</a></li>
//                         <li><a href="#" className="hover:text-white">Điều khoản</a></li>
//                         <li><a href="#" className="hover:text-white">Bảo mật</a></li>
//                     </ul>
//                 </div>

//                 {/* Cột 3 */}
//                 <div>
//                     <h3 className="text-white font-semibold">SẢN PHẨM</h3>
//                     <ul className="mt-2 space-y-2">
//                         <li><a href="#" className="hover:text-white">Game Nester</a></li>
//                         <li><a href="#" className="hover:text-white">Game CSS Diner</a></li>
//                         <li><a href="#" className="hover:text-white">Game CSS Selectors</a></li>
//                         <li><a href="#" className="hover:text-white">Game Froggy</a></li>
//                         <li><a href="#" className="hover:text-white">Game Froggy Pro</a></li>
//                         <li><a href="#" className="hover:text-white">Game Scoops</a></li>
//                     </ul>
//                 </div>

//                 {/* Cột 4 */}
//                 <div>
//                     <h3 className="text-white font-semibold">CÔNG CỤ</h3>
//                     <ul className="mt-2 space-y-2">
//                         <li><a href="#" className="hover:text-white">Tạo CV xin việc</a></li>
//                         <li><a href="#" className="hover:text-white">Rút gọn liên kết</a></li>
//                         <li><a href="#" className="hover:text-white">Clip-path maker</a></li>
//                         <li><a href="#" className="hover:text-white">Snippet generator</a></li>
//                         <li><a href="#" className="hover:text-white">CSS Grid Generator</a></li>
//                         <li><a href="#" className="hover:text-white">Cảnh báo sờ tay lên mặt</a></li>
//                     </ul>
//                 </div>

//                 {/* Cột 5 */}
//                 <div>
//                     <h3 className="text-white font-semibold">CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h3>
//                     <p className="mt-2">Mã số thuế: 0109922901</p>
//                     <p>Ngày thành lập: 04/03/2022</p>
//                     <p>Lĩnh vực hoạt động: Giáo dục, công nghệ - lập trình. Chúng tôi tập trung xây dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt Nam.</p>

//                 </div>
//             </div>
//             <div className="flex ml-30">
//                 <div className="flex text-center mt-6 text-gray-400">
//                     © 2018 - 2025 F8. Nền tảng học lập trình hàng đầu Việt Nam
//                 </div>
//                 <div className="flex gap-4 mt-3">
//                     <FaYoutube className="text-red-500 text-2xl cursor-pointer" />
//                     <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
//                     <FaTiktok className="text-gray-300 text-2xl cursor-pointer" />
//                 </div>

//             </div>
//         </footer>
//     );
// }


'use client'
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6 items-center justify-between">
            <div className="max-w-8xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 px-8">
                {/* Cột 1 */}
                <div>
                    <h2 className="text-white text-lg font-semibold flex items-center gap-2">
                        <Image src="/f8-icon-lV2rGpF0.webp" alt="F8 Logo" width={38} height={38} className="rounded-lg w-10 h-10" /> Học Lập Trình Để Đi Làm
                    </h2>
                    <div className=" text-gray-400 text-sm">
                        <p className="mt-2">Điện thoại: 08 1919 8989</p>
                        <p>Email: contact@fullstack.edu.vn</p>
                        <p>Địa chỉ: Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
                    </div>
                    <img src="/DMCA_protected.png" alt="DMCA" className="mt-3 w-32" />
                </div>
                <div className="sm: flex flex-col gap-6  md:flex-row lg:flex-row justify-between">
                    {/* Cột 2 */}
                    <div>
                        <h3 className="text-white font-semibold">VỀ F8</h3>
                        <ul className="mt-2 space-y-2  text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Giới thiệu</a></li>
                            <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                            <li><a href="#" className="hover:text-white">Điều khoản</a></li>
                            <li><a href="#" className="hover:text-white">Bảo mật</a></li>
                        </ul>
                    </div>

                    {/* Cột 3 */}
                    <div>
                        <h3 className="text-white font-semibold">SẢN PHẨM</h3>
                        <ul className="mt-2 space-y-2  text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Game Nester</a></li>
                            <li><a href="#" className="hover:text-white">Game CSS Diner</a></li>
                            <li><a href="#" className="hover:text-white">Game CSS Selectors</a></li>
                            <li><a href="#" className="hover:text-white">Game Froggy</a></li>
                            <li><a href="#" className="hover:text-white">Game Froggy Pro</a></li>
                            <li><a href="#" className="hover:text-white">Game Scoops</a></li>
                        </ul>
                    </div>

                    {/* Cột 4 */}
                    <div>
                        <h3 className="text-white font-semibold">CÔNG CỤ</h3>
                        <ul className="mt-2 space-y-2  text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Tạo CV xin việc</a></li>
                            <li><a href="#" className="hover:text-white">Rút gọn liên kết</a></li>
                            <li><a href="#" className="hover:text-white">Clip-path maker</a></li>
                            <li><a href="#" className="hover:text-white">Snippet generator</a></li>
                            <li><a href="#" className="hover:text-white">CSS Grid Generator</a></li>
                            <li><a href="#" className="hover:text-white">Cảnh báo sờ tay lên mặt</a></li>
                        </ul>
                    </div>
                </div>
                {/* Cột 5 */}
                <div>
                    <h3 className="text-white font-semibold">CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h3>
                    <div className=" text-gray-400 text-sm">
                        <p className="mt-2">Mã số thuế: 0109922901</p>
                        <p>Ngày thành lập: 04/03/2022</p>
                        <p>Lĩnh vực hoạt động: Giáo dục, công nghệ - lập trình. Chúng tôi tập trung xây dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt Nam.</p>
                    </div>
                </div>
            </div>


            <div className="flex max-w-8xl justify-between items-center mt-6 px-8  text-gray-400 text-sm pt-4 flex-col-reverse sm:flex-col-reverse md:flex-row">
                <p>© 2018 - 2025 F8. Nền tảng học lập trình hàng đầu Việt Nam</p>
                <div className=" flex gap-4 mb-4  ">
                    <FaYoutube className="text-red-500 text-2xl cursor-pointer w-8 h-8" />
                    <FaFacebook className="text-blue-500 text-2xl cursor-pointer w-8 h-8" />
                    <FaTiktok className="text-gray-300 text-2xl cursor-pointer w-8 h-8" />
                </div>
            </div>
        </footer>
    );
}
