import Gallery from '../components/Gallery';
import { useEffect } from 'react';
// import {
//   Carousel,
//   initTE,
// } from "tw-elements";

function GalleryWrapper() {
    useEffect(() => {
      const use = async () => {
        (await import('tw-elements')).default;
        // initTE({ Carousel });
      };
      use();
    }, []);
  
    return <Gallery/>;
  }
  
  export default GalleryWrapper;