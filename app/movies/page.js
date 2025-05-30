
export default async function Page() {

  // Replace API url with your
  const data = await fetch('https://dummyjson.com/products')
  const result = await data.json()
  const products = result.products;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}