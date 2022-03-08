import { useState } from 'react';

function input() {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [name, setName] = useState('');

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <button onClick={() => setDisplayMessage(true)}>Submit</button>

      {displayMessage && <p>{`Hello, ${name}!`}</p>}
    </div>
  );
}

export default input;
