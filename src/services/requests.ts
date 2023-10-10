import { generateMock } from '@anatine/zod-mock';

import { RESPONSE_DELAY, PROBABILITY_OF_ERROR } from '@/app-constants';
import { ticketValidationScheme } from '@/services/ticket-validation-scheme';
import { delay } from '@/utils/delay';

export async function getSystemId() {
  await delay(RESPONSE_DELAY);

  return 'id_123456';
}

export async function getTickets(systemId: string) {
  if (!systemId) {
    return Promise.reject({ tickets: [], stop: true });
  }
  await delay(RESPONSE_DELAY);

  if (Math.random() < PROBABILITY_OF_ERROR) {
    return Promise.reject({ tickets: [], stop: false });
  }

  const ticketArrayLength = Math.trunc(Math.random() * 9.9999 + 1);
  const ticketArray = Array.from({ length: ticketArrayLength }, () =>
    generateMock(ticketValidationScheme),
  );
  for (const ticket of ticketArray) {
    ticket.price = Math.trunc(Math.random() * 200 + 100) * 100;
    ticket.segments.forEach((elem) => {
      elem.destination = elem.destination.slice(0, 3);
      elem.origin = elem.origin.slice(0, 3);
    });
  }

  return Promise.resolve({ tickets: ticketArray, stop: Math.random() < 0.2 });
}
