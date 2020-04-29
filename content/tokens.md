
# Tokens

## Australian Dollars (sAUD)

**Address:** [THaX5DngVKogRLFhJAdZhbDyi9Ly9aXPxM](https://tronscan.io/#/address/THaX5DngVKogRLFhJAdZhbDyi9Ly9aXPxM)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Australian Dollars (AUD) through price feeds supplied by an oracle.

## Bitcoin (sBTC)

**Address:** [TLqpjweb7VzQTwN5Es4aC1g5zJetNVdeKN](https://tronscan.io/#/address/TLqpjweb7VzQTwN5Es4aC1g5zJetNVdeKN)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Bitcoin (BTC) through price feeds supplied by an oracle.

## Ether (sETH)

**Address:** [TW7HwUGDnWzRYbqF72tNMBMT9H6mz5aAsM](https://tronscan.io/#/address/TW7HwUGDnWzRYbqF72tNMBMT9H6mz5aAsM)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Ether (ETH) through price feeds supplied by an oracle.

## Euros (sEUR)

**Address:** [TKeieYHfR8tVAMxzEvGiVwE3SdBUniRHXA](https://tronscan.io/#/address/TKeieYHfR8tVAMxzEvGiVwE3SdBUniRHXA)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Euros (EUR) through price feeds supplied by an oracle.

## Inverted Bitcoin (iBTC)

**Address:** [TSyJxmT6ALc8f6jkUEriguM3CBgoox9i3o](https://tronscan.io/#/address/TSyJxmT6ALc8f6jkUEriguM3CBgoox9i3o)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sBTC](#bitcoin-sbtc)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $10,600 | $15,900 | $5,300|

>Inversely tracks the price of Bitcoin (BTC) through price feeds supplied by an oracle. The entry point is $10600 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $15900 (i.e. when Bitcoin's value reaches $5300) or its lower limit of $5300 (i.e. when Bitcoin’s value reaches $15900). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iBTC with different limits.

## Inverted Ether (iETH)

**Address:** [TPS2gHrpN1rdX91WCFJmhUwFiKjk3AKYEe](https://tronscan.io/#/address/TPS2gHrpN1rdX91WCFJmhUwFiKjk3AKYEe)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sETH](#ether-seth)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $220 | $330 | $110|

>Inversely tracks the price of Ether (ETH) through price feeds supplied by an oracle. The entry point is $220 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $330 (i.e. when Ether's value reaches $110) or its lower limit of $110 (i.e. when Ether’s value reaches $330). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iETH with different limits.

## Inverted Tron (iTRX)

**Address:** [TDGUNpmWjH5M3DJUXgpKSqH1NMsvbxgQPg](https://tronscan.io/#/address/TDGUNpmWjH5M3DJUXgpKSqH1NMsvbxgQPg)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sTRX](#tron-strx)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $0.01500 | $0.10000 | $0.00500|

>Inversely tracks the price of Tron (TRX) through price feeds supplied by an oracle. The entry point is $0.015 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $0.1 (i.e. when Tron's value reaches $-0.1) or its lower limit of $0.005 (i.e. when Tron’s value reaches $0.025). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iTRX with different limits.

## Oikos (OKS)

**Address:** [TRWtzcjYrPkkiFUwxgs3ataxtwcCvn2nS5](https://tronscan.io/#/address/TRWtzcjYrPkkiFUwxgs3ataxtwcCvn2nS5)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>The Oikos Network Token (OKS) gets staked as collateral to back Synths and entitles stakers to receive fees generated by Synth trades on Oikos.Exchange.

## Pound Sterling (sGBP)

**Address:** [TYfGHAoUr5PZPQBP9broGXg5uLqvULNdRK](https://tronscan.io/#/address/TYfGHAoUr5PZPQBP9broGXg5uLqvULNdRK)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Pound Sterling (GBP) through price feeds supplied by an oracle.

## Swiss Franc (sCHF)

**Address:** [TTP7Gw3JmYKDogxv5R94KMzroqc3eM2isM](https://tronscan.io/#/address/TTP7Gw3JmYKDogxv5R94KMzroqc3eM2isM)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Swiss Franc (CHF) through price feeds supplied by an oracle.

## TRON (sTRX)

**Address:** [TAJYP91N4HbFSHFbaENvDfEa4kPEgcz4Kg](https://tronscan.io/#/address/TAJYP91N4HbFSHFbaENvDfEa4kPEgcz4Kg)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of TRON (TRX) through price feeds supplied by an oracle.

## US Dollars (sUSD)

**Address:** [TNSFtugghgaW5YGef6E6vvhTYjnnNZRDmM](https://tronscan.io/#/address/TNSFtugghgaW5YGef6E6vvhTYjnnNZRDmM)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of a single US Dollar (USD). This Synth always remains constant at 1.}

