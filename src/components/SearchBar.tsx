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

'use client'
import Image from "next/image";
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="relative w-96">
            <Search className="absolute mx-3 my-8" size={25} />
            <input
                type="text"
                placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                className="w-full mt-6 px-6 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
export default SearchBar;