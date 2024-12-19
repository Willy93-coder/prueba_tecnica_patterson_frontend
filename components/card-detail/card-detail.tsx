type CardDetailProps = {
  name: string;
  image: string;
  origin: string;
  gender: string;
  species: string;
  status: string;
  firstEpisode: string;
};

export function CardDetail({
  name,
  image,
  origin,
  gender,
  species,
  status,
  firstEpisode,
}: CardDetailProps) {
  return (
    <section className="border border-black p-6">
      <div className="flex items-center gap-x-4 mb-4">
        <img
          className="rounded-full w-[50px]"
          src={image}
          alt={`${name} character from Rick & Morty`}
        />
        <h3>{name}</h3>
      </div>
      <p className="mb-3">
        <span className="font-semibold">Origin: </span>
        {origin}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Gender: </span>
        {gender}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Species: </span>
        {species}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Status: </span>
        {status}
      </p>
      <p className="mb-3">
        <span className="font-semibold">First Episode: </span>
        {firstEpisode}
      </p>
    </section>
  );
}
