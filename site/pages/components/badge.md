import { Badge, Icon } from '@caple-ui/react';

# Badge

Badge 컴포넌트는 변화를 알려주는 상태 표시기입니다. 확인하지 않은 알림 수를 알려주거나 새 소식이 도착했을 때 사용됩니다.

## Examples

Badge 컴포넌트는 **count** 속성의 숫자를 통해 상태를 보여줄 수 있습니다. 또한, **maxCount** 속성을 통해 UI에 보여줄 수를 정할 수 있습니다. 이 때 **maxCount** 값을 넘어설 경우 숫자 뒤에 +가 붙습니다.

```jsx header=기본&nbsp;예제
<>
  <Badge count={100}>
    <Avatar shape="square" />
  </Badge>

  <Badge count={1000} maxCount={999}>
    <Avatar shape="square" />
  </Badge>

  <Badge count={0}>
    <Avatar shape="square" />
  </Badge>

  <Badge count={0} showZero>
    <Avatar shape="square" />
  </Badge>
</>
```

숫자가 필요없이 단순히 상태만 보여주고 싶을 경우 `dot` 속성을 사용할 수 있습니다.

```jsx header=Dot&nbsp;예제
<>
  <Badge dot>
    <Avatar size={40} shape="square" />
  </Badge>

  <Badge dot>
    <Icon size={20} type="android" color="#A4C639" />
  </Badge>

  <Badge dot>
    <Icon size={20} type="apple" color="#555555" />
  </Badge>
</>
```

상황에 따라 배경색과 텍스트 색상 변경이 가능합니다.

```jsx header=색상&nbsp;변경&nbsp;예제
<>
  <Badge count={12} backgroundColor="#330202" textColor="white">
    <Avatar size={40} shape="square" />
  </Badge>

  <Badge count={24} backgroundColor="#5C6AC4" textColor="white">
    <Avatar size={40} shape="square" />
  </Badge>

  <Badge count={36} backgroundColor="#B4E0FA" textColor="black">
    <Avatar size={40} shape="square" />
  </Badge>
</>
```

## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** | 내부 요소 | ReactNode | - | true |
| **count** | Badge에 표시될 숫자 | number | - | false |
| **showZero** | count가 0일 경우 보여줄지 여부 | boolean | false | false |
| **maxCount** | Bdage에 표시될 최대 숫자 | number | - | false |
| **dot** | Badge에 작은 점으로 표시됨 | boolean | - | false |
| **backgroundColor** | Badge의 배경색 | string | #DE3618 | false |
| **textColor** | Badge의 배경색 | string | #FFFFFF | false |
| **className** | Badge에 적용되는 className | string | - | false |
| **style** | Badge에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    text-align: center;
  }

  .caple-badge--container:not(:last-child) {
    margin-right: 50px;
  }
`}</style>