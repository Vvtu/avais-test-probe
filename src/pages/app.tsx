import Logo from '@/pages/icons/logo.svg';

import cssStyles from './app.module.css';
import { TabsForSorting } from './tabs-for-sorting';
import { Tickets } from './tickets';
import { TransferFilter } from './transfer-filter';

export function App() {
  return (
    <>
      <div className={cssStyles['app-container']}>
        <div className={cssStyles.height0}>&nbsp;</div>
        <div className={cssStyles['logo-container']}>
          <img src={Logo} alt="Logo icon" width="82" height="89" />
        </div>
        <div className={cssStyles['tickets-container']}>
          <div className={cssStyles['tickets-subcontainer']}>
            <TransferFilter />
            <div className={cssStyles['right-container']}>
              <TabsForSorting />
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
