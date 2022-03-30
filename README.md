# DegenFetcher

Easily get historical data from Chainlink feeds
 
## About DegenFetcher
 
DegenFetcher is a Solidity smart contract that serves as a bridge between conventional timestamps (e.g. "Aug 6, 2020, 12:00am") and Chainlink round IDs. While Chainlink doesn't natively support fetching historical data by timestamp, DegenFetcher bridges this gap. It uses a binary search algorithm to repeatedly fetching timestamps for various round IDs from a Chainlink aggregator. When it's identified the correct rounds of Chainlink data, it culls the data to the desired density; e.g. one price point every 30 minutes.

DegenFetcher accepts the following parameters:
* Starting timestamp
* Duration (e.g. 1 day)
* Density (e.g. 48 data points per day)
* Address of any [Chainlink feed](https://medium.com/r?url=https%3A%2F%2Fdocs.chain.link%2Fdocs%2Fethereum-addresses%2F); e.g. ETH/USD, DOGE/USD, EUR/USD

## Degen Blues

DegenFetcher was created for use in [Degen Blues](https://degenblues.xyz/), a dynamic music NFT project based on Ethereum price data.

## Deployment

The source code for DegenFetcher.sol has been deployed to:

* Ethereum Mainnet:
  * [0xD32Fb8BF0DecC9A80968E480694Fa60e3E91895C](https://etherscan.io/address/0xd32fb8bf0decc9a80968e480694fa60e3e91895c#code)
* Rinkeby:
  * [0x92A7Ce844A0f0C4773162fFa1Cd3995FBD567770](https://rinkeby.etherscan.io/address/0x92A7Ce844A0f0C4773162fFa1Cd3995FBD567770#code)

For each of the deployed contracts above, you can click on the *Read Contract* tab to test out the functions.

## Contact

Have questions? Need support? Just want to share something cool you're working on? Feel free to get in touch via the [Degen Blues discord server](https://discord.gg/uNRDNVRe9U)
