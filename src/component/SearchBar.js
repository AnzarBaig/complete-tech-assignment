// // SearchBar.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addSearchData } from "../features/serachData/searchData";
// import { addPexelData, clearPexelData } from "../features/imageMasonry/imageMasonry";
// import { Input, Button } from "@mantine/core";
// import axios from "axios"; // Import axios

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     setIsLoading(true); // Set loading state to true

//     try {
//       const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=80`, {
//         headers: {
//           Authorization: process.env.REACT_APP_API_KEY,
//         },
//       });

//       if (response.status === 200) {
//         const data = response.data;
//         dispatch(clearPexelData());

//         dispatch(addSearchData(searchTerm));
//         dispatch(addPexelData(data));
//       } else {
//         setError("Failed to fetch data");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching data");
//     } finally {
//       setIsLoading(false); // Set loading state to false
//     }
//   };
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };
//   return (
//     <div className="flex justify-center my-4 space-x-2">

//       <Input
//         size="lg"
//         placeholder="Search for images..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onKeyDown={handleKeyDown} 
//       />
//       <Button
//         color="dark"
//         variant="outline"
//         size="lg"
//         onClick={handleSearch}
//         disabled={isLoading}
//       >
//         {isLoading ? "Searching..." : "Search"}
//       </Button>
//       {error && <p className="text-red-500">{error}</p>}

//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchData } from "../features/serachData/searchData";
import { addPexelData, clearPexelData } from "../features/imageMasonry/imageMasonry";
import { Input, Button } from "@mantine/core";
import axios from "axios";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=80`, {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        dispatch(clearPexelData());
        dispatch(addSearchData(searchTerm));
        dispatch(addPexelData(data));
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      setError("An error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center my-4 space-x-2">
      <Input
        size="lg"
        placeholder="Search for images..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      <Button
        color="dark"
        variant="outline"
        size="lg"
        onClick={handleSearch}
        disabled={ !searchTerm || isLoading}
      >
        {isLoading ? <Skeleton width={80} height={32} /> : "Search"}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SearchBar;
