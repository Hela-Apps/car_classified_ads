import "./App.css";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import Dashboard from "./components/layout/Dashboard";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
