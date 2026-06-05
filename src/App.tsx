import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import { DataProvider } from "./context/DataContext";
import AppContent from "./components/AppContent";
// import DataContext from "./context/DataContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
