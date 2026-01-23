import {createHashRouter} from "react-router-dom";
import {About, Home, ListOfItems, Services, Map, NewPark} from "./LazyImports";

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
            path: 'list',
            element: <ListOfItems/>
        },
        {
            path: '/newpark',
            element: <NewPark/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)


export default routes;