'use client'
import styles from '@/styles/product-list-item/index.module.scss'
import { useLang } from '@/hooks/useLang'

const ProductColor = ({ color }: { color: string }) => {
  const { lang, translations } = useLang()

  return (
    <span className={styles.product__color}>
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {translations[lang].catalog.color}: {translations[lang].catalog[color]}
    </span>
  )
}

export default ProductColor
