'use client'
import { useRouter } from 'next/navigation'

const OrderProduct = () => {
  const router = useRouter()
  const handleClick = () => {
    // console.log('Placing your Order')
    router.push('/')
  }
  return (
    <section>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </section>
  )
}

export default OrderProduct
