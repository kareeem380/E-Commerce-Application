import { useRef } from "react";
import logo from '../public/logo.png';
import Image from "next/image";;

const SearchBar = () => {
    

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

    return (
        
        <div className="items-center px-9 flex justify-center" >
            <style jsx>{`
        .container {
          margin: 50px;
        }
        Image {
            justify-content: center
            margin-left: 10px;
        }
      `}</style>
            
          <div className="logo relative mr-3 ml-1 mt-5"><Image className="relative mr-3 ml-1 mt-5 logo"
          
      src={logo}
      alt="Picture of the author"
      
      width={150}
      height={50}/></div>
          
        
            <div className="relative ">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-80 w-90 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search Here..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    );
}

export default SearchBar