document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productsContainer = document.getElementById('productsContainer');

    // Handle form submission
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get product details
        const productName = document.getElementById('productName').value.trim();
        const productPrice = document.getElementById('productPrice').value.trim();

        if (productName && productPrice) {
            // Create a new product card
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // Add product details to the card
            productCard.innerHTML = `
                <h3>${productName}</h3>
                <p>Price: <span>$${productPrice}</span></p>
            `;

            // Append the product card to the container
            productsContainer.appendChild(productCard);

            // Clear the form
            productForm.reset();
        } else {
            alert('Please enter both product name and price.');
        }
    });
});
