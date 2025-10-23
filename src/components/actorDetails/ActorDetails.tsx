import "./ActorDetails.css";

type Actor = {
  name: string;
  photo: string;
  bio?: string;
  nationality?: string;
  birthYear?: number;
};

type ActorDetailsProps = {
  actor: Actor;
};

const ActorDetails = ({ actor }: ActorDetailsProps) => {
  return (
    <>
      <div className="actor-details">
        {actor.birthYear && (
          <p>
            <strong>Année de naissance :</strong> {actor.birthYear}
          </p>
        )}
        {actor.nationality && (
          <p>
            <strong>Nationalité :</strong> {actor.nationality}
          </p>
        )}
        {actor.bio && <p className="actor-details-bio">{actor.bio}</p>}
      </div>
    </>
  );
};

export default ActorDetails;
