import { Popover, Text, Header, Button, Input } from '@caple-ui/react';

# Popover

## Examples

```jsx header=기본&nbsp;예제
<Popover content={<Text>Hello~</Text>}>
  <Button>Click me</Button>
</Popover>
```

```jsx header=Placement
() => {
  const content = (
    <div style={{width: 300, textAlign: 'left'}}>
      <Header level={3}>Form</Header>
      <Input.Text block placeholder="Email" style={{marginTop: 20}} />
      <Input.Password block placeholder="Password" style={{marginTop: 20}} />
      <Button type="primary" style={{marginTop: 20, float: 'right'}}>Submit</Button>
    </div>
  );
  return (
    <>
      <div>
        <Popover placement="topLeft" content={content}>
          <Button>Top Left</Button>
        </Popover>

        <Popover placement="top" content={content}>
          <Button>Top</Button>
        </Popover>

        <Popover placement="topRight" content={content}>
          <Button>Top Right</Button>
        </Popover>
      </div>

      <div style={{marginTop: 30}}>
        <Popover placement="leftTop" content={content}>
          <Button>Left Top</Button>
        </Popover>

        <Popover placement="left" content={content}>
          <Button>Left</Button>
        </Popover>

        <Popover placement="leftBottom" content={content}>
          <Button>Left Bottom</Button>
        </Popover>
      </div>

      <div style={{marginTop: 30}}>
        <Popover placement="bottomLeft" content={content}>
          <Button>Bottom Left</Button>
        </Popover>

        <Popover placement="bottom" content={content}>
          <Button>Bottom</Button>
        </Popover>

        <Popover placement="bottomRight" content={content}>
          <Button>Bottom Right</Button>
        </Popover>
      </div>

      <div style={{marginTop: 30}}>
        <Popover placement="rightTop" content={content}>
          <Button>Right Top</Button>
        </Popover>
        
        <Popover placement="right" content={content}>
          <Button>right</Button>
        </Popover>

        <Popover placement="rightBottom" content={content}>
          <Button>Right Bottom</Button>
        </Popover>
      </div>
    </>
  );
}
```

```jsx header=Trigger
<>
  <Popover content={<Text>Hello~</Text>}>
    <Button>Click me</Button>
  </Popover>

  <Popover content={<Text>Hello~</Text>}>
    <Button>Hover me</Button>
  </Popover>

  <Popover content={<Text>Hello~</Text>}>
    <Input.Text placeholder="Foucs me" />
  </Popover>
</>
```

## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** |  | ReactNode | - | true |

<style jsx global>{`
  .component-container {
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
  }

  .caple-popover:not(:last-child) {
    margin-right: 16px;
  }
`}</style>