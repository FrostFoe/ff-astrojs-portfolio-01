import Image from 'next/image'
import type { ComponentProps } from 'react'

const MdxImage = (props: ComponentProps<typeof Image>) => {
  return <Image {...props} alt={props.alt} />
}

export default MdxImage
