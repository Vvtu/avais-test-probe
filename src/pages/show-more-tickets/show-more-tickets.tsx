import React from 'react';

import classNames from 'classnames';

import { PAGE_SIZE } from '@/app-constants';

import cssStyles from './show-more-tickets.css?inline';

export const ShowMoreTickets = React.memo(function ({
  showMoreTicketsIndex,
  setShowMoreTicketsIndex,
  nextPageLength,
}: {
  showMoreTicketsIndex: number;
  setShowMoreTicketsIndex: (n: number) => void;
  nextPageLength: number;
}) {
  console.log('[33m showMoreTicketsIndex = ', showMoreTicketsIndex); //TODO - delete vvtu

  function handleOnClick() {
    setShowMoreTicketsIndex(showMoreTicketsIndex + PAGE_SIZE);
  }

  return (
    <>
      <style>{cssStyles}</style>
      <button
        className={classNames('button-container', { disabled: nextPageLength <= 0 })}
        onClick={handleOnClick}
      >
        {nextPageLength <= 0 ? 'Это все билеты' : `Показать еще ${nextPageLength} билетов!`}
      </button>
    </>
  );
});
