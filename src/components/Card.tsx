const Card = ({ country }: any) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-md">
      <figure className="h-[10rem]">
        <img
          src={country.flag}
          className="w-full h-full object-cover"
          alt="Shoes"
        />
      </figure>
      <div className="card-body -mt-4">
        <h2 className="font-bold text-lg">{country.name}</h2>
        <p className="text-sm font-bold">
          Population: <span className="font-normal">{country.population}</span>
        </p>
        <p className="text-sm font-bold">
          Region: <span className="font-normal">{country.region}</span>
        </p>
        <p className="text-sm font-bold">
          Capital: <span className="font-normal">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
