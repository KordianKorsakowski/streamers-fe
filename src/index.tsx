import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './assets/GlobalStyles.styles';
import { ProviderGroup } from './containers/groupProvider';
import { CustomizedSnackbars } from './components/ui/components/Sanckbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryStremer = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ProviderGroup>
      <CustomizedSnackbars />
      <GlobalStyles />
      <QueryClientProvider client={queryStremer}>
        <App />
      </QueryClientProvider>
    </ProviderGroup>
  </BrowserRouter>
);
