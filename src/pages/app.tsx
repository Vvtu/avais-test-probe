import { useState, useEffect, useMemo } from 'react';

import { useGetTickets } from '@/hooks/query-hooks';
import Logo from '@/pages/icons/logo.svg';
import { ITickets } from '@/services/ticket-validation-scheme';

export function App() {
  const [count, setCount] = useState(0);
  const result = useGetTickets();
  console.log('[31m ----------- result = ', result); //TODO - delete vvtu

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

  const pagesSortedAndFiltered = useMemo(() => {
    return [...allPages].sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }

      return -1;
    });
  }, [allPages]);

  console.log('[33m allPages = ', allPages); //TODO - delete vvtu
  console.log('[33m pagesSortedAndFiltered = ', pagesSortedAndFiltered); //TODO - delete vvtu

  return (
    <div style={{ backgroundColor: '#F3F7FA', minHeight: 'calc(100vh - 100px)' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={Logo} alt="Logo icon" height={'60px'} />
      </div>
      <div style={{ height: 16, margin: '8px' }}>
        {(result.isFetching || result.isFetchingNextPage) && <div>Loading...</div>}
      </div>

      <h1 style={{ marginTop: 40 }}>Vite + React + Typescript +++</h1>
      <div className="card">
        <button
          onClick={async () => {
            setCount((c) => c + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}
