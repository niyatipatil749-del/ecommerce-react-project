export default function Products() {

  const products = [
    "Laptop",
    "Mobile",
    "Headphones",
    "Smart Watch"
  ];

  return (
    <div style={{padding:"30px"}}>
      <h2>Featured Products</h2>

      <div style={{
        display:"flex",
        gap:"20px",
        flexWrap:"wrap"
      }}>
        {products.map((item,index)=>(
          <div
            key={index}
            style={{
              border:"1px solid #ccc",
              padding:"20px",
              width:"180px"
            }}
          >
            <h3>{item}</h3>
            <p>₹9999</p>
          </div>
        ))}
      </div>
    </div>
  );
}