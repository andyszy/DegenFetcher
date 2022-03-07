const DegenFetcher = artifacts.require("DegenFetcher");

contract('DegenFetcher', (accounts) => {
  it('should guess the correct round for timestamp', async () => {

    // The below feedAddress is the BTC/USD price feed on Rinkeby
    // If testing on a network other than Rinkeby, substitute the appropriate Chainlink feed address
    // along with correct values for testTimestamp and correctSearchRound below.
    let feedAddress = '0xECe365B379E1dD183B20fc5f022230C044d51404';
    let testTimestamp = '1637625600'; // Nov 23, 2021
    let correctSearchRound = 36893488147419117426n;

    const fetcher = await DegenFetcher.deployed();
    const answer = await fetcher.guessSearchRoundsForTimestamp.call(feedAddress, testTimestamp, 1);

    let fromRound = BigInt(answer[0]);
    let numRoundsToSearch = BigInt(answer[1]);
    assert.equal(fromRound, correctSearchRound, "Guessed wrong search round");
    assert.equal(numRoundsToSearch, 47n, "Guessed wrong number of rounds to search");
  });

  it('should return the correct price data', async () => {
    // The below feedAddress is the ETH/USD price feed on Rinkeby
    // If testing on a network other than Rinkeby, substitute the appropriate Chainlink feed address
    // along with correct values for testTimestamp and correctSearchRound below.
    let feedAddress = '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e';
    let testTimestamp = '1639180800'; // Dec 11, 2021
    let dataPointsToFetch = 48;
    
    const fetcher = await DegenFetcher.deployed();
    const prices = await fetcher.fetchPriceData.call(feedAddress, testTimestamp, 1, dataPointsToFetch);    

    assert.equal(prices[0], 3915, "First price should be 3915");
    assert.equal(prices[1], 3956, "First price should be 3956");

    // console.log(prices);
    // console.log(prices.map((e) => BigInt(e).toString()));
  });


});
