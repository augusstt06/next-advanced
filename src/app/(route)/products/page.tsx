import Link from 'next/link'

const Products = () => {
  const productsList = [
    { id: 1, title: 'Product 1', description: 'Product1 description' },
    { id: 2, title: 'Product 2', description: 'Product2 description' },
    { id: 3, title: 'Product 3', description: 'Product3 description' },
  ]
  return (
    <section>
      <h1>Products</h1>
      <section
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        {productsList.map((data) => (
          <div
            key={data.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Link href={`/products/${data.id}`}>
              <h2>{data.title}</h2>
            </Link>
          </div>
        ))}
      </section>
    </section>
  )
}
export default Products
