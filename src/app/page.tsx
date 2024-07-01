// src/pages/index.tsx

"use client";

import React from 'react';
import Menu from '../components/Menu';
import { Subcategory } from '../types';

const categories: Subcategory[] = [
  {
    nome: 'Início',
    subcategorias: []
  },
  {
    nome: 'Produtos',
    subcategorias: [
      { nome: 'Smartphones' },
      { nome: 'Laptops' },
      { nome: 'Acessórios' }
    ]
  },
  {
    nome: 'Roupas',
    subcategorias: [
      { nome: 'Camisetas' },
      { nome: 'Calças' },
      { nome: 'Sapatos' }
    ]
  },
  {
    nome: 'Contato',
    subcategorias: []
  }
];

const Home: React.FC = () => {
  return (
    <div className="App">
      <Menu categories={categories} />
    </div>
  );
}

export default Home;
