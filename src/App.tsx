import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  let handleClick = () => {
    console.log(`Picture was clicked!`);
  };

  const [imageObject, setImageObject] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=WvDugZQIVEQspCU2bZxy4aVoOpfksRsaUfTlC7d9kt4&query=space&order_by=popular&page=1&per_page=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageObject(data.results);
        console.log(imageObject);
      });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
        {imageObject.forEach((image) => {
          <Card
            imageUrl={image.urls.small}
            title={image.description}
            onPictureClick={() => handleClick()}
          />;
        })}
    </>
  );
}

export default App;
