import { ChangeEvent, useRef, useState } from "react";
import "./index.css";


const cars = [
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png",
    name: "Abarth",
  },
  
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/noble.png",
    name: "Noble",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/opel.png",
    name: "Opel",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png",
    name: "Pagani",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png",
    name: "Panoz",
  },
  {
    logo: "https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png",
    name: "Perodua",
  },
  
  
  
];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    setIsOpen(!Boolean(isOpen) ? "open" : "");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCars = cars.filter(
    (car) =>
      search.length && car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav>
      <h2></h2>
      <div className="nav-items">
        
        <div className="wrapper">
          <div className={`search ${isOpen}`}>
            <input
              ref={inputRef}
              onChange={handleChange}
              placeholder="Find expenses"
              type="text"
            />
            <button
              onClick={handleClick}
              className={`nav-button uil uil-${isOpen ? "multiply" : "search"}`}
            ></button>
          </div>
          <div className={`items ${isOpen}`}>
            {Boolean(filteredCars.length) &&
              filteredCars?.map(
                (car, index) =>
                  index < 3 && <button key={car.name}>{car.name}</button>
              )}
          </div>
        </div>
        <button className="nav-button uil uil-bars"></button>
      </div>
    </nav>
  );
};