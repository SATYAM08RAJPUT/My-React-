import { useState } from "react";

const SearchableDropdown = ({ options, onSelect }) => {
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setShowDropdown(true);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSearch(option);
    setShowDropdown(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div style={{ width: "200px", position: "relative" }}>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)}
        placeholder="Search..."
        style={{ width: "100%", padding: "8px" }}
      />
      {showDropdown && (
        <ul
          style={{
            position: "absolute",
            width: "108%",
            border: "1px solid #ccc",
            marginTop: "2px",
            padding: "0",
            listStyle: "none",
            background: "white",
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {option}
              </li>
            ))
          ) : (
            <li style={{ padding: "8px", color: "gray" }}>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
