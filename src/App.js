import logo from './logo.svg';
import './App.css';
import { Header } from "./Components/Header/index.tsx";
import { SideBar } from "./Components/SideBar/index.tsx"
import ProductPage  from './Pages/ProductPage/index.tsx';

function App() {
    return ( 
      <div>
        <ProductPage/>
      </div>
    );
}

export default App;