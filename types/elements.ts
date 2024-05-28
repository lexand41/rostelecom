import { CustomArrowProps } from 'react-slick'

export interface IProductSubtitleProps {
  subtitleClassName?: string
  subtitleRectClassName?: string
}

export interface IProductItemActionBtnProps {
  text: string
  callback?: VoidFunction
  iconClass: string
  withTooltip?: boolean
  marginBottom?: number
}

export interface IProductAvailableProps {
  vendorCode: string
  inStock: number
}

export interface IQuickViewModalSliderArrowProps extends CustomArrowProps {
  directionClassName: string
}
