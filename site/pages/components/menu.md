import { Menu } from '@caple-ui/react';

# Menu

Menu 컴포넌트는 사이드 메뉴를 구성할 때 사용합니다.

## Examples

```jsx header=기본&nbsp;예제
<Menu>
  <Menu.Item title="Menu 1" />
  <Menu.Item title="Menu 2" />
  <Menu.Item title="Menu 3" />
  <Menu.Item title="Menu 4" />
  <Menu.Item title="Menu 5" />
</Menu>
```

```jsx header=Disabled&nbsp;예제
<Menu>
  <Menu.Item title="Menu 1" />
  <Menu.Item disabled title="Menu 2" />
  <Menu.Item title="Menu 3" />
  <Menu.Item disabled title="Menu 4" />
  <Menu.Item title="Menu 5" />
</Menu>
```

```jsx header=Active&nbsp;예제
<Menu>
  <Menu.Item title="Menu 1" />
  <Menu.Item active title="Menu 2" />
  <Menu.Item title="Menu 3" />
  <Menu.Item title="Menu 4" />
  <Menu.Item title="Menu 5" />
</Menu>
```

## Props

#### Menu
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** | `Menu.Item`만 가능 | ReactNode | - | false |
| **className** | 컴포넌트에 적용되는 className | string | - | false |
| **sttyle** | 컴포넌트에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
  }
`}</style>