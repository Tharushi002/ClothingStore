function renderOrders() {
    document.getElementById('mainContent').innerHTML = `
      <div class="orders-container">
        <h2>Orders</h2>
        <p>No orders to show (demo).</p>
        <table class="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Ms.Anu Weerasinha</td>
              <td>Dark blue saree</td>
              <td><span class="status pending">Pending</span></td>
              <td><button class="action-btn">View</button></td>
            </tr>
            <tr>
              <td>002</td>
              <td>Mrs.K.p Silva</td>
              <td>Merun bloose</td>
              <td><span class="status completed">Completed</span></td>
              <td><button class="action-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
  