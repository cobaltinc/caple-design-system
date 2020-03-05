import { Text, Link } from '@caple-ui/react';

# Link

Link 컴포넌트는 새 창을 띄우거나 다른 페이지로 이동할 때 사용합니다.

## Examples

```jsx header=기본&nbsp;예제
<Text>Caple Design System is an open-source design system built by <Link href="http://cobalt.run">Cobalt, Inc.</Link></Text>
```

Link 컴포넌트의 크기를 변경할 수 있습니다.

```jsx header=Size&nbsp;예제
<>
  <div>
    <Link href="https://design.caple.ai" size="small">https://design.caple.ai</Link>
  </div>

  <div style={{marginTop: 20}}>
    <Link href="https://design.caple.ai" size="normal">https://design.caple.ai</Link>
  </div>

  <div style={{marginTop: 20}}>
    <Link href="https://design.caple.ai" size="large">https://design.caple.ai</Link>
  </div>
</>
```

`disabled` 상태일 경우 링크가 동작하지 않습니다.

```jsx header=Disabled&nbsp;예제
<Link href="https://design.caple.ai" disabled>https://design.caple.ai</Link>
```


## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** |  | ReactNode | - | true |
| **size** |  | `small` \| `normal` \| `large` | `normal` | false |
| **href** |  | string | - | false |
| **disabled** |  | boolean | - | false |
| **onClick** |  | (event: MouseEvent) => void | - | false |
| **className** | 컴포넌트에 적용되는 className | string | - | false |
| **sttyle** | 컴포넌트에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
  }
`}</style>