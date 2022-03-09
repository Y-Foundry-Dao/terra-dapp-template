import App from './App';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

import ReactDOM from 'react-dom';

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById('root')
  );
});
