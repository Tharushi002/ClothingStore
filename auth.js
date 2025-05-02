function logout() {
    auth.signOut().then(() => {
      alert('Logged out');
      // Redirect or handle logout UI change
    });
  }
  
  