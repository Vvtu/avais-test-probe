import classNames from 'classnames';

import panelStyles from '@/pages/panel.module.css';
import { ITicket } from '@/services/ticket-validation-scheme';

import cssStyles from './one-ticket.css?inline';
import ticketLogoIcon from './ticket-logo-icon.svg';

function transferTextMessage(stops: unknown[]) {
  const count = stops.length;
  let suffix = '';
  switch (count) {
    case 0:
      suffix = 'пересадок';
      break;
    case 1:
      suffix = 'пересадка';
      break;
    case 2:
      suffix = 'пересадки';
      break;
    case 3:
      suffix = 'пересадки';
      break;
    case 4:
      suffix = 'пересадки';
      break;
  }

  return `${count.toFixed()} ${suffix}`;
}

export function OneTicket({ ticket }: { ticket: ITicket }) {
  const price = new Intl.NumberFormat('ru').format(ticket.price);

  return (
    <>
      <style>{cssStyles}</style>

      <div className={classNames(panelStyles.panelColorAndBorder, 'ticket-layout')}>
        <div className="flex-row-space-between">
          <div className="price">{`${price} Р`}</div>
          <img src={ticketLogoIcon} alt="Company Logo" width={'110px'} height={'36px'} />
        </div>
        <div className="flex-row elem-gray margin-top-20">
          <div className="elem-width">{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</div>
          <div className="elem-width">В пути</div>
          <div className="elem-width">{transferTextMessage(ticket.segments[0].stops)}</div>
        </div>
        <div className="flex-row elem-black">
          <div className="elem-width">{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</div>
          <div className="elem-width">В пути</div>
          <div className="elem-width">{ticket.segments[0].stops.join(', ')}</div>
        </div>
        <div className="flex-row elem-gray margin-top-10">
          <div className="elem-width">{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</div>
          <div className="elem-width">В пути</div>
          <div className="elem-width">{transferTextMessage(ticket.segments[0].stops)}</div>
        </div>
        <div className="flex-row elem-black">
          <div className="elem-width">{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</div>
          <div className="elem-width">В пути</div>
          <div className="elem-width">{ticket.segments[0].stops.join(', ')}</div>
        </div>
      </div>
    </>
  );
}
