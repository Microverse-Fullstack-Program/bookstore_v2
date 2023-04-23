import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Category from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
