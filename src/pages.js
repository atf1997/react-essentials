import { useState, useEffect } from "react";

export function Home({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!login) {
      return;
    }
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>loading ...</h1>;
  if (error) return <h1>error happened</h1>;
  if (data != null)
    return (
      <>
        <h1>{data.name}</h1>
        <img src={data.avatar_url} alt={data.login} />
      </>
    );
  return (
    <>
      <h1>No data</h1>
    </>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
export function Support() {
  return (
    <div>
      <h1>Support</h1>
    </div>
  );
}
