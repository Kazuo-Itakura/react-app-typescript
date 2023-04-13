import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/Layout'
import 'flowbite'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
