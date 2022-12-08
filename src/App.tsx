import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import PageNotFound from "./PageNotFound";
import Projects from "./Projects";
import ErrorBoundary from "./reusable/ErrorBoundary";
import Spinner from "./reusable/Spinner";

// Lazy load ManageProject component
const ManageProject = lazy(() => import("./ManageProject"));

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
          }
        />

        {/* Add route */}
        <Route
          path="/manage-project"
          element={
            <Suspense fallback={<Spinner />}>
              <ErrorBoundary>
                <ManageProject />
              </ErrorBoundary>
            </Suspense>
          }
        />

        {/* Edit route */}
        <Route
          path="/manage-project/:projectId"
          element={
            <ErrorBoundary>
              <ManageProject />
            </ErrorBoundary>
          }
        />

        <Route
          path="/about"
          element={
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
