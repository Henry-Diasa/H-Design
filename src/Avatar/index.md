## Avatar

基础用法

> 头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

```tsx
import React from 'react';
import { Avatar, Icon } from 'H-Design';
const { IconUser } = Icon;
const App = () => {
  return (
    <div>
      <Avatar>A</Avatar>
      <Avatar style={{ backgroundColor: '#3370ff' }}>
        <IconUser />
      </Avatar>
      <Avatar style={{ backgroundColor: '#14a9f8' }}>xxx</Avatar>
      <Avatar style={{ backgroundColor: '#00d0b6' }}>yyy</Avatar>
    </div>
  );
};

export default App;
```
