import Link from 'components/Link'
import Root from 'components/Root'
import Text from 'components/Text'

export default function () {
  return (
    <Root>
      <Text>
        Sup! This is <Link url="https://borodutch.com">Nikita</Link>.
      </Text>
      <Text>You're here for my code templates, so here they are:</Text>
      <Text>
        <Link url="https://github.com/Borodutch/frontend-starter">
          Frontend starter
        </Link>
      </Text>
      <Text>
        <Link url="https://github.com/Borodutch/backend-starter">
          Backend starter
        </Link>
      </Text>
      <Text>
        <Link url="https://github.com/Borodutch/telegram-bot-starter">
          Telegram bot starter
        </Link>
      </Text>
      <Text>
        <Link url="https://github.com/T-Damer/discord-bot-template">
          Discord bot starter
        </Link>
      </Text>
      <Text>
        <Link url="https://github.com/Borodutch/smart-contract-starter">
          Solidity smart contract starter
        </Link>
      </Text>
      <Text>
        <Link url="https://github.com/backmeupplz/zk-starter">
          Zero-Knowledge with circom starter
        </Link>
      </Text>
      <Text>
        I try to keep them as updated as I can. However, if you have any
        questions or concerns, feel free to reach out to me on{' '}
        <Link url="https://t.me/borodutch">Telegram</Link>.
      </Text>
      <Text>Cheers!</Text>
    </Root>
  )
}
