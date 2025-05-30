
export default async function Page() {

  // Replace API url with your
  const data = await fetch('http://127.0.0.1:8000/api/movies?page=1')
  const result = await data.json()
  const products = result.member;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}