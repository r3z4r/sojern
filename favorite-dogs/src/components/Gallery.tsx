export type ImageDetails = {
  fileSizeBytes?: number;
  url: string;
};

const Gallery = ({ imageList ,toggleFav}: { imageList: ImageDetails[] | null , toggleFav:  (imageDetails : ImageDetails ) => void }) => (
  <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 p-5">
    {imageList &&
      imageList.map((imageDetails: ImageDetails) => (
        <div
            onClick={()=>toggleFav(imageDetails)}
          key={imageDetails.url}
          className="relative mx-auto overflow-hidden bg-no-repeat bg-cover max-w-xs z-0"
        >
          <img src={imageDetails.url} className="max-w-xs" alt="Dog Image" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
            <p className="opacity-0 hover:opacity-80 active:text-xl duration-300 absolute inset-0 z-10 flex justify-center items-center text-9xl text-white ">
              &#x2665;
            </p>
          </div>
        </div>
      ))}
  </div>
);

export default Gallery;
