import './styles.css';
import React from 'react';

const Header = () => (
  <header>
    <div className="button-container">
      <button>Menu</button>
      <button>Hakkında</button>
      <button>Saatler & Lokasyon</button>
    </div>
  </header>
);

const MainContent = () => (
  <main>
    <h1 className="logo-container">Basit Yemekler Restoranı</h1>
    <p className="info-container">
      Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor.
      Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan.
      Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
    </p>
    <div className="image-container">
      <div className="image-wrapper">
        <img className="hot-dog" src="images/hotdogs.jpg" alt="Hot Dog" />
      </div>
      <div className="image-wrapper">
        <img src="images/sandwich.jpg" alt="Sandwich" />
      </div>
      <div className="image-wrapper">
        <img src="images/hamburger.jpg" alt="Hamburger" />
      </div>
    </div>
  </main>
);

const Footer = () => (
  <footer>
    <p>
      Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Coding Company</a>™.
    </p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default App;