interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories = [
    'Todos',
    'Hamburgers', 
    'Pizzas', 
    'Bebidas', 
    'Sobremesas', 
    'Combos'
  ];
  
  return (
    <div className="mb-6 overflow-x-auto no-scrollbar">
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-pill whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category 
                ? 'active' 
                : 'bg-gray-200'
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
