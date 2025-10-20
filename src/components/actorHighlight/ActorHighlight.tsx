import "./ActorHighlight.css";

type ActorHighlightProps = {
  name: string;
  photo: string;
};

const ActorHighlight = ({ name, photo }: ActorHighlightProps) => {
  return (
    <div className="actor-highlight">
      <img src={photo} alt={name} className="actor-photo" />
      <h2 className="actor-name">{name}</h2>
    </div>
  );
};

export default ActorHighlight;
