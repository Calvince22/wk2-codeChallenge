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
    const quantity = quantityInput.value.trim();

    if (!item || !quantity || isNaN(quantity) || quantity <= 0) {
        alert("Please fill in all fields with valid data!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create text content
    const textSpan = document.createElement("span");
    textSpan.textContent = `${item} (${quantity}) - ${category}`;
    li.appendChild(textSpan);

    // Add Purchased button
    const purchasedButton = document.createElement("button");
    purchasedButton.textContent = "Purchase";
    purchasedButton.style.marginLeft = "10px";
    purchasedButton.addEventListener("click", () => {
        if (textSpan.style.textDecoration === "line-through") {
            textSpan.style.textDecoration = "none";
            textSpan.style.color = "black";
            purchasedButton.textContent = "Purchase";
        } else {
            textSpan.style.textDecoration = "line-through";
            textSpan.style.color = "green";
            purchasedButton.textContent = "Purchased";
        }
    });
    li.appendChild(purchasedButton);

    // Add Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.marginLeft = "10px";
    editButton.addEventListener("click", () => {
        const newItem = prompt("Edit item name:", item);
        const newQuantity = prompt("Edit quantity:", quantity);
        const newCategory = prompt("Edit category:", category);

        if (newItem && newQuantity && newCategory && !isNaN(newQuantity) && newQuantity > 0) {
            textSpan.textContent = `${newItem} (${newQuantity}) - ${newCategory}`;
        } else {
            alert("Please provide valid values for all fields.");
        }
    });
    li.appendChild(editButton);

    // Add Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteButton);

    // Append to list
    list.appendChild(li);

    // Clear form fields
    itemInput.value = "";
    quantityInput.value = "";
    categorySelect.selectedIndex = 0;
});
