import { useState, useEffect } from 'react';

export default function UseEffectFectchApiDemo() {
  const [forecasts, setForecasts] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setForecasts)
      .catch(console.error);
  }, []);

  return (<>
    <h3>UseEffectFecthApiDemo</h3>
    <div>{ JSON.stringify(forecasts, null, 2) }</div>
  </>);
}
