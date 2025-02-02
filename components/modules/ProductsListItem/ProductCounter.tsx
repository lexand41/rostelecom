import { IProductCounterProps } from '@/types/goods'
import React from 'react'

const ProductCounter = ({ className, count }: IProductCounterProps) => (
  <div className={className}>
    <button className='btn-reset' />
    <span>{count}</span>
    <button className='btn-reset' />
  </div>
)

export default ProductCounter
