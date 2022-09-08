import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { render } from "@testing-library/react";

const fullRender = (children) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });
  return {
    ...render(
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  };
};

export default fullRender;
