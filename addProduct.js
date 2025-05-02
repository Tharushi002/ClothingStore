function renderAddProduct() {
    document.getElementById('mainContent').innerHTML = `
      <div class="form-container">
        <h2>Add New Product</h2>
        <input type="text" id="productName" placeholder="Product Name" />
        <input type="text" id="productPrice" placeholder="Product Price" />
        <textarea id="productDescription" placeholder="Product Description"></textarea>
        <button onclick="addProduct()">Add Product</button>
      </div>
      <div id="productList"></div>
    `;
  
    loadProducts(); // Optional: Load existing products on render
  }
  
  function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const description = document.getElementById('productDescription').value;
  
    if (!name || !price || !description) {
      alert('Please fill in all fields.');
      return;
    }
  
    db.collection("products").add({
      name,
      price,
      description,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      alert("Product added successfully!");
      renderAddProduct(); // re-render the form and updated list
    }).catch((error) => {
      console.error("Error adding product: ", error);
    });
  }
  
  function loadProducts() {
    const list = document.getElementById('productList');
    db.collection("products").orderBy("createdAt", "desc").get().then(snapshot => {
      list.innerHTML = '';
      snapshot.forEach(doc => {
        const product = doc.data();
        list.innerHTML += `
          <div>
            <strong>${product.name}</strong><br>
            Price: ${product.price}<br>
            ${product.description}
          </div>
        `;
      });
    });
  }
  
