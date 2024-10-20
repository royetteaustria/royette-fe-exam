import searchIcon from "../../assets/svg/categories/search.svg";
import { linkCategory } from "./../../links/Categories/LinkCategories";
import './Categories.css';
import { Link } from "react-router-dom";
import Filter from "../filter/Filter";
import { useState } from "react";


interface CategoriesProps {
  onSearchClick: () => void; 
  onCategoryClick: () => void; 
}

const Categories: React.FC<CategoriesProps> = ({ onSearchClick, onCategoryClick }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleSearchClick = () => {
    setShowFilter(prev => !prev); 
    onSearchClick(); 
  };

  const handleCategoryClick = () => {
    setShowFilter(false); 
    onCategoryClick(); 
  };

  return (
    <>
      <div className="main">
        <div className="search-section sticky top-0 grid">
          <p className="search-button" onClick={handleSearchClick}>
            <img src={searchIcon} />
            <span className="text-[#888888]">SEARCH</span>
          </p>
        </div>
        <div className="categories">
          <ul className="flex gap-4">
            {linkCategory.map((category, index) => (
              <li key={index} className="flex-shrink-0 text-[#888888]">
                <Link to={category.link} onClick={handleCategoryClick}>
                  <img src={category.image} />
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showFilter && <Filter />}
    </>
  );
};

export default Categories;
