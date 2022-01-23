import { useReducer, useState, useEffect } from "react";
import "./App.css";

function App({ user }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (user != null)
    return (
      <>
        <h1>{JSON.stringify(data)}</h1>
      </>
    );
  return (
    <>
      <h1>No data</h1>
    </>
  );
}

export default App;
