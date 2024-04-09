
type Props = {
  path: string,
  productName: string,
  productType: string,
  className: string,
}

function ProductImage({ path, productName, productType, className }: Props): JSX.Element {
  return (
    <picture>
      <source type="image/webp" media="(min-width: 1200px)"
        srcSet={`${path}@1x.webp 1x, ${path}@2x.webp 2x`} />
      <source type="image/jpeg" media="(min-width: 1200px)"
        srcSet={`${path}@1x.jpg 1x, ${path}@2x.jpg 2x`} />
      <source type="image/webp" media="(min-width: 768px)"
        srcSet={`${path}-lap@1x.webp 1x, ${path}-lap@2x.webp 2x`} />
      <source type="image/jpeg" media="(min-width: 768px)"
        srcSet={`${path}-lap@1x.jpg 1x, ${path}-lap@2x.jpg 2x`} />
      <source type="image/webp"
        srcSet={`${path}-mob@1x.webp 1x, ${path}-mob@2x.webp 2x`} />
      <source type="image/jpeg"
        srcSet={`${path}-mob@1x.jpg 1x, ${path}-mob@2x.jpg 2x`} />
      <img
        className={`${className}__image`} src={`${path}@1x.jpg`}
        width={(className === 'card') ? '630' : '270'}
        height={(className === 'card') ? '647' : '350'}
        alt={`${productName} - ${productType}`} />
    </picture>
  )
}

export default ProductImage;
