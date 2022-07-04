import { textDecoration } from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const link = textDecoration('underline')
export default function ({ children, url }: { url: string } & ChildrenProp) {
  return (
    <a href={url} target="_blank" className={link} rel="noopener noreferrer">
      {children}
    </a>
  )
}
