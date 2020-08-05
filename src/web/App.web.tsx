import React, {ReactElement} from 'react';
import Root from 'web/root';

const App = (): ReactElement => {
  console.log(`%c ->process.env.PUBLIC_URL=>`, 'color: orange', process.env.PUBLIC_URL);
  console.log(`%c ->process.env.NODE_ENV=>`, 'color: orange', process.env.NODE_ENV);

  console.log('WEB!@#');
  return (
    <div>
      <Root /> Web!!!
    </div>
  );
};

export default App;
