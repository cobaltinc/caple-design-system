import { Modal, Card, Header, Button } from '@caple-ui/react';

# Modal

Modal 컴포넌트는 모달, 팝업, 다이얼로그를 띄울 때 사용합니다.

## Examples

```jsx header=기본&nbsp;예제
() => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal visible={visible} onClose={() => setVisible(false)} closable>
        <div style={{padding: 50}}>
          <Header level={1}>This is modal</Header>
        </div>
      </Modal>
    </>
  );
}
```

## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** |  | ReactNode | - | true |
| **width** |  | number | 500 | false |
| **height** |  | number | - | false |
| **visible** |  | boolean | false | false |
| **closable** |  | boolean | true | false |
| **onClose** |  | () => void | - | false |
| **zIndex** |  | number | 1000 | false |
| **className** | 컴포넌트에 적용되는 className | string | - | false |
| **sttyle** | 컴포넌트에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
  }
`}</style>