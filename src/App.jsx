import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import 'react-toastify/dist/ReactToastify.min.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
};

export default App;
