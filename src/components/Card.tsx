interface CardProps {
  imageUrl: string;
  title: string;
  onPictureClick: () => void;
}

const Card = ({ imageUrl, title, onPictureClick }: CardProps) => {
  return (
    <div className="flex flex-col bg-red-500 rounded-3xl w-64">
      <img
        src={imageUrl}
        alt="This is a picture"
        onClick={onPictureClick}
        className="object-contain h-64 w-64"
      />
      <section>
        <h3>{title}</h3>
        <p>this is a card</p>
      </section>
    </div>
  );
};

export default Card;
