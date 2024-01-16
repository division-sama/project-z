import "./App.css";
import BusinessPage from "./components/BusinessPage/BusinessPage";
// import Example from "./components/AccessControl/AccessControl";
// import Header from "./components/Header/Header";
// import Products from "./components/Products/Products";
// import BusinessProfile from "./components/BusinessProfile/BusinessProfile";
import AddProductForm from "./components/AddProductForm/AddProductForm";
// import SignInForm from "./components/SignInForm/SignInForm";
// import SignInPage from "./components/SignInPage/SignInPage";
// import HomePage from "./components/HomePage/HomePage";
// import { Router,Routes,Route } from "react-router-dom";
// import RegisterForm from "./components/RegisterForm/RegisterForm";
// import Modal from "./components/Modal/Modal";
// import DisplayCategory from "./components/DisplayCategory/DisplayCategory";

// let auth = 0;



function App() {
  return (
    <div className="App">
      {/* This is home page logic dont f with it */}
      {/* <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Routes> */}
      <AddProductForm></AddProductForm>
    </div>
  );
}

export default App;
