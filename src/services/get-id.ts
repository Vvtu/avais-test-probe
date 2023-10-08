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
    return Promise.reject([]);
  }
  await delay(RESPONSE_DELAY);

  if (Math.random() < PROBABILITY_OF_ERROR) {
    return Promise.reject([]);
  }

  const ticketArrayLength = Math.trunc(Math.random() * 9.9999 + 1);
  const ticketArray = Array.from({ length: ticketArrayLength }, () =>
    generateMock(ticketValidationScheme),
  );
  for (const ticket of ticketArray) {
    ticket.price = Math.random() * 2000 + 200;
  }

  return Promise.resolve(ticketArray);
}
