import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import AddNewProduct from "./components/AddNewProduct";
import { useState } from "react";
import Product from "./components/products/Product";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router";
import Weather from "./components/weather/Weather";
import OTP from "./components/OTP/OTP";
import Layout from "./components/Layout";
import UseMemoCallbackMemo from "./components/UseMemo,callback,memo/UseMemoCallbackMemo";

function App() {
  const [isShow, setIsShow] = useState(false);

  const showHider = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <header className="App-header">
                <div className="left">
                  <ToDoList />
                </div>
                <div className="right">
                  {isShow ? null : (
                    <button
                      onClick={() => {
                        showHider();
                      }}
                    >
                      SHOW
                    </button>
                  )}
                  {isShow ? <AddNewProduct showHider={showHider} /> : null}
                  <hr />
                  <Product />
                </div>
              </header>
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/OTP" element={<OTP />} />{" "}
          <Route
            path="/UseMemoCallbackMemo"
            element={<UseMemoCallbackMemo />}
          />
          <Route path="*" element={<>not found</>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
