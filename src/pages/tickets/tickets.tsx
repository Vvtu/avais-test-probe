import { useEffect, useMemo } from 'react';

import { useGetTickets } from '@/hooks/query-hooks';
import { ITicket } from '@/services/ticket-validation-scheme';

import { OneTicket } from './one-ticket';
import cssStyles from './tickets.css?inline';

export function Tickets() {
  const result = useGetTickets();
  console.log('[31m ----------- result = ', result); //TODO - delete vvtu

  useEffect(() => {
    console.log('[33m result.hasNextPage = ', result.hasNextPage); //TODO - delete vvtu
    if (result.hasNextPage) {
      result.fetchNextPage();
    }
  }, [result]);

  const allPages = useMemo(() => {
    const arr: ITicket[] = [];

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
      {pagesSortedAndFiltered[0] && <OneTicket ticket={pagesSortedAndFiltered[0]} />}
      <div className="panel-color-and-border">2424232</div>
      <div className="panel-color-and-border">2424232</div>
      <div className="panel-color-and-border">2424232</div>
    </>
  );
}
