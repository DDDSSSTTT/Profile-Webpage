import React from 'react';

function App() {
  const list = [{ id: 'name', name: 'Stein Ding' },
    { id: 'mobile', name: '8583195042' },
    { id: 'email', name: 'dingst97@gmail.com' }];

  return (
    <div>
      <u1>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </u1>
    </div>
  );
}

export default App;
