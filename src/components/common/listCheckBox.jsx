import React, { useState } from "react";

function ListCheckBox({ title = "Checklist", itemCount = 3, className = "" }) {
  const [items, setItems] = useState(
    Array.from({ length: itemCount }, () => ({ label: "Item", checked: false }))
  );

  const toggleCheck = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { label: "Item", checked: false }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className={`checkbox-container ${className}`}>
      <h3 className="checkbox-title">{title}</h3>
      <ul className="checkbox-list">
        {items.map((item, index) => (
          <li key={index} className="checkbox-item">
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheck(index)}
              />
              {item.label}
            </label>
            <button
              onClick={() => removeItem(index)}
              className="remove-btn"
              title="Remove"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <button onClick={addItem} className="add-item-btn">
        + Add Item
      </button>
    </div>
  );
}

export default ListCheckBox;
