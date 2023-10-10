import { ITicket } from '@/services/ticket-validation-scheme';

import cssStyles from './one-ticket.css?inline';
import ticketLogoIcon from './ticket-logo-icon.svg';

export function OneTicket({ ticket }: { ticket: ITicket }) {
  console.log('[35m OneTicket ticket = ', ticket); //TODO - delete vvtu

  const price = new Intl.NumberFormat('ru').format(ticket.price);

  return (
    <>
      <style>{cssStyles}</style>

      <div className="panel-color-and-border ticket-layout">
        <div className="flex-row-space-between">
          <div className="price">{`${price} Р`}</div>
          <img src={ticketLogoIcon} alt="Company Logo" width={'110px'} height={'36px'} />
        </div>
      </div>
    </>
  );
}
