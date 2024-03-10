import "../pages/Men.css";

interface CategoryMenProps {
  selectedCategory: string | null;
  handleCategoryChange: (category: string) => void;
  handleSizeChange: (size: string) => void;
  selectedSize: string | null;
}

const CategoryMen = ({
  selectedCategory,
  handleCategoryChange,
  handleSizeChange,
  selectedSize,
}: CategoryMenProps) => {
  const categories = [
    "Tee",
    "Shirt",
    "Pant",
    "Jeans",
    "Coat",
    "Kurta",
    "Jacket",
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

export default CategoryMen;
