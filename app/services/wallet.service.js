import wallet from '../utils/wallet';


export function formatNumber(number) {
  return number.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 8 });
}

export default {
  unlockWallet: (passPhrase, seconds, onlyStaking) => {
    return wallet.walletpassphrase(passPhrase, parseInt(seconds), parseInt(onlyStaking));
  },
  lockWallet: () => {
    return wallet.walletlock();
  },
  backupWallet: (path) => {
    return wallet.backupWallet(path);
  },
  importWallet: (walletPath) => {
    return wallet.importWallet(walletPath);
  },
  dumpPrivateKey: (walletAddress) => {
    return wallet.dumpPrivateKey(walletAddress);
  },
  changePassphase: (oldPassphase, newPassphase) => {
    return wallet.walletChangePassphrase(oldPassphase, newPassphase);
  }
};

