import "../pages/Men.css";

interface CategoryWomenProps {
  selectedCategory: string | null;
  handleCategoryChange: (category: string) => void;
  handleSizeChange: (size: string) => void;
  selectedSize: string | null;
}

const CategoryWomen = ({
  selectedCategory,
  handleCategoryChange,
  handleSizeChange,
  selectedSize,
}: CategoryWomenProps) => {
  const categories = [
    "Coat",
    "Jacket",
    "Jeans",
    "Saree",
    "Suit",
    "Skirt",
    "Top",
    "Trousers",
  ];

  const sizes = ["S", "M", "L"];

  return (
    <div className="category-container poppins">
      <div className="category">
        <span>Category</span>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category}>
              <input
                type="checkbox"
                id={category}
                value={category}
                className="inputfield"
                checked={
                  selectedCategory !== null &&
                  selectedCategory.includes(category)
                }
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="size">
        <span>Size</span>
        <ul className="size-list">
          {sizes.map((size) => (
            <li key={size}>
              <button
                type="button"
                className={`size-button ${
                  selectedSize !== null && selectedSize.includes(size)
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryWomen;
