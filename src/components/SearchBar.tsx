// 'use client'
// import Image from "next/image";
// import { Search } from 'lucide-react';

// const SearchBar = () => {
//     return (
//         <div className="flex-row w-96">

//             <input

//                 type="text"
//                 placeholder="Tìm kiếm khóa học, bài viết, video, ..."
//                 className="w-full px-4 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search></Search>

//         </div>
//     );
// }
// export default SearchBar;

// 'use client'
// import Image from "next/image";
// import { Search } from 'lucide-react';

// const SearchBar = () => {
//     return (
//         <div className="relative justify-center items-center w-60 md:w-96 lg:w-96">
//             {/* <Search size={25} /> */}
//             <input
//                 type="text"
//                 className="w-full px-6 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Tìm kiếm khóa học, bài viết, video, ..."
//             />
//             <Search className="absolute mx-3 -my-8" size={25} />

//         </div>
//     );
// }
// export default SearchBar;


'use client';
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="relative flex justify-center items-center w-60 md:w-96 lg:w-96">
            <input
                type="text"
                className="w-full px-6 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 md:placeholder:text-transparent"
                placeholder="Tìm kiếm..."
                data-placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <span className="absolute w-full px-6 py-2 pl-10 text-gray-400 pointer-events-none hidden md:block">
                Tìm kiếm khóa học, bài viết, video, ...
            </span>
        </div>
    );
};

export default SearchBar;