import React, { useState } from 'react';
import ItemCard from './components/ItemCard';
import { Button } from './components/ui/button';
import { Target, Briefcase, Car, Zap, Package } from 'lucide-react'; // Example icons

// Placeholder data for items
const allItems = [
  { id: 'v1', name: 'Super Car Alpha', price: 250000, category: 'Vehicles', imageSrc: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=300&q=80' },
  { id: 'v2', name: 'Off-road Beast', price: 120000, category: 'Vehicles', imageSrc: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=300&q=80' },
  { id: 'w1', name: 'Combat Pistol', price: 15000, category: 'Weapons' },
  { id: 'w2', name: 'Heavy Rifle', price: 45000, category: 'Weapons', imageSrc: 'https://images.unsplash.com/photo-1578930093944-69581780ad3a?auto=format&fit=crop&w=300&q=80' },
  { id: 'g1', name: 'Body Armor', price: 5000, category: 'Gear' },
  { id: 'g2', name: 'Night Vision Goggles', price: 12000, category: 'Gear' },
  { id: 'm1', name: 'Lockpick Set', price: 2500, category: 'Misc' },
  { id: 'm2', name: 'First Aid Kit', price: 1000, category: 'Misc' },
  { id: 'v3', name: 'Sports Bike', price: 75000, category: 'Vehicles', imageSrc: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80' },
  { id: 'w3', name: 'Sniper Rifle', price: 80000, category: 'Weapons' },
];

const categories = [
  { name: 'All', icon: <Package className="mr-2 h-5 w-5" /> },
  { name: 'Vehicles', icon: <Car className="mr-2 h-5 w-5" /> },
  { name: 'Weapons', icon: <Target className="mr-2 h-5 w-5" /> },
  { name: 'Gear', icon: <Briefcase className="mr-2 h-5 w-5" /> },
  { name: 'Misc', icon: <Zap className="mr-2 h-5 w-5" /> },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-violet-profond text-lavande-etoile p-4 sm:p-8">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-rose-galaxie tracking-wider shadow-lg [text-shadow:0_0_15px_#DE98FF]">
          FIVE<span className="text-violet-lumineux">M</span> DEALERNET
        </h1>
        <p className="text-lilas-astral text-lg mt-2">Your one-stop shop for premium assets.</p>
      </header>

      {/* Category Filters */}
      <nav className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map(category => (
          <Button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            variant={selectedCategory === category.name ? 'default' : 'outline'}
            className={`
              px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out 
              border-2 hover:shadow-rose-galaxie/60 focus:shadow-rose-galaxie/60
              ${selectedCategory === category.name 
                ? 'bg-rose-galaxie text-violet-profond border-rose-galaxie shadow-md shadow-rose-galaxie/50' 
                : 'bg-violet-royal/50 text-lavande-etoile border-violet-cosmos hover:bg-violet-lumineux hover:text-violet-profond hover:border-violet-lumineux'
              }
            `}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </nav>

      {/* Item Grid */}
      {filteredItems.length > 0 ? (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
          {filteredItems.map(item => (
            <ItemCard key={item.id} {...item} />
          ))}
        </main>
      ) : (
        <div className="text-center py-12">
          <Package className="h-24 w-24 text-violet-cosmos mx-auto mb-6 opacity-50" />
          <h3 className="text-3xl font-semibold text-lilas-astral mb-3">No items found</h3>
          <p className="text-lavande-etoile text-lg">Perhaps try a different category?</p>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 pt-10 border-t-2 border-violet-royal/50 text-center">
        <p className="text-violet-cosmos text-sm">
          &copy; {new Date().getFullYear()} DealerNet. All rights reserved. For FiveM use only.
        </p>
        <p className="text-xs text-violet-intense mt-1">
          Powered by <span className="font-bold text-violet-lumineux">BlinkTech</span>
        </p>
      </footer>
    </div>
  );
}

export default App;