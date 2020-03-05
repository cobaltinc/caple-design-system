import { Card, Checkbox, Header, Button, Input } from '@caple-ui/react';

# Card

Card 컴포넌트는

## Examples

```jsx header=기본&nbsp;예제
<Card>
  <div style={{textAlign: 'center', padding: 30}}>
    Card Content
  </div>
</Card>
```

```jsx header=Header&nbsp;예제
<Card header="This is Header">
  <div style={{textAlign: 'center', padding: 30}}>
    Card Content
  </div>
</Card>

<Card header={<Checkbox label="Custom Header" style={{margin: 20}} />} style={{marginTop: 50}}>
  <div style={{textAlign: 'center', padding: 30}}>
    Card Content
  </div>
</Card>
```

```jsx header=Footer&nbsp;예제
<Card
  header="Form"
  footerStyle={{textAlign: 'right'}}
  footer={
    <Button type="primary" style={{margin: 10}}>Save</Button>
  }>
  <div style={{textAlign: 'center', padding: 30}}>
    <Input.Text block placeholder="Please enter your email." style={{marginBottom: 10}} />
    <Input.Password block placeholder="Please enter your password." />
  </div>
</Card>
```

```jsx header=Collapse&nbsp;예제
<Card collapsible>
  <div style={{textAlign: 'center', padding: 30}}>
    <Header level={1}>Header 1</Header>
    <Header level={2}>Header 2</Header>
    <Header level={3}>Header 3</Header>
  </div>
</Card>

<Card header="Animatable" collapsible={{expand: true, animate: true}} style={{marginTop: 50}}>
  <div style={{textAlign: 'center', padding: 30}}>
    <Header level={1}>Header 1</Header>
    <Header level={2}>Header 2</Header>
    <Header level={3}>Header 3</Header>
  </div>
</Card>
```

```jsx header=Loading&nbsp;예제
<Card header="Loading..." loading>
  <div style={{textAlign: 'center', padding: 30}}>
    <Header level={1}>Header 1</Header>
    <Header level={2}>Header 2</Header>
    <Header level={3}>Header 3</Header>
  </div>
</Card>
```

## Props
#### Card
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** | 내부 요소 | ReactNode | - | true |
| **header** |  | string \| ReactNode | - | false |
| **footer** |  | ReactNode | - | false |
| **collapsible** |  | boolean \| CollapsibleConfig | - | false |
| **onOpen** |  | () => void | - | false |
| **onClose** |  | () => void | - | false |
| **loading** |  | boolean | - | false |
| **className** | 컴포넌트에 적용되는 className | string | - | false |
| **style** | 컴포넌트에 적용되는 style | CSSProperties | - | false |
| **headerClassName** | header에 적용되는 className | string | - | false |
| **headerStyle** | header에 적용되는 style | CSSProperties | - | false |
| **footerClassName** | footer에 적용되는 className | string | - | false |
| **footerStyle** | footer에 적용되는 style | CSSProperties | - | false |

#### CollapsibleConfig
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **expand** |  | boolean | - | true |
| **animate** |  | boolean | - | false |
| **caretColor** |  | string | - | false |

<style jsx global>{`
  .component-container {
    width: 60%;
    margin: 0 auto;
  }
`}</style>