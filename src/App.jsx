import { Suspense } from "react";

import Header from "./components/Header/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback={<span className="loader"></span>}>
      <App />
    </Suspense>
  );
}
