const shortenWalletAddress = (walletAddress) => {
  let shortenedWalletAddress;
  let firstSix = walletAddress && walletAddress.substring(0, 6);
  let lastFour = walletAddress && walletAddress.slice(walletAddress.length - 4);

  shortenedWalletAddress = `${firstSix}...${lastFour}`;
  return shortenedWalletAddress;
}

export { shortenWalletAddress };