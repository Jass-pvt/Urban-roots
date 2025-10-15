function performSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    
    // List of available items for searching
    const items = ["tomato", "vegetables", "fruits", "nuts", "moong dal", "masoor dal", "chana dal", "urad dal", "kala chana", "toor dal"];
    
    // Check if the search term matches any item
    if (items.includes(searchInput)) {
        alert(`${searchInput.charAt(0).toUpperCase() + searchInput.slice(1)} found in our products!`);
    } else {
        alert("Item not found. Please try another search term.");
    }
}
