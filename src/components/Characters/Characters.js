import React, { useEffect } from "react";

const API_URL = "https://rickandmortyapi.com/api/character/";
const useState = React.useState;
export default function Characters() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      const response = await fetch(API_URL);

      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Ops! Something went wrong");
      }

      const data = await response.json();
      console.log(data);
      setData(data.results);
      setIsLoading(false);
    };
    getCharacters().catch((error) => console.log(error));
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Characters:
      {data.map((d) => (
        <p>{d.name}</p>
      ))}
    </div>
  );
}
