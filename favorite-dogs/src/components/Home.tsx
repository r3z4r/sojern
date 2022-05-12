import { useEffect, useState } from "react";
import Gallery, { ImageDetails } from "./Gallery";
import Header from "./Header";

const constants = {
  numberOfPicsPerPage: 6,
  source: "https://random.dog/woof.json",
};
const Home = () => {
  const [imgList, setImgList] = useState<ImageDetails[] | null>(null);
  const fetchPics = async () => {
    const detailsData = [...Array(constants.numberOfPicsPerPage)].map(
      async (_, i) => {
        const preFetchData = await fetch(constants.source);
        return preFetchData.json();
      }
    );
    const imageList: ImageDetails[] = (await Promise.all(detailsData)).map(
      (data) => ({
        fileSizeBytes: data.fileSizeBytes,
        url: data.url,
      })
    );
    setImgList(imageList);
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <>
      <Header />
      <Gallery imageList={imgList} />
    </>
  );
};

export default Home;
