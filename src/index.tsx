import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './assets/GlobalStyles.styles';
import { ProviderGroup } from './containers/groupProvider';
import { CustomizedSnackbars } from './components/ui/components/Sanckbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ProviderGroup>
      <CustomizedSnackbars />
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </ProviderGroup>
  </BrowserRouter>
);
