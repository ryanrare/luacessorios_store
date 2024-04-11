import React from 'react';
import Header from '../components/header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Bem-vindo à Minha Loja de Joias!</h2>
        <p>Explore nossa coleção de joias banhadas a prata.</p>
      </div>
    </div>
  );
}

export default Home;