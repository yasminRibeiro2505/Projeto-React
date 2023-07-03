import React from 'react';
import './styles.css';
import logo from '../../assets/logo/imgbin-barbie-banner-logo-collecting-doll-4k-logo-hFQhNrj1etVvPkyyDTa6uFL3f.jpg';
function Navbar() {

  return (
    <div class="navbar">
      <div class="logo">
        <h2>🦋PINK-EMPOWERED🦋</h2>
      </div>
      <ul class="links">
        <li><a href="/">INÍCIO ⌂</a></li>
        <li><a href="sobre">SOBRE</a></li>
        <li><a href="carrinho">CARRINHO 🛒</a></li>
      </ul>
    </div>
  );
}

export default Navbar;