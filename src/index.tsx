import ReactDOM from 'react-dom';

import App from 'App';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import GlobalCss from 'styles/global.css';
import ThemeComponent from 'styles/ThemeComponent';

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <ThemeComponent>
        <GlobalCss />
        <App />
      </ThemeComponent>
    </WalletProvider>,
    document.getElementById('root')
  );
});
