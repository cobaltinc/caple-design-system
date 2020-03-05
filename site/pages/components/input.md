import { Input } from '@caple-ui/react';

# Input

## Examples

```jsx header=borderType&nbsp;예제
<>
  <Input.Text block placeholder="Please enter your name." />
  <Input.Text block borderType="underline" placeholder="Please enter your name." />
</>
```

```jsx header=Size&nbsp;예제
<>
  <Input.Text block size="mini" placeholder="Please enter your name." />
  <Input.Text block size="small" placeholder="Please enter your name." />
  <Input.Text block size="normal" placeholder="Please enter your name." />
  <Input.Text block size="large" placeholder="Please enter your name." />
  <Input.Text block size="xlarge" placeholder="Please enter your name." />
</>
```

```jsx header=Disabled&nbsp;예제
<>
  <Input.Text block disabled defaultValue="Lee Sun-Hyoup" />
  <Input.Text block disabled borderType="underline" defaultValue="Lee Sun-Hyoup" />
</>
```

```jsx header=Prefix,&nbsp;Subfix&nbsp;예제
<>
  <Input.Text block prefix="PREFIX" placeholder="Please enter your name." />
  <Input.Text block subfix={<Icon type="reload" />} placeholder="Please enter your name." />
</>
```

```jsx header=Loading&nbsp;예제
<>
  <Input.Text block loading />
  <Input.Text block loading borderType="underline" />
</>
```

```jsx header=Input.Text&nbsp;예제
<Input.Text placeholder="Please enter your name." />
```

```jsx header=blocks&nbsp;예제
<Input.Text placeholder="Please enter your business number. (12-345678-901)" blocks={[2,6,3]} delimiter="-" />
```

```jsx header=Input.Number&nbsp;예제
<Input.Number align="right" subfix="원" placeholder="당신의 총 자산을 입력해주세요" />
```

```jsx header=Input.PhoneNumber&nbsp;예제
<Input.PhoneNumber prefix="+82" regionCode="kr" placeholder="Please enter your phone number. (010-1234-5678)" />
```

```jsx header=Input.Password&nbsp;예제
<Input.Password toggle={true} placeholder="Please enter your password." />
```

```jsx header=Input.Textarea&nbsp;예제
<Input.Textarea rows={3} placeholder="Please enter your story." />
```
```jsx header=Input.Textarea&nbsp;Autosize&nbsp;예제
<Input.Textarea autoSize placeholder="Please enter your story." />
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

  .caple-input--container:not(:last-child) {
    margin-bottom: 20px;
  }
`}</style>