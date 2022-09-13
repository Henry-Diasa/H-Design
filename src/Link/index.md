## Link

基础用法

> 与按钮相比，链接不太突出，因此通常将其用作可选操作。

```tsx
import React from 'react';
import { Link } from 'H-Design';
const App = () => {
  return (
    <div>
      <Link href="#"> Link </Link>
      <Link href="#" disabled>
        Link
      </Link>
    </div>
  );
};

export default App;
```
