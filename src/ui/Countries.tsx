import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { fetchData } from "../utils/data";
import Card from "../components/Card";
import { Link } from "react-router-dom";

import { CardProp } from "../types/types";

const Countries = () => {
  const [data, setData] = useState([]);
  const [inputFilter, setInputFilter] = useState("");

  const [fill, setFill] = useState([]);
  const display = data.slice(0, 8);
  const filterValue = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    async function fetchDataForComponent() {
      setData(await fetchData());
    }
    fetchDataForComponent();
  }, []);

  function fetchOne(value: string) {
    return data.filter((country: CardProp) => {
      return country.name.toLowerCase().includes(value.toLowerCase());
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputFilter(e.target.value);
    const filteredData = fetchOne(e.target.value);
    setFill(filteredData);
  }

  function firstFilter(dataVal: string) {
    return data.filter((country: CardProp) => {
      return country.region.toLowerCase() === dataVal.toLowerCase();
    });
  }

  function handleFilter(dataVal: string) {
    setFill(firstFilter(dataVal));
  }

  return (
    <>
      <div className="flex flex-wrap justify-center sm:flex-nowrap gap-4 px-6 my-8 sm:justify-between">
        <label className=" input flex items-center gap-2 h-[2rem] bg-[hsl(0, 0%, 100%)] focus:outline-offset-0 focus:outline-0 shade rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Search for a country"
            value={inputFilter}
            onChange={handleChange}
          />
        </label>

        <div className="">
          <div className="dropdown w-48">
            <div
              tabIndex={0}
              role="button"
              className="mb-1 py-2 px-3 flex justify-between items-center font-semibold shade bg-[hsl(0, 0%, 100%)] w-full text-xs"
            >
              Filter by Region
              <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] rounded-none menu px-2 shadow bg-base-100 w-full"
            >
              {filterValue.map((val) => (
                <li key={val} onClick={() => handleFilter(val)}>
                  <a className="p-0 py-1 hover:bg-[rgba(255,255,255,.6)] rounded-none">
                    {val}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section
        className={`cardItem px-6 mb-10 ${fill.length === 1 ? "max-w-72" : ""}`}
      >
        {(fill.length > 0 ? fill : display).map((country: CardProp) => (
          <Link to={`/${country.name}`} key={country.name}>
            <Card country={country} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Countries;
