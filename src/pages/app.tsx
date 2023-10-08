import { useState, useEffect, useMemo } from 'react';

import { useGetTickets } from '@/hooks/query-hooks';
import { ITickets } from '@/services/ticket-validation-scheme';

let renderCount = 0;

export function App() {
  console.log('[31m ------------ renderCount++ = ', renderCount++); //TODO - delete vvtu

  const [count, setCount] = useState(0);
  const result = useGetTickets();
  console.log('[33m result = ', result); //TODO - delete vvtu

  useEffect(() => {
    console.log('[33m result.hasNextPage = ', result.hasNextPage); //TODO - delete vvtu
    if (result.hasNextPage) {
      result.fetchNextPage();
    }
  }, [result]);

  const allPages = useMemo(() => {
    const arr: ITickets[] = [];

    for (const page of result.data?.pages ?? []) {
      console.log('[35m page = ', page); //TODO - delete vvtu
      arr.push(...page.tickets);
    }

    return arr;
  }, [result.data?.pages]);

  console.log('[33m allPages = ', allPages); //TODO - delete vvtu

  return (
    <div>
      <h1>Vite + React + Typescript +++</h1>
      <div className="card">
        <button
          onClick={async () => {
            setCount((c) => c + 1);
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
  );
}
