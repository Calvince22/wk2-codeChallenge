// Select DOM elements
const form = document.querySelector("form");
const itemInput = document.querySelector("#item-input");
const categorySelect = document.querySelector("select");
const quantityInput = document.querySelector("#quantity");
const list = document.querySelector("ul");

// Populate category dropdown
const categories = ["Groceries", "Electronics", "Clothing", "Other"];
categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
});

// Handle form submission
form.addEventListener("submit", event => {
    event.preventDefault();

    // Get form values
    const item = itemInput.value.trim();
    const category = categorySelect.value;
    const quantity = quantityInput.value;

    if (!item || !quantity) {
        alert("Please fill in all fields!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${item} (${quantity}) - ${category}</span>
        <button>Delete</button>
    `;

    // Add delete functionality
    li.querySelector("button").addEventListener("click", () => {
        li.remove();
    });

    // Append to list
    list.appendChild(li);

    // Clear form fields
    itemInput.value = "";
    quantityInput.value = "";
    categorySelect.selectedIndex = 0;
});
