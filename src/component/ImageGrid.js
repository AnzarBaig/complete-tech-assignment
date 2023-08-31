import React, {useState} from "react";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css"; // Import the Masonry component
import ImageCard from "./ImageCard";
import { SegmentedControl } from "@mantine/core";
import "../styles.css";

const ImageGrid = () => {
    const searchData = useSelector((state) => state.imageMasonry.imageMasonry[0]?.data.photos);
    const [gridColumns, setGridColumns] = useState(4);
    const breakpointColumnsObj = {
      default: gridColumns,
      1100: gridColumns,
      700: gridColumns ,
      500: gridColumns
    };
    const segmentedControlStyles = {
        root: {
          backgroundColor: 'white',
        },
        control: {
          margin: '5px',
          backgroundColor: '#f8f9fa',
          border: 'none',
          borderRadius: '0.75rem',
          outline: 'none',
        },
        controlActive: {
          backgroundColor: '#e2e3e8',
        },
      };
    return (
      <div className="image-grid-container">
        <div className="absolute top-4 right-4 z-10">
          {searchData && <SegmentedControl
            size="md"
            radius="md"
            color="indigo"
            value={gridColumns}
            onChange={(value) => setGridColumns(value)}
            transitionDuration={200}
            transitionTimingFunction="linear"
            styles={segmentedControlStyles}
            className="shadow-[rgba(0,_0,_0,_0.3)_0px_3px_5px]"
            data={[
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" },
            ]}
          />}
        </div>
        
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {searchData?.map((data) => (
            <div key={data.id} className="my-masonry-grid_item">
              <ImageCard data={data} />
            </div>
          ))}
        </Masonry>
      </div>
    );
  };
  

export default ImageGrid;
