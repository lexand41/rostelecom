'use client'

import { useLang } from '@/hooks/useLang'
import styles from '@/styles/product-list-item/index.module.scss'

const ProductComposition = ({ composition }: { composition: string }) => {
  const { lang, translations } = useLang()

  return (
    <span className={styles.product__composition}>
      {translations[lang].product.composition}:{' '}
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {translations[lang].catalog[composition]}
    </span>
  )
}

export default ProductComposition
