interface IGroceryItemProps {
  children: string;
}

const GroceryItem: React.FC<IGroceryItemProps> = ({ children }) => {
  return (
    <article className="grocery-item">
      <p className="title">{children}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>
        <button type="button" className="delete-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </article>
  );
};

export default GroceryItem;
