import { useSearchParams } from 'react-router-dom';

import { TRANSFER_PARAM } from '@/app-constants';
import { getNewSearcParams } from '@/utils/get-new-searc-params';

import checkIconChecked from './check-icon-checked.svg';
import checkIconEmpty from './check-icon-empty.svg';
import cssStyles from './transfer-filter.css?inline';

const ITEMS = [
  { value: -1, label: 'Все' },
  { value: 0, label: 'Бес пересадок' },
  { value: 1, label: '1 пересадка' },
  { value: 2, label: '2 пересадки' },
  { value: 3, label: '3 пересадки' },
];

export function TransferFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const transferParam000 = parseInt(searchParams.get(TRANSFER_PARAM) ?? '', 10);
  const transferParam = isNaN(transferParam000) ? -1 : transferParam000;

  function handleItemClicked(value: number) {
    const newParams = getNewSearcParams(searchParams);
    if (value === -1) {
      delete newParams[TRANSFER_PARAM];
    } else {
      newParams[TRANSFER_PARAM] = value.toFixed(0);
    }

    setSearchParams(newParams);
  }

  return (
    <>
      <style>{cssStyles}</style>

      <div className="layout panel-color-and-border">
        <div className="header">Количество пересадок</div>
        {ITEMS.map(({ value, label }) => (
          <div key={label} className="item-container" onClick={() => handleItemClicked(value)}>
            {transferParam === value ? (
              <img src={checkIconChecked} alt="icon checked" width="20px" height="20px" />
            ) : (
              <img src={checkIconEmpty} alt="icon checked" width="20px" height="20px" />
            )}
            <div className="item-text">{label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
