import { FC } from 'react'
import {
  classnames,
  container,
  fontSize,
  fontWeight,
  margin,
  maxWidth,
  padding,
  textColor,
  textDecoration,
} from 'classnames/tailwind'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('pb-10', 'py-4'),
  maxWidth('max-w-4xl')
)

const bodyText = classnames(
  textColor('text-white'),
  fontSize('text-2xl', 'md:text-3xl'),
  fontWeight('font-bold'),
  margin('mb-4')
)
const BodyText: FC = ({ children }) => {
  return <p className={classnames(bodyText)}>{children}</p>
}

const link = classnames(textDecoration('underline'))
const Link: FC<{ url: string }> = ({ children, url }) => {
  return (
    <a href={url} target="_blank" className={link} rel="noopener noreferrer">
      {children}
    </a>
  )
}

const App = () => {
  return (
    <div className={root}>
      <BodyText>
        Sup! This is <Link url="https://borodutch.com">Nikita</Link>.
      </BodyText>
      <BodyText>You're here for my code templates, so here they are:</BodyText>
      <BodyText>
        <Link url="https://github.com/Borodutch/frontend-starter">
          Frontend starter
        </Link>
      </BodyText>
      <BodyText>
        <Link url="https://github.com/Borodutch/backend-starter">
          Backend starter
        </Link>
      </BodyText>
      <BodyText>
        <Link url="https://github.com/Borodutch/telegram-bot-starter">
          Telegram bot starter
        </Link>
      </BodyText>
      <BodyText>
        <Link url="https://github.com/T-Damer/discord-bot-template">
          Discord bot starter
        </Link>
      </BodyText>
      <BodyText>
        I try to keep them as updated as I can. However, if you have any
        questions or concerns, feel free to reach out to me on{' '}
        <Link url="https://t.me/borodutch">Telegram</Link>.
      </BodyText>
      <BodyText>Cheers!</BodyText>
    </div>
  )
}

export default App
