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
        <div style={{ height: 0 }}>&nbsp;</div>
        <div className="logo-container">
          <img src={Logo} alt="Logo icon" height="60px" width="60px" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
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
