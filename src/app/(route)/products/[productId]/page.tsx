import { type ProductsDetailsProps } from '../types'

const ProductsDetails = (props: ProductsDetailsProps) => {
  const { params } = props
  return <h1>Details about product {params.productId}</h1>
}
export default ProductsDetails
