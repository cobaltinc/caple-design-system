import { Select } from '@caple-ui/react';

# Select

## Examples

```jsx header=기본&nbsp;예제
<Select placeholder="Choose one">
  <Select.Option>Option 1</Select.Option>
  <Select.Option>Option 2</Select.Option>
  <Select.Option disabled>Option 3</Select.Option>
  <Select.Option>Option 4</Select.Option>
</Select>
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