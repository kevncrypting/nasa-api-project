import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=3cRXJRsYkBMUMQQybBc18in0QHFKi9GEk1wzSuEJ&count=5"
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let handleCardLike = () => {
    console.log('User liked ')
  }

  return (
    <>
      <div>
        {images.map((image, index) => {
          return (
            <Card
              imageUrl={image.url}
              imageAltDescription={image.title}
              title={image.title}
              date={image.date}
              explanation={image.explanation}
              key={index}
              onCardLike={() => handleCardLike()}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default App;
