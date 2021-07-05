import React from 'react';
import './App.scss';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <ProductList />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
