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

图标按钮

> Button 可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等。

```tsx
import React from 'react';
import { Button } from 'H-Design';

const App = () => {
  return <div>Delete</div>;
};

export default App;
```

按钮形状

```tsx
import React from 'react';
import { Button } from 'H-Design';

const App = () => {
  return (
    <div>
      <Button type="primary">+</Button>
      <Button shape="circle" type="primary">
        -
      </Button>
      <Button shape="round" type="primary">
        Primary
      </Button>
      <Button type="primary">Primary</Button>
    </div>
  );
};

export default App;
```

按钮尺寸

```tsx
import React from 'react';
import { Button } from 'H-Design';

const App = () => {
  return (
    <div>
      <Button size="mini" type="primary">
        Mini
      </Button>
      <Button size="small" type="primary">
        Small
      </Button>
      <Button size="default" type="primary">
        Default
      </Button>
      <Button size="large" type="primary">
        Large
      </Button>
    </div>
  );
};

export default App;
```

按钮状态

```tsx
import React from 'react';
import { Button } from 'H-Design';

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <Button type="primary" status="warning">
        Warning
      </Button>
      <Button status="warning">Warning</Button>
      <Button type="outline" status="warning">
        Warning
      </Button>
      <Button type="text" status="warning">
        Warning
      </Button>

      <Button type="primary" status="danger">
        Danger
      </Button>
      <Button status="danger">Danger</Button>
      <Button type="outline" status="danger">
        Danger
      </Button>
      <Button type="text" status="danger">
        Danger
      </Button>

      <Button type="primary" status="success">
        Success
      </Button>
      <Button status="success">Success</Button>
      <Button type="outline" status="success">
        Success
      </Button>
      <Button type="text" status="success">
        Success
      </Button>
    </div>
  );
};

export default App;
```

禁用按钮

```tsx
import React from 'react';
import { Button } from 'H-Design';

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <Button disabled type="primary" status="warning">
        Warning
      </Button>
      <Button disabled status="warning">
        Warning
      </Button>
      <Button disabled type="outline" status="warning">
        Warning
      </Button>
      <Button disabled type="text" status="warning">
        Warning
      </Button>

      <Button disabled type="primary" status="danger">
        Danger
      </Button>
      <Button disabled status="danger">
        Danger
      </Button>
      <Button disabled type="outline" status="danger">
        Danger
      </Button>
      <Button disabled type="text" status="danger">
        Danger
      </Button>

      <Button disabled type="primary" status="success">
        Success
      </Button>
      <Button disabled status="success">
        Success
      </Button>
      <Button disabled type="outline" status="success">
        Success
      </Button>
      <Button disabled type="text" status="success">
        Success
      </Button>
    </div>
  );
};

export default App;
```
