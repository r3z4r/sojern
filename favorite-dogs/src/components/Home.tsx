import {useEffect, useState} from "react";
import Gallery, {ImageDetails} from "./Gallery";
import Header from "./Header";
import useLocalStorage from "../hooks/useLocalStorage";

const constants = {
    numberOfPicsPerPage: 6,
    source: "https://random.dog/woof.json",
};
const Home = () => {
    const [fav, setFav] = useLocalStorage('favorites', [])
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
        fetchPics()
    }, []);

    const addToFav = (imageDetails: ImageDetails) => {
        setFav((prev: any) => [...prev, imageDetails])
    }

    return (
        <>
            <Header/>
            <Gallery imageList={imgList} toggleFav={addToFav}/>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                    className="absolute p-3 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
                    onClick={fetchPics}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="h-7 h-7" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path xmlns="http://www.w3.org/2000/svg"  d="M400.813,169.581c-2.502-4.865-14.695-16.012-35.262-5.891  c-20.564,10.122-10.625,32.351-10.625,32.351c7.666,15.722,11.98,33.371,11.98,52.046c0,65.622-53.201,118.824-118.828,118.824  c-65.619,0-118.82-53.202-118.82-118.824c0-61.422,46.6-111.946,106.357-118.173v30.793c0,0-0.084,1.836,1.828,2.999  c1.906,1.163,3.818,0,3.818,0l98.576-58.083c0,0,2.211-1.162,2.211-3.436c0-1.873-2.211-3.205-2.211-3.205l-98.248-57.754  c0,0-2.24-1.605-4.23-0.826c-1.988,0.773-1.744,3.481-1.744,3.481v32.993c-88.998,6.392-159.23,80.563-159.23,171.21  c0,94.824,76.873,171.696,171.693,171.696c94.828,0,171.707-76.872,171.707-171.696  C419.786,219.788,412.933,193.106,400.813,169.581z"/>
                </svg>
            </button>
        </>
    );
};

export default Home;
