import Logo from '@/pages/icons/logo.svg';

import cssStyles from './app.css?inline';
import { TabsForSorting } from './tabs-for-sorting';
import { Tickets } from './tickets';
import { TransferFilter } from './transfer-filter';

export function App() {
  return (
    <>
      <style>{cssStyles}</style>
      <div className="app-container">
        <div className="height0">&nbsp;</div>
        <div className="logo-container">
          <img src={Logo} alt="Logo icon" width="82" height="89" />
        </div>
        <div className="tickets-container">
          <div className="tickets-subcontainer">
            <TransferFilter />
            <div className="right-container">
              <TabsForSorting />
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
