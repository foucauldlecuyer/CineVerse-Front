import "./ActorDetails.css";

type Actor = {
  name: string;
  photo: string;
  bio?: string;
  nationality?: string;
  birthDate?: string; // yyyy-mm-dd
  deathDate?: string; // yyyy-mm-dd
};

type ActorDetailsProps = {
  actor: Actor;
};

const ActorDetails = ({ actor }: ActorDetailsProps) => {
  return (
    <div className="actor-details">
      {actor.birthDate && (
        <p>
          <strong>Date de naissance :</strong> {actor.birthDate}
        </p>
      )}
      {actor.deathDate && (
        <p>
          <strong>Date de décès :</strong> {actor.deathDate}
        </p>
      )}
      {actor.nationality && (
        <p>
          <strong>Lieu de naissance :</strong> {actor.nationality}
        </p>
      )}
      {actor.bio && <p className="actor-details-bio">{actor.bio}</p>}
    </div>
  );
};

export default ActorDetails;
