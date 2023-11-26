import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utilities/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedResults from "./components/SearchedResults";
import VideoContainer from "./components/VideoContainer";
import Demo from "./components/Demo";
import DemoRef from "./components/DemoRef";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        children: [
          {
            path: "/",
            element: <VideoContainer />,
          },
          {
            path: "/results",
            element: <SearchedResults />,
          },
        ],
      },

      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo /> <DemoRef />
          </>
        ),
      },
      // {
      //   path: "results",
      //   element: <SearchVideo />,
      // },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
