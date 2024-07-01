// src/components/Menu.tsx

"use client";

import React, { useState } from 'react';
import { Subcategory } from '../types';

interface MenuProps {
  categories: Subcategory[];
}

const renderMenuItems = (
  items: Subcategory[],
  activeItem: string | null,
  setActiveItem: (name: string | null) => void
) => {
  return items.map((item, index) => (
    <div
      key={index}
      className={`relative group ${activeItem === item.nome ? 'bg-gray-200' : ''}`}
      onMouseEnter={() => setActiveItem(item.nome)}
      onMouseLeave={() => setActiveItem(null)}
    >
      <div className="p-2 cursor-pointer hover:bg-gray-200">
        {item.nome}
      </div>
      {item.subcategorias && item.subcategorias.length > 0 && (
        <div className="absolute left-0 top-10 mt-0 bg-white shadow-lg hidden group-hover:block z-10">
          {item.subcategorias.map((subItem, subIndex) => (
            <div key={subIndex} className="p-2 cursor-pointer hover:bg-gray-200">
              {subItem.nome}
            </div>
          ))}
        </div>
      )}
    </div>
  ));
};

const Menu: React.FC<MenuProps> = ({ categories }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="w-100 flex bg-gray-100 p-4">
      <div className="relative flex gap-8 ">
        {renderMenuItems(categories, activeItem, setActiveItem)}
      </div>
    </div>
  );
};

export default Menu;
