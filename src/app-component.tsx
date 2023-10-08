import { useState } from 'react';

import { getTickets } from '@/services/get-id';
import { delay } from '@/utils/delay';
import { Wrappers } from '@/wrappers/wrappers';

export function App() {
  const [count, setCount] = useState(0);

  async function tt1() {
    const t1 = await delay(1000);
    console.log('[33m t1 = ', t1); //TODO - delete vvtu
  }

  return (
    <Wrappers>
      <div>
        <h1>Vite + React + Typescript +++</h1>
        <div className="card">
          <button
            onClick={async () => {
              setCount((c) => c + 1);
              console.log('[33m tt1() = ', tt1()); //TODO - delete vvtu
              const tickets = await getTickets('aaa');
              console.log('[33m tickets = ', tickets); //TODO - delete vvtu
            }}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </Wrappers>
  );
}
