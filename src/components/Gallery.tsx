import { Carousel } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export function Gallery() {
  return (
    <Carousel 
      className="rounded-xl relative" 
      autoplay={false} 
      nonce={undefined} 
      loop={false} 
      onResize={undefined} 
      onResizeCapture={undefined} 
      autoplayDelay={undefined}
      nextArrow={NextButton}
      prevArrow={PrevButton}
      navigation={Navigation}
    >
      <img
        src="/assets/images/img1.jpg"
        alt="image 1"
        className="w-auto h-[500px] mx-auto rounded-lg" 
      />
      <img
        src="/assets/images/img2.jpg"
        alt="image 2"
        className="w-auto h-[500px] mx-auto rounded-lg "
      />
      <img
        src="/assets/images/img3.jpg"
        alt="image 3"
        className="w-auto h-[500px] mx-auto rounded-lg " 
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
        className="w-auto h-[500px] mx-auto rounded-lg mb-5"
      />
    </Carousel>
  );
}

function NextButton({ handleNext, activeIndex }: { handleNext: () => void; activeIndex: number }) {
  const isLastPhoto = activeIndex === 11 - 1;

  return (
    <>
      <button
        onClick={handleNext}
        className={`absolute right-0 top-1/2 z-10 w-10 h-10 text-black rounded-full outline-none focus:outline-none transform -translate-y-1/2 ${
          isLastPhoto ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
        disabled={isLastPhoto}
      >
        <ChevronRightIcon className="w-10 h-10" />
      </button>
    </>
  );
}

function PrevButton({ handlePrev }: { handlePrev: () => void }) {
  return (
    <button 
      onClick={handlePrev} 
      className="absolute left-0 top-1/2 z-10 w-10 h-10 text-black rounded-full outline-none focus:outline-none transform -translate-y-1/2"
    >
      <ChevronLeftIcon className="w-10 h-10" />
    </button>
  );
}

const Navigation = ({ setActiveIndex, activeIndex, length }: { setActiveIndex: (index: number) => void, activeIndex: number, length: number }) => (
  <div className="absolute bottom-1 left-2/4 z-50 flex -translate-x-2/4 gap-2">
    {new Array(length).fill("").map((_, i) => (
      <span
        key={i}
        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
          activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
        } hover:opacity-75`}
        onClick={() => setActiveIndex(i)}
      />
    ))}
  </div>
);

export default Gallery;
