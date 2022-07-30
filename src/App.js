import "./App.css";
import Layout from "./pages/Layout/Layout";
import Menubar from "./pages/shared/Menubar/Menubar";
function App() {
  return (
    <div
      style={{
        backgroundColor: "#120E43",
        color: "#fff",
      }}
    >
      <Menubar />
      <Layout />
    </div>
  );
}

export default App;
