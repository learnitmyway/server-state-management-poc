import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { People } from "./People";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function ReactQueryExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <h3>---------- React Query Example ----------</h3>
      <People />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
