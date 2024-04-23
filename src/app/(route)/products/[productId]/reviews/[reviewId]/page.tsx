'use client'

import { notFound } from 'next/navigation'

import { type ReviewDetilsProps } from '../../../types'

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count)
}
const ReviewDetails = ({ params }: ReviewDetilsProps) => {
  const random = getRandomInt(2)
  if (random === 1) throw new Error('Error loading review')
  if (parseInt(params.reviewId) > 1000) notFound()
  return (
    <section>
      <h1>Review Details</h1>
    </section>
  )
}

export default ReviewDetails
