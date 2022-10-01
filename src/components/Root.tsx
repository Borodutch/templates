import ChildrenProp from 'models/ChildrenProp'
import classnames, {
  container,
  margin,
  maxWidth,
  padding,
} from 'classnames/tailwind'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('py-10', 'px-3'),
  maxWidth('max-w-4xl')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
