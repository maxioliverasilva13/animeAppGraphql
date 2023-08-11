import "../styles/globals.css";
import { ApolloProvider, gql } from "@apollo/client";
import client from "../../apollo-client";
import Layout from "../components/Layout";
import { MotionLayoutProvider } from 'react-motion-layout';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MotionLayoutProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </MotionLayoutProvider>
    </ApolloProvider>
  );
}
