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
  function handleOnClick() {
    setShowMoreTicketsIndex(showMoreTicketsIndex + PAGE_SIZE);
  }

  return (
    <>
      <style>{cssStyles}</style>
      <button
        className={classNames('buttonContainer', { disabled: nextPageLength <= 0 })}
        onClick={handleOnClick}
      >
        {nextPageLength <= 0 ? 'Это всё. Больше нету' : `Показать еще ${nextPageLength} билетов!`}
      </button>
    </>
  );
});
