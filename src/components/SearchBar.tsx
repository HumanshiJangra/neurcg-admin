import { SearchIcon } from "@/utils/svgIcons";
import React from 'react';

const SearchBar = () => {
    return (
        <div className='w-[276px]'>
            <label htmlFor="" className='relative flex w-full '>
            <input type="search" name="" id="" placeholder="Search" 
            className='placeholder:text-[#6B6B6B] w-full px-5 pl-[50px] focus-visible:outline-none bg-[#F5F7FA] rounded-r-none rounded-l-[8px] py-[8px] h-[46px] border border-r-0 border-[#eb823c33]  '/>
            <span className='absolute left-5 top-[15px] '><SearchIcon /> </span>
            <button className='bg-[#E87223] rounded-lg text-white px-5 text-sm h-[46px] ml-[-5px]'>Go</button>
            </label>
        </div>
    );
}

export default SearchBar;