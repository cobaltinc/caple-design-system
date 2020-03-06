import { Avatar } from '@caple-ui/react';

# Avatar

Avatar 컴포넌트는 사람 또는 사물을 대표 이미지 혹은 문자로 나타낼 수 있습니다. 대표적으로 프로필 이미지 등에 사용할 수 있습니다.

## Examples

**src** 속성을 이용하여 이미지 Avatar 컴포넌트를 구성할 수 있습니다. 동시에 **size** 속성을 통해 이미지 크기를 정할 수 있습니다.

```jsx header=이미지&nbsp;아바타&nbsp;예제
<>
  <Avatar src="https://avatars0.githubusercontent.com/u/3623695?s=460&v=4" />
  <Avatar size={60} src="https://avatars0.githubusercontent.com/u/3623695?s=460&v=4" />
  <Avatar size={40} src="https://avatars0.githubusercontent.com/u/3623695?s=460&v=4" />
  <Avatar size={20} src="https://avatars0.githubusercontent.com/u/3623695?s=460&v=4" />
</>
```

만약 이미지가 없으면 대표하는 텍스트를 통해 Avatar 컴포넌트를 만들 수 있습니다.

```jsx header=텍스트&nbsp;아바타&nbsp;예제
<>
  <Avatar text="이선협" />
  <Avatar text="kciter" />
  <Avatar size={40} text="이선협" />
  <Avatar size={40} text="kciter" />
</>
```

Avatar 컴포넌트는 `shape` 속성을 통해 사각형과 원 모양으로 만들 수 있습니다.

```jsx header=모양&nbsp;예제
<>
  <Avatar shape="square" src="https://avatars0.githubusercontent.com/u/3623695?s=460&v=4" />
  <Avatar shapr="circle" src="https://avatars0.githubusercontent.com/u/3623695?s=460&v=4" />
</>
```

## Props
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **size** | Avatar의 크기 | number | 80 | true |
| **shape** | Avatar의 모양 | `circle` \| `square` | circle | true |
| **src** | Image Avatar에 적용되는 이미지 주소 | number | - | false |
| **text** | Text Avatar에 적용되는 텍스트 | string | - | false |
| **alt** | Image Avatar에 적용되는 Alternate | string | - | false |
| **className** | Avatar에 적용되는 className | string | - | false |
| **style** | Avatar에 적용되는 style | CSSProperties | - | false |{header="Avatar"}

<style jsx global>{`
  .component-container {
    text-align: center;
  }

  .caple-avatar:not(:last-child) {
    margin-right: 20px;
  }
`}</style>