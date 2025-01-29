import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./presentation/pages/Home";
import { Toaster } from "./components/ui/sonner";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
