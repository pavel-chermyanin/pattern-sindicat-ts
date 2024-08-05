import {RouterProvider} from "react-router-dom";

import {router} from "./config/route.config.tsx";
import {QueryClientWrapper} from "./providers/QueryClient.tsx";


export const App = () => {
  return (
    <QueryClientWrapper>
      <RouterProvider router={router}/>
    </QueryClientWrapper>
  );
};
