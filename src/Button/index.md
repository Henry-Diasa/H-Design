## Button

基本用法

> 按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种

```tsx
import React from 'react';
import { Button } from 'H-Design';

const App = () => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="outline">中文</Button>
      <Button type="text">Text</Button>
    </div>
  );
};

export default App;
```
