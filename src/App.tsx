import Daftar from "./Daftar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Daftar />
        </div>
      </DndProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
