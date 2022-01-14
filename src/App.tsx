import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from './config/routes';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((routes, k) => {
            return (
              <Route
                key={k}
                path={routes.path}
                element={<routes.component name={routes.name}/>}
              />
            )
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
