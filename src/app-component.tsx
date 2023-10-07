import { useState } from 'react';

import { Wrappers } from '@/wrappers/wrappers';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrappers>
      <div>
        <h1>Vite + React + Typescript +++</h1>
        <div className="card">
          <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </Wrappers>
  );
}