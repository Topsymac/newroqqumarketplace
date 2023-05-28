import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/home/Home";
import Details from "./Pages/details/Details";
import TrendingTokenPage from "./Pages/trending token page/TrendingTokenPage";
import RecentlyAddedTokenPage from "./Pages/recently added token page/RecentlyAddedTokenPage";
import ChartApiComponent from "./components/lightWeight chart/ChartApiComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/chart",
      element: <ChartApiComponent />,
    },
  ]);
  // const [quote, setQuote] = useState("");

  // useEffect(() => {
  //   fetch("https://api.kanye.rest/oranges")
  //     .then((res) => res.json())
  //     .then((data) => setQuote(data.quote))
  //     .catch((err) => console.log(err));
  // }, []);
  //

  // return (
  //   <div className="App">
  //     {/* <div>
  //       <h1>{quote}</h1>
  //     </div> */}
  //     <Home />
  //   </div>
  // );
  return <RouterProvider router={router} />;
}

export default App;
