// gitURL = https://github.com/CNSAKIB/Vromonn.git

import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages & components
import Home from './Pages/Home';
import Header from './Component/Navbar/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
