import { Link, Route, Routes } from "react-router";
import UseTransitionHooks from "./pages/UseTransitionHooks";
import UseActionState from "./pages/UseActionState";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex justify-center gap-10 font-semibold py-5 bg-amber-200">
        <Link to="/useTransition">useTransition Hook</Link>
        <Link to="/useActionState">useActionState Hook</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useTransition" element={<UseTransitionHooks />} />
        <Route path="/useActionState" element={<UseActionState />} />
      </Routes>
    </>
  );
}

export default App;
