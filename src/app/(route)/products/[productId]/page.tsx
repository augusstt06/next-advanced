// SEO를 위한 페이지의 HTML속 Metadata 추가
import { type Metadata } from 'next'

import { type ProductsDetailsProps } from '../types'
export const generateMetadata = ({
  params,
}: ProductsDetailsProps): Metadata => {
  return {
    title: `Product ${params.productId}`,
  }
}
const ProductsDetails = ({ params }: ProductsDetailsProps) => {
  return <h1>Details about product {params.productId}</h1>
}
export default ProductsDetails
