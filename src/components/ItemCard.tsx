
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ItemCardProps {
  name: string;
  imageSrc?: string; // Optional for now
  price: number;
  category: string; // For potential filtering later
}

const ItemCard: React.FC<ItemCardProps> = ({ name, imageSrc, price, category }) => {
  return (
    <Card className="w-[300px] bg-violet-intense border-violet-cosmos shadow-lg shadow-violet-lumineux/30 hover:shadow-rose-galaxie/50 transition-shadow duration-300">
      <CardHeader className="p-4">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-full h-48 object-cover rounded-t-md" />
        ) : (
          <div className="w-full h-48 bg-violet-royal flex items-center justify-center rounded-t-md">
            <span className="text-lavande-etoile text-lg">No Image</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-rose-galaxie text-xl font-bold mb-2 truncate">{name}</CardTitle>
        <p className="text-lavande-etoile text-sm mb-1">Category: {category}</p>
        <p className="text-lilas-astral text-2xl font-semibold">${price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-end">
        <Button className="bg-violet-lumineux hover:bg-rose-galaxie text-violet-profond font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
