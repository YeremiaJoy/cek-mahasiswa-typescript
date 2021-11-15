import IRoute from "../interfaces/route";
import AboutPage from "../pages/about";
import HomePage from "../pages/home";

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About Page',
    component: AboutPage,
  }
]

export default routes;