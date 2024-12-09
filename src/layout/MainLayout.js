import React, { useState } from "react";
import SidebarNav from "../shared/SidebarNav";
import ErrorBoundary from "../shared/ErrorBoundary";
import ErrorBoundaryAlert from "../shared/ErrorBoundaryAlert";

const MainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const [toggled, setToggled] = useState(false);
    return (
      <div className="main-layout d-block">
        <div className="d-flex" style={{ height: "100vh" }}>
          <SidebarNav setToggled={setToggled} toggled={toggled} />
          <main className="main-container">
            <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
              <WrappedComponent {...props} />
            </ErrorBoundary>
          </main>
        </div>
      </div>
    );
  };
};

export default MainLayout;
