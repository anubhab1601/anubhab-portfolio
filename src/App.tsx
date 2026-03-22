import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

// Fallback component for lazy loading
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
  </div>
);

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense fallback={<LoadingFallback />}>
          <MainContainer>
            <Suspense fallback={<div />}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
