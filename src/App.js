import "./App.css";
import Layout from "./pages/Layout/Layout";
import Menubar from "./pages/shared/Menubar/Menubar";
function App() {
  return (
    <div className="bg-blue-900 text-white">
      <Menubar />
      <Layout />
    </div>
  );
}

export default App;
