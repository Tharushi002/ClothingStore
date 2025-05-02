function renderDashboard() {
    document.getElementById('mainContent').innerHTML = `
      <h2>Velvet Vogue Dashboard</h2>
      <div class="dashboard-grid">
        <div class="card">
          <h3>Total Products</h3>
          <p id="totalProducts">Loading...</p>
        </div>
        <div class="card">
          <h3>Total Orders</h3>
          <p id="totalOrders">Loading...</p>
        </div>
        <div class="card">
          <h3>Users Registered</h3>
          <p id="totalUsers">Loading...</p>
        </div>
      </div>
    `;
  
    // Example Firestore queries to get counts (adjust based on your actual collection names)
    db.collection("products").get().then(snapshot => {
      document.getElementById('totalProducts').textContent = snapshot.size;
    });
  
    db.collection("orders").get().then(snapshot => {
      document.getElementById('totalOrders').textContent = snapshot.size;
    });
  
    db.collection("users").get().then(snapshot => {
      document.getElementById('totalUsers').textContent = snapshot.size;
    });
  }
  