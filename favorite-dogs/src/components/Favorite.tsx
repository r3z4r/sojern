import Header from "./Header";
import Gallery, {ImageDetails} from "./Gallery";
import useLocalStorage from "../hooks/useLocalStorage";

const Favorite = () => {
    const[fav,setFav] = useLocalStorage('favorites',[])
    const removeFromFav = (imageDetails : ImageDetails)=>{
        setFav((prev: any)=>{
            return prev.filter((item: ImageDetails)=>item.url!==imageDetails.url)
            }
        )
    }
  return (
    <>
      <Header />
        <Gallery imageList={fav} toggleFav={removeFromFav} />
    </>
  );
};

export default Favorite;
