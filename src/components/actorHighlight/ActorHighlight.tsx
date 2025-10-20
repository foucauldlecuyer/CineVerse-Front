import "./ActorHighlight.css";

type ActorHighlightProps = {
  name: string;
  photo: string;
};

const ActorHighlight = ({ name, photo }: ActorHighlightProps) => {
  return (
    <div className="actor-highlight">
      <h2 className="actor-name">{name}</h2>
      <img src={photo} alt={name} className="actor-photo" />
    </div>
  );
};

export default ActorHighlight;
