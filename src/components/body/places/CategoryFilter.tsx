import type { JSX } from "react";
import "./CategoryFilter.css";
import { useLanguage } from "../../../contexts/useLanguage";
import type { TranslationKeys } from "../../../i18n/translations";

type FilterType = "all" | "kyrgyzstan" | "world";

interface CategoryFilterProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export default function CategoryFilter({
  currentFilter,
  setFilter,
}: CategoryFilterProps): JSX.Element {
  const { t } = useLanguage();

  const categories: { labelKey: TranslationKeys; value: FilterType }[] = [
    { labelKey: "filter_label_all", value: "all" },
    { labelKey: "filter_label_kyrgyzstan", value: "kyrgyzstan" },
    { labelKey: "filter_label_world", value: "world" },
  ];

  return (
    <div className="category-filter-con">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`filter-btn ${
            currentFilter === cat.value ? "active" : ""
          }`}
          onClick={() => setFilter(cat.value)}
        >
          {t(cat.labelKey)}
        </button>
      ))}
    </div>
  );
}
