import { useEffect, useMemo } from 'react';

import classNames from 'classnames';

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

  // const isLoading = result.isFetching || result.isFetchingNextPage;

  console.log('[33m allPages = ', allPages); //TODO - delete vvtu
  console.log('[33m pagesSortedAndFiltered = ', pagesSortedAndFiltered); //TODO - delete vvtu

  const ticketsToShow = pagesSortedAndFiltered?.slice(0, 5) ?? [];

  return (
    <>
      <style>{cssStyles}</style>
      {/* <div className={classNames('tickets-container', { 'animate-loading': isLoading })}> */}
      <div className="tickets-container">
        {ticketsToShow.map((ticket) => (
          <OneTicket ticket={ticket} key={ticket.carrier} />
        ))}
      </div>
    </>
  );
}
