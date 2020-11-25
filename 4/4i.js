const amountToCoins = (amount, coins) => coins.sort((a, b) => b - a).flatMap(coin => {
  const coinCount = Math.floor(amount / coin);
  amount = amount % coin;

  return Array(coinCount).fill(coin);
});

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));