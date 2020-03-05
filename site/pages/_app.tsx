import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';
import { Header, Text, Divider, Table, Card } from '@caple-ui/react';
import Layout from '@components/Layout';
import CodeBlock from '@components/CodeBlock';

export default ({ Component, pageProps }: AppProps) => {
  const mdComponents: MDXProviderComponents = {
    h1: props => <Header level={1} strong style={{ marginBottom: 40 }} {...props} />,
    h2: props => <Header level={2} style={{ marginTop: 50, marginBottom: 24 }} {...props} />,
    h3: props => <Header level={3} style={{ marginTop: 30, marginBottom: 16 }} {...props} />,
    h4: props => <Header level={4} style={{ marginTop: 30, marginBottom: 16 }} {...props} />,
    p: props => <Text style={{ marginTop: 20, marginBottom: 20 }} paragraph {...props} />,
    strong: props => <Text strong {...props} />,
    em: props => <Text mark {...props} />,
    inlineCode: props => <Text code {...props} />,
    hr: () => <Divider />,
    table: props => (
      <Card style={{ padding: 20, marginBottom: 50 }}>
        <Table {...props} />
      </Card>
    ),
    thead: (props: any) => <Table.Head {...props} />,
    tbody: (props: any) => <Table.Body {...props} />,
    tr: props => <Table.Row {...props} />,
    td: props => <Table.Cell {...props} />,
    code: CodeBlock,
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
        <meta name="description" content="Caple Design System." />
        <meta name="keywords" content="cobalt,caple,design,react" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Caple Design System</title>
      </Head>

      <Layout>
        <MDXProvider components={mdComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </>
  );
};
