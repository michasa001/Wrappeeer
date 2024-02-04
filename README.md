# WRAPPEEER

WRAPPEEER allows users to wrap native eth and erc20 tokens on the sepolia network.

URL: https://wrappeeer.vercel.app

![Screenshot_4](https://github.com/michasa001/Wrappeeer/assets/134693770/9ade4e25-4a3c-4249-b0e2-d039a2049be9)


Wrapped tokens are essentially copies of original tokens, typically non-fungible or native tokens. To create wrapped tokens, users need to lock or deposit the original tokens into a custodial smart contract. In return, the smart contract mints an equivalent amount of wrapped tokens, usually conforming to the ERC-20 standard. The purpose of this process is to enable interactions with the wrapped tokens on the Ethereum Virtual Machine (EVM) chain and other blockchain platforms that require ERC-20 compatibility. These wrapped tokens retain the same value as the original tokens deposited. When users are finished with the wrapped tokens, they can unlock the original tokens by "burning" the wrapped tokens. This process makes it possible to bridge the functionality of non-standard or non-fungible tokens with standard ERC-20 tokens within the blockchain ecosystem.

There are four sections here, allowing you to wrap sepolia, unwrap sepolia, wrap mock tokens and unwrap it.

Check `packages/hardhat/contracts` to learn how the contracts work. 


## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Wrappeeer, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/michasa001/Wrappeeer.git
cd Wrappeeer
yarn install
```

4. On another terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`.