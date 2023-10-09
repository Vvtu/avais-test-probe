import { useState, useEffect, useMemo } from 'react';

import { useGetTickets } from '@/hooks/query-hooks';
import Logo from '@/pages/icons/logo.svg';
import { ITickets } from '@/services/ticket-validation-scheme';

import cssStyles from './app.css?inline';

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

  const isLoading = result.isFetching || result.isFetchingNextPage;

  console.log('[33m allPages = ', allPages); //TODO - delete vvtu
  console.log('[33m pagesSortedAndFiltered = ', pagesSortedAndFiltered); //TODO - delete vvtu

  return (
    <>
      <style>{cssStyles}</style>
      <div className="app-container">
        <div style={{ height: 0 }}>&nbsp;</div>
        <div className="logo-container">
          <img
            src={Logo}
            alt="Logo icon"
            height={'60px'}
            // className={isLoading ? 'logo-animate-loading' : ''}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="filters panel-color-and-border"></div>
            <div className="filters panel-color-and-border"></div>
          </div>
        </div>

        <h1 style={{ marginTop: 40, color: 'black' }}>Vite + React + Typescript +++</h1>
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
    </>
  );
}
