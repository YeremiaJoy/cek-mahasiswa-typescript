import IRoute from "../interfaces/route";
import DetailPage from "../pages/detail";
import HomePage from "../pages/home";

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/details',
    name: 'Detail Page',
    component: DetailPage,
  }
]

export default routes;