import { Tab, Header } from '@caple-ui/react';

# Tab

## Examples

```jsx header=기본&nbsp;예제
<Tab active="Tab 1">
  <Tab.Item title="Tab 1">
    <Header level={1}>Tab 1</Header>
  </Tab.Item>
  <Tab.Item title="Tab 2">
    <Header level={1}>Tab 2</Header>
  </Tab.Item>
</Tab>
```


## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **className** | 컴포넌트에 적용되는 className | string | - | false |
| **sttyle** | 컴포넌트에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
  }
`}</style>