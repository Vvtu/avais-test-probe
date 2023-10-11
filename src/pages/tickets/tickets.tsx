import { useEffect, useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import { SORTING_PARAM, TRANSFER_PARAM, ISortingParam } from '@/app-constants';
import { useGetTickets } from '@/hooks/query-hooks';
import { ITicket } from '@/services/ticket-validation-scheme';

import { OneTicket } from './one-ticket';
import cssStyles from './tickets.css?inline';

export function Tickets() {
  const [searchParams] = useSearchParams();

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

  const transferParam000 = parseInt(searchParams.get(TRANSFER_PARAM) ?? '', 10);
  const transferParam = isNaN(transferParam000) ? -1 : transferParam000;
  const sortingParam = searchParams.get(SORTING_PARAM) ?? ISortingParam.cheep;

  const pagesSortedAndFiltered = useMemo(() => {
    return [...allPages]
      .filter((item) => {
        if (transferParam === -1) {
          return true;
        } else {
          const numberOfStops = item.segments[0].stops.length;

          return numberOfStops === transferParam;
        }
      })
      .sort((a, b) => {
        switch (sortingParam) {
          case ISortingParam.cheep:
            if (a.price > b.price) {
              return 1;
            } else {
              if (a.price < b.price) {
                return -1;
              } else {
                if (a.segments[0].duration > b.segments[0].duration) {
                  return 1;
                } else {
                  return -1;
                }
              }
            }

          case ISortingParam.speed:
            if (a.segments[0].duration > b.segments[0].duration) {
              return 1;
            } else {
              if (a.segments[0].duration < b.segments[0].duration) {
                return -1;
              } else {
                if (a.price > b.price) {
                  return 1;
                } else {
                  return -1;
                }
              }
            }
          case ISortingParam.optimal: {
            return 1;
          }
          default:
            return 1;
        }
      });
  }, [allPages, sortingParam, transferParam]);

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
