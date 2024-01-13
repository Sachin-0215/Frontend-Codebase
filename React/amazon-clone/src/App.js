import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage , NavBar,Checkout,SearchResults,ProductPage} from './Components';

const App = () => {
  return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<HomePage/> } />  
              <Route exact path="/search" element={<SearchResults/> } />  
              <Route exact path="/product/:id" element={<ProductPage/> } />  
              <Route exact path="/checkout" element={<Checkout/> } />  
            </Routes>  
        </BrowserRouter>
  )
}

export default App
