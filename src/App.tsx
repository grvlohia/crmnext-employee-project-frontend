import Daftar from "./Daftar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Daftar />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
