import React,{useState} from "react";
import ImageViewer from "react-simple-image-viewer";


// Components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () =>{
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/8/100148/df39feb89c843dde2260bd6a7b0dcf2d.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/100148/dea1f8e1bc5b7fe258483f4641b20a47.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/100148/e39211891d899b97996275e609f60064.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/100148/cff6cde47dd8388fe7ee76d4d00b821b.jpg"
]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

    return(
        <>
            {isMenuOpen && (
                <ImageViewer
                src={ photos }
                currentIndex={ CurrentImg }
                disableScroll={false}
                onClose={ closeViewer }
                />
            )}
            <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                <PhotoCollection image={photo} openViewer={openViewer} />
                ))}
          </div>
        </>
    )
}

export default Photos;