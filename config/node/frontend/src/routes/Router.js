import {createHashRouter} from "react-router-dom";
import {About, Home, ListOfItems, Services, Map, NewPark, TableList} from "./LazyImports";

const routes = createHashRouter(
    [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/map',

            element: <Map/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/list',
            element: <ListOfItems/>
        },
        {
            path: '/newpark',
            element: <NewPark/>
        },
        {
            path: '/table',
            element: <TableList />
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)


export default routes;