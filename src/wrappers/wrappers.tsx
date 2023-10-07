import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { router } from '@/router/router';

const queryClient = new QueryClient();

export function Wrappers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router({ children })} />
    </QueryClientProvider>
  );
}
