import { useEffect } from "react";
import CatCard from "./components/CatCard";
import { getCatAPI } from "./API/catAPI";
import { useState } from "react";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    console.log("test");
    getCatAPI().then((res) => {
      setCats(res);
    });
  }, []);

  return (
    <main className="w-screen p-5 h-screen bg-red-200 flex flex-col">
      <h1 className="font-bold text-9xl text-blue-100 drop-shadow-md">
        CATAPI
      </h1>

      <section className="flex-1 min-h-0 overflow-y-auto-auto flex flex-wrap gap-5">
        {cats?.map((cat) => (
          <CatCard key={cat.id} data={cat} />
        ))}
      </section>
    </main>
  );
}

export default App;
