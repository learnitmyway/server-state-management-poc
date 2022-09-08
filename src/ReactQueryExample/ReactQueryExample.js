import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { People } from "./People";

const queryClient = new QueryClient();

export function ReactQueryExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <h3>---------- React Query Example ----------</h3>
      <People />
    </QueryClientProvider>
  );
}
