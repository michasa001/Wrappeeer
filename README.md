# WRAPPEEER

WRAPPEEER allows users to wrap native eth and erc20 tokens on the sepolia network.

URL: https://wrappeeer.vercel.app

![Screenshot_4](https://github.com/michasa001/Wrappeeer/assets/134693770/9ade4e25-4a3c-4249-b0e2-d039a2049be9)


Wrapped tokens are clones which are created from the original tokens of a user. The user has to deposit or lock the original tokens in a custodial(in this case a smart contract). But why cloning these tokens? Lets take sepolia; Native sepolia don't have the erc20 features, hence to perform erc20 interactions on the evm chain with sepolia, it has to be wrapped. The generated clone is of equal value as the sepolia deposited(locked). When the user is done with the wrapped tokens, the original sepolia can then be unlocked by burning the wrapped token.

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