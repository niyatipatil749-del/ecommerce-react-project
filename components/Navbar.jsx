import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background:"#2563eb",
      padding:"15px",
      display:"flex",
      justifyContent:"space-between",
      color:"white"
    }}>
      <h2>ShopEase</h2>

      <div>
        <Link to="/" style={{color:"white",margin:"10px"}}>Home</Link>
        <Link to="/products" style={{color:"white",margin:"10px"}}>Products</Link>
        <Link to="/about" style={{color:"white",margin:"10px"}}>About</Link>
        <Link to="/contact" style={{color:"white",margin:"10px"}}>Contact</Link>
      </div>
    </nav>
  );
}