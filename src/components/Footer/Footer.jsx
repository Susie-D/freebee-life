import React from 'react';
import './Footer.css';
import { honeybee } from '../../assets/assets';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer className="row jc-center ac-center">
      <img src={honeybee} alt="honey comb and bee logo" />
      &copy; 2024 FreeBee Life
      <img src={honeybee} alt="honey comb and bee logo" />
    </footer>
  );
}

export default Footer;
