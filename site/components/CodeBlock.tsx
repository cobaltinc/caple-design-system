import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';
import { mdx } from '@mdx-js/react';
import * as CapleUI from '@caple-ui/react';

interface Props {
  children: string;
  header?: string;
  live?: boolean;
  className?: string;
}

export default ({ children, header, live = true, className }: Props) => {
  const language = className?.replace(/language-/, '');
  const codeString = React.Children.toArray(children)
    .filter(element => {
      return typeof element === 'string';
    })
    .concat()
    .toString();

  if (live) {
    const footer = (
      <CapleUI.Collapse title="Code Editor" style={{ paddingTop: 18 }}>
        <LiveEditor style={{ outline: 'none', border: 'none', borderRadius: 4 }} />
        <LiveError />
      </CapleUI.Collapse>
    );
    return (
      <div style={{ marginBottom: 50 }}>
        <LiveProvider
          theme={theme}
          code={children.trim()}
          transformCode={code => '/** @jsx mdx */<div className="component-container">' + code + '</div>'}
          scope={{ mdx, ...CapleUI }}
        >
          <CapleUI.Card header={header} footer={footer} footerStyle={{ paddingLeft: 20, paddingRight: 20 }}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
              <LivePreview />
            </div>
          </CapleUI.Card>
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={codeString.trim()} language={language as Language}>
      {// tslint:disable-next-line: no-shadowed-variable
      ({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
