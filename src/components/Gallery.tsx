import { Carousel } from "@material-tailwind/react";

export function Gallery() {
  return (
    <Carousel className="rounded-xl" autoplay nonce={undefined} loop={true} onResize={undefined} onResizeCapture={undefined} autoplayDelay={3000}>
      <img
        src="/assets/images/img1.jpg"
        alt="image 1"
        className="w-auto h-[500px]  mx-auto rounded-lg carousel-fade-animation" 
      />
      <img
        src="/assets/images/img2.jpg"
        alt="image 2"
        className="w-auto h-[500px] mx-auto rounded-lg carousel-fade-animation carousel-fade-animation"
      />
      <img
        src="/assets/images/img3.jpg"
        alt="image 3"
        className="w-auto h-[500px] mx-auto rounded-lg carousel-fade-animation" 
      />
        <img
        src="/assets/images/img4.jpg"
        alt="image 4"
        className="w-auto h-[500px] mx-auto rounded-lg" 
      />
        <img
        src="/assets/images/img5.jpg"
        alt="image 5"
        className="w-auto h-[500px] mx-auto rounded-lg" 
      />
        <img
        src="/assets/images/img6.jpg"
        alt="image 6"
        className="w-auto h-[500px] mx-auto rounded-lg" 
      />
        <img
        src="/assets/images/img7.jpg"
        alt="image 7"
        className="w-auto h-[500px] mx-auto rounded-lg" 
      />
        <img
        src="/assets/images/image8.jpg"
        alt="image 8"
        className="w-auto h-[500px] mx-auto rounded-lg" 
      />
        <img
        src="/assets/images/img9.jpg"
        alt="image 9"
        className="w-auto h-[500px] mx-auto rounded-lg"
      />
        <img
        src="/assets/images/img10.jpg"
        alt="image 10"
        className="w-auto h-[500px] mx-auto rounded-lg"
      />
        <img
        src="/assets/images/img11.jpg"
        alt="image 11"
        className="w-auto h-[500px] mx-auto rounded-lg carousel-fade-animation"
      />
    </Carousel>
  );
}

export default Gallery;
