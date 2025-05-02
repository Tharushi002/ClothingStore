// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDCyBzxYCvi30RDXM3v1doFok_CZlkoJ1E",
    authDomain: "velvet-vogue-52dd9.firebaseapp.com",
    projectId: "velvet-vogue-52dd9",
    storageBucket: "velvet-vogue-52dd9.appspot.com",
    messagingSenderId: "372270642030",
    appId: "1:372270642030:web:436b3ecfa397712852877f",
    measurementId: "G-85W0ZYK278"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  let products = [];
  
  function loadSection(section) {
    const main = document.getElementById('mainContent');
    main.innerHTML = '';
  
    if (section === 'dashboard') {
      main.innerHTML = `<h1>Dashboard</h1><p>Welcome to the admin dashboard.</p>`;
    }
  
    if (section === 'addProduct') {
      main.innerHTML = `
        <h1>Add Product</h1>
        <form id="productForm">
          <input type="text" id="name" placeholder="Product Name" required />
          <input type="text" id="price" placeholder="Price" required />
          <input type="url" id="image" placeholder="Image URL" required />
          <button type="submit">Add Product</button>
        </form>
        <div id="productList"></div>
      `;
  
      document.getElementById('productForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const image = document.getElementById('image').value;
  
        await db.collection('products').add({ name, price, image });
        loadProducts();
        this.reset();
      });
  
      loadProducts();
    }
  
    if (section === 'orders') {
      main.innerHTML = `<h1>Orders</h1><p>Order list feature coming soon...</p>`;
    }
  }
  
  async function loadProducts() {
    const productList = document.getElementById('productList');
    const snapshot = await db.collection('products').get();
    products = [];
    snapshot.forEach(doc => {
      products.push({ id: doc.id, ...doc.data() });
    });
  
    renderProducts(productList);
  }
  
  function renderProducts(container) {
    container.innerHTML = '';
    products.forEach((product, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p><strong>${product.name}</strong> - $${product.price}</p>
        <img src="${product.image}" alt="${product.name}">
        <button onclick="deleteProduct(${index})">Delete</button>
      `;
      container.appendChild(div);
    });
  }
  
  async function deleteProduct(index) {
    const id = products[index].id;
    await db.collection('products').doc(id).delete();
    loadProducts();
  }
  
  function logout() {
    alert("Logged out!");
    // You can add Firebase Auth signOut logic here if needed
  }
  
  // Load dashboard by default
  window.onload = () => loadSection('dashboard');
  
  