const LandingPage = () => {
    return (
      <div className="landing-page" style={{ backgroundImage: 'url(your-image-url)' }}>
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful houseplants.</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    );
  };
  

  const ProductListingPage = () => {
    const products = [
      { id: 1, name: 'Snake Plant', price: 20, imageUrl: 'url1', category: 'Indoor' },
      // Add more products...
    ];
  
    return (
      <div>
        <Header />
        <h2>Our Plants</h2>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  
  const ShoppingCartPage = () => {
    const cartItems = [
      { id: 1, name: 'Snake Plant', price: 20, quantity: 2, imageUrl: 'url1' },
      // Add more cart items...
    ];
  
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
    return (
      <div>
        <Header />
        <h2>Your Shopping Cart</h2>
        <p>Total Plants: {totalCount}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
            <button>Increase</button>
            <button>Decrease</button>
            <button>Delete</button>
          </div>
        ))}
        <Link to="/products"><button>Continue Shopping</button></Link>
        <button>Checkout</button>
      </div>
    );
  };

  
  const Header = ({ cartCount }) => {
    return (
      <header>
        <h1>Paradise Nursery</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
      </header>
    );
  };

  
  