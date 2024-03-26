import { useNavigate, useParams } from "react-router-dom";
import Tablet from "../components/Tablet";
import { FaArrowLeft } from "react-icons/fa";
import { CardProp } from "../types/types";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/data";

type DataArray = CardProp[] | [];

const Country = () => {
  const countryName = useParams();
  const [data, setData] = useState<DataArray>([]);

  let language = "";
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchDataForComponent() {
      setData(await fetchData());
    }
    fetchDataForComponent();
  }, []);

  const borderArr: CardProp[] = [];

  if (data.length < 1)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      </div>
    );

  const myData = data.filter((data: CardProp) => {
    return data.name === countryName.name;
  });

  const first = myData[0];
  const { languages, borders } = first;
  if (languages.length > 1) {
    languages.map((lang) => {
      return (language += lang.name + " ");
    });
  } else {
    language += languages[0].name;
  }
  borders?.forEach((element: string) => {
    const arr = data.filter((item: CardProp) => {
      return item.alpha3Code === element;
    });
    return borderArr.push(arr[0]);
  });

  return (
    <div className="px-6 mt-8">
      <div className="my-4 cursor-pointer" onClick={() => navigate("/")}>
        <FaArrowLeft />
      </div>
      <div className="bg-base-100 shadow-xl h-[20rem] rounded-sm flex justify-between items-center flex-wrap md:flex-nowrap">
        <figure className="h-full md:basis-[40%] basis-[1005]">
          <img
            src={myData[0].flag}
            className="w-full h-full object-cover"
            alt="Movie"
          />
        </figure>
        <div className="card-body max-w-xl mx-auto">
          <div className="flex justify-between flex-wrap gap-2 sm:flex-nowrap">
            <article>
              <h2 className="font-bold text-lg">{myData[0].name}</h2>
              <p className="text-sm font-bold mt-2">
                Native Name:{" "}
                <span className="font-normal">{myData[0].nativeName}</span>
              </p>
              <p className="text-sm font-bold mt-2">
                Population:{" "}
                <span className="font-normal">{myData[0].population}</span>
              </p>
              <p className="text-sm font-bold mt-2">
                Region: <span className="font-normal">{myData[0].region}</span>
              </p>
              <p className="text-sm font-bold mt-2">
                Sub Region:{" "}
                <span className="font-normal">{myData[0].subregion}</span>
              </p>
              <p className="text-sm font-bold mt-2">
                Capital:{" "}
                <span className="font-normal">{myData[0].capital}</span>
              </p>
            </article>
            <article>
              <p className="text-sm font-bold mt-2">
                Top Level Domain:{" "}
                <span className="font-normal">{myData[0].topLevelDomain}</span>
              </p>
              <p className="text-sm font-bold mt-2">
                Currencies:{" "}
                <span className="font-normal">
                  {myData[0].currencies[0].code}
                </span>
              </p>
              <p className="text-sm font-bold mt-2">
                Languages: <span className="font-normal">{language}</span>
              </p>
            </article>
          </div>
          <div className="mt-6">
            {borders && (
              <div className="flex gap-1 font-bold md:flex-nowrap flex-wrap">
                Border Countries:{" "}
                <div className="flex gap-2 flex-wrap">
                  {borderArr.map((border, i) => (
                    <Tablet value={border} key={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
