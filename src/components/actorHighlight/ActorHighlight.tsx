import "./ActorHighlight.css";

type ActorHighlightProps = {
  photo: string;
};

const ActorHighlight = ({ photo }: ActorHighlightProps) => {
  return (
    <div className="actor-highlight">
      <img src={photo} alt="" className="actor-highlight-img" />
    </div>
  );
};

export default ActorHighlight;
