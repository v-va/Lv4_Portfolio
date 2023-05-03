import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import GlobalStyle from "./components/common/GlobalStyle";
import Router from "./shared/Router";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Router />
            </QueryClientProvider>
        </>
    );
}

export default App;
