import { memo } from "react";
import { BrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
