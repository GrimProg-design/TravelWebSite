import type { JSX } from "react";
import "./CategoryFilter.css"

type FilterType = 'all' | 'kyrgyzstan' | 'world';

interface CategoryFilterProps {
    currentFilter: FilterType;
    setFilter: (filter: FilterType) => void;
}

export default function CategoryFilter({ currentFilter, setFilter }: CategoryFilterProps): JSX.Element {
    const categories: { label: string, value: FilterType }[] = [
        { label: 'Все Туры', value: 'all' },
        { label: 'Кыргызстан', value: 'kyrgyzstan' },
        { label: 'Всемирные', value: 'world' },
    ];
    
    return (
        <div className="category-filter-con">
            {categories.map(cat => (
                <button
                    key={cat.value}
                    className={`filter-btn ${currentFilter === cat.value ? 'active' : ''}`}
                    onClick={() => setFilter(cat.value)}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
}