import { Text, Divider } from '@caple-ui/react';

# Divider

Divider 컴포넌트는

## Examples

```jsx header=Horizontal&nbsp;예제
<>
  <Text>Up</Text>
  <Divider />
  <Text>Down</Text>
</>
```

```jsx header=Vertical&nbsp;예제
<>
  <Text>Left</Text>
  <Divider type="vertical" />
  <Text>Right</Text>
</>
```

## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **type** |  | `horizontal` \| `vertical` | `vertical` | false |
| **className** | 컴포넌트에 적용되는 className | string | - | false |
| **sttyle** | 컴포넌트에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
  }
`}</style>