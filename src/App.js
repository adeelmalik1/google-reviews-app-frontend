import { BrowserRouter as Router } from "react-router-dom";
import NavigationRoutes from "./routes";
import ErrorBoundary from "./shared/ErrorBoundary";
import ErrorBoundaryAlert from "./shared/ErrorBoundaryAlert";
import { Suspense } from "react";
import Loader from "./shared/Loader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-loading-skeleton/dist/skeleton.css';


function App() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
      <Suspense fallback={<Loader />}>
        <Router>
          <NavigationRoutes />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
