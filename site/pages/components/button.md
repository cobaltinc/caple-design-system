import { Button } from '@caple-ui/react';

# Button

Button 컴포넌트는 범용적으로 사용되는 버튼입니다.

## Examples

Button 컴포넌트는 **basic**, **primary**, **destructive** 타입이 있습니다. **basic**은 일반적으로 사용되는 버튼입니다.
**primary**는 확인 버튼, 로그인 버튼 등 특수한 상황에 사용됩니다. **destructive**는 사용자의 행동이 위험할 수 있을 때 사용되는 버튼입니다.

```jsx header=타입&nbsp;예제
<>
  <Button type="basic">Basic</Button>
  <Button type="primary">Primary</Button>
  <Button type="destructive">Destructive</Button>
</>
```

Button 컴포넌트는 **mini**, **small**, **normal**, **lage**, **xlarge** 사이즈로 구성할 수 있습니다.

```jsx header=사이즈&nbsp;예제
<>
  <Button type="basic" size="mini">Mini</Button>
  <Button type="basic" size="small">Small</Button>
  <Button type="basic" size="normal">Normal</Button>
  <Button type="basic" size="large">Large</Button>
  <Button type="basic" size="xlarge">xLarge</Button>
</>
```

Disabled 상태가 되면 UI가 변경되고 **onClick** 이벤트가 동작하지 않습니다.

```jsx header=Disabled&nbsp;예제
<>
  <Button type="basic" disabled>Disabled Basic</Button>
  <Button type="primary" disabled>Disabled Primary</Button>
  <Button type="destructive" disabled>Disabled Destructive</Button>
</>
```

상황에 따라 Button 컴포넌트에 로딩 표시를 할 수 있습니다.

```jsx header=로딩&nbsp;예제
<>
  <Button type="basic" loading>Basic</Button>
  <Button type="primary" loading>Primary</Button>
  <Button type="destructive" loading>Destructive</Button>
</>
```

## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** | 내부 요소 | ReactNode | - | true |
| **type** | Button의 타입 | number | `basic` | false |
| **size** | Button의 크기 | `mini` \| `small` \| `normal` \| `large` \| `xlarge` | `normal` | false |
| **block** | true일 경우 display 속성이 block이 됨 | boolean | - | false |
| **disabled** | Disabled 상태 여부 | boolean | - | false |
| **loading** | 로딩 상태 여부 | boolean | - | false |
| **onClick** | 클릭하면 작동하는 이벤트 | (event: MouseEvent) => void | - | false |
| **className** | Badge에 적용되는 className | string | - | false |
| **style** | Badge에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    text-align: center;
  }

  .caple-button:not(:last-child) {
    margin-right: 50px;
  }
`}</style>