
import React ,{useState,useEffect} from "react";
import ImageCard from "./Components/ImageCard";
import SearchImage from "./Components/SearchImage";
import Footer from "./Components/Footer";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('flower'); 

  

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {setImages(data.hits)
    setIsLoading(false)})
    .catch(err=> console.log(err));
  },[term]);

  return (
    <>
    <div className="contianer mx-auto bg-gray-100 min-h-screen pb-8">
      <SearchImage searchText={text=>setTerm(text)}/>
      {!isLoading && images.length===0 && <h1 className="text-6xl text-center mx-auto my-40">Sorry Nothing Found :(</h1>}
     {isLoading ? <h1 className="text-6xl text-center mx-auto ">Loading.....</h1>:<div className="w-4/5 mx-auto grid md:grid-cols-3 gap-4">
       {images.map(image=>
         <ImageCard key={image.id} image={image}/>
       )}
     </div>}
    </div>
    <Footer/>
    </>
  );
}

export default App;
