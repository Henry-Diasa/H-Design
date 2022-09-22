## Upload

> 用户可传输文件或提交相应的内容。

```tsx
import React from 'react';
import { Upload } from 'H-Design';

const App = () => {
  return (
    <div>
      <div>
        <Upload action="/" />
      </div>
      <div>
        <Upload action="/" disabled style={{ marginTop: 40 }} />
      </div>
    </div>
  );
};

export default App;
```
