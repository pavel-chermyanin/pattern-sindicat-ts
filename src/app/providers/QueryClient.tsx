
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

type QueryClientProps = {
  children: React.ReactNode;
}

export const QueryClientWrapper = ({children}:QueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

