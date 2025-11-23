import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//  const sampleProducts = [
//  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299, inStock: true, image: '/laptop.jpg' },
//  { id: 2, name: 'Cotton T-Shirt', category: 'Clothing', price: 29, inStock: false, image: '/tshirt.jpg' },
//  { id: 3, name: 'React Handbook', category: 'Books', price: 39, inStock: true, image: '/book.jpg' },
//  { id: 4, name: 'Mobile', category: 'Electornics', price: 39000, inStock: true, image: '/book.jpg' },
//  { id: 5, name: 'HTML Handbook', category: 'Books', price: 39, inStock: true, image: '/book.jpg' },
//  ]

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Laptop", category: "Electronics", price: 50000, inStock: true },
        { id: 2, name: "Headphones", category: "Electronics", price: 2000, inStock: false },
        { id: 3, name: "T-Shirt", category: "Clothing", price: 500, inStock: true },
        { id: 4, name: "Jeans", category: "Clothing", price: 1500, inStock: false },
        { id: 5, name: "JavaScript Book", category: "Books", price: 800, inStock: true },
        { id: 6, name: "React Guide", category: "Books", price: 1200, inStock: false }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <h1>Dynamic Product catalog</h1>

      <div>
        {["All", "Electronics", "Clothing", "Books"].map((cat) => (
          <button key={cat}
          onClick={() => setCategory(cat)}
          >{cat}</button>
        ))}
      </div>
      <input onChange={(e) => setSearch(e.target.value)}></input>

      {loading && (
        <div>
          <h3>Loading products...</h3>
          <div></div>
        </div>
          )}
      {/* //  Empty state */}

      {!loading && filteredProducts.length === 0 && (
        <h3>No products match your filter</h3>
      )}
  
      <div>
        {!loading && filteredProducts.map((product) => (
          <div>
            <h3>{product.name}</h3>
            <p>category: {product.category}</p>
            <p>Price: {product.price}</p>

          </div>
        ))}
      </div>


     
    </>
  )
}

export default App
