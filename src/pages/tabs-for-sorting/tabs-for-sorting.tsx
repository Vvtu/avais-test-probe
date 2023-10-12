import { useSearchParams } from 'react-router-dom';

import classNames from 'classnames';

import { SORTING_PARAM, ISortingParam } from '@/app-constants';
import { getNewSearcParams } from '@/utils/get-new-searc-params';

import cssStyles from './tabs-for-sorting.css?inline';

export function TabsForSorting() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortingParam = searchParams.get(SORTING_PARAM) ?? ISortingParam.cheep;

  function handleTabClick(choice: ISortingParam) {
    const newParams = getNewSearcParams(searchParams);
    switch (choice) {
      case ISortingParam.cheep: {
        delete newParams[SORTING_PARAM];
        break;
      }
      case ISortingParam.speed: {
        newParams[SORTING_PARAM] = ISortingParam.speed;
        break;
      }
      case ISortingParam.optimal: {
        newParams[SORTING_PARAM] = ISortingParam.optimal;
        break;
      }
      default:
        throw new Error(`Не может быть такого выбора choice = "${choice}"`);
    }
    setSearchParams(newParams);
  }

  return (
    <>
      <style>{cssStyles}</style>

      <div className="sort-tabs-group">
        <div
          className={classNames('firstTab', {
            activeFirstTab: sortingParam === ISortingParam.cheep,
          })}
          onClick={() => handleTabClick(ISortingParam.cheep)}
        >
          Самый дешевый
        </div>
        <div
          className={classNames('middleTab', {
            activeMiddleTab: sortingParam === ISortingParam.speed,
          })}
          onClick={() => handleTabClick(ISortingParam.speed)}
        >
          Самый быстрый
        </div>
        <div
          className={classNames('lastTab', {
            'active-lastTab': sortingParam === ISortingParam.optimal,
          })}
          onClick={() => handleTabClick(ISortingParam.optimal)}
        >
          Оптимальный
        </div>
      </div>
    </>
  );
}
