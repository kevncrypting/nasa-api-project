interface CardProps {
  imageUrl: string;
  imageAltDescription: string;
  title: string;
  date: string;
  explanation: string;
  onCardLike: () => void;
}

const Card = ({ imageUrl, imageAltDescription, title, date, explanation, onCardLike }: CardProps) => {
  return (
    <div className="flex flex-col bg-blue-200 items-center md:w-5/6">
      <img
        src={imageUrl}
        alt={imageAltDescription}
        className="object-fill"
      />
      <section className="flex flex-col items-center gap-2">
        <h3 className="font-bold text-2xl">{title}</h3>
        <span className="italic">Captured on {date}</span>
        <p>{explanation}</p>
        <button onClick={onCardLike}></button>
      </section>
    </div>
  );
};

export default Card;
