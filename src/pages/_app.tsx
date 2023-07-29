import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Roboto } from 'next/font/google'
import { Container, Header } from '@/styles/pages/app';

import Image from 'next/image';

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] })

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image
          width={130}
          height={52} 
          priority
          src={"/logo.svg"} 
          alt="Shop Logo" 
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
