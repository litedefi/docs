
# Tokens

## Australian Dollars (sAUD)

**Address:** [TFDj7DsePURcKrGPuWjCwij9UVov7tF7pQ](https://tronscan.io/#/address/TFDj7DsePURcKrGPuWjCwij9UVov7tF7pQ)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Australian Dollars (AUD) through price feeds supplied by an oracle.

## Bitcoin (sBTC)

**Address:** [TTpwHqjjoRDr3TM4GTXgGtJsDFgUKuFVgw](https://tronscan.io/#/address/TTpwHqjjoRDr3TM4GTXgGtJsDFgUKuFVgw)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Bitcoin (BTC) through price feeds supplied by an oracle.

## Ether (sETH)

**Address:** [TCfzefvtqD29ziQBWvoQHN3q5wxB1UtNeB](https://tronscan.io/#/address/TCfzefvtqD29ziQBWvoQHN3q5wxB1UtNeB)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Ether (ETH) through price feeds supplied by an oracle.

## Euros (sEUR)

**Address:** [TFNhdyaDdmdbFiTB31RcmTHtJcHMQS2xaJ](https://tronscan.io/#/address/TFNhdyaDdmdbFiTB31RcmTHtJcHMQS2xaJ)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Euros (EUR) through price feeds supplied by an oracle.

## Inverted Bitcoin (iBTC)

**Address:** [TJXVjb9D5SDdgNTbXwbU8ak23nNPu6AN46](https://tronscan.io/#/address/TJXVjb9D5SDdgNTbXwbU8ak23nNPu6AN46)

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

**Address:** [TFviwDaenXS2gTapHaP12xJFJJWWTRfkRf](https://tronscan.io/#/address/TFviwDaenXS2gTapHaP12xJFJJWWTRfkRf)

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

**Address:** [TRSUaXyP3MsHxmRTCoxjQKDjkZ1Gj1qgm9](https://tronscan.io/#/address/TRSUaXyP3MsHxmRTCoxjQKDjkZ1Gj1qgm9)

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

**Address:** [TR9VosbSynm5nNue7ksp8zqovCudHJNnn4](https://tronscan.io/#/address/TR9VosbSynm5nNue7ksp8zqovCudHJNnn4)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>The Oikos Network Token (OKS) gets staked as collateral to back Synths and entitles stakers to receive fees generated by Synth trades on Oikos.Exchange.

## Pound Sterling (sGBP)

**Address:** [TV97Uz6wbEAuM4kVEMC7L7URCZoZ5g9ZXZ](https://tronscan.io/#/address/TV97Uz6wbEAuM4kVEMC7L7URCZoZ5g9ZXZ)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Pound Sterling (GBP) through price feeds supplied by an oracle.

## Swiss Franc (sCHF)

**Address:** [TW1CG8LiaFkEJANV8SEDa45DZBnCmKPtTW](https://tronscan.io/#/address/TW1CG8LiaFkEJANV8SEDa45DZBnCmKPtTW)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Swiss Franc (CHF) through price feeds supplied by an oracle.

## TRON (sTRX)

**Address:** [TFGdARAi6tDymvFBes5Qajhaf67ysSmwKz](https://tronscan.io/#/address/TFGdARAi6tDymvFBes5Qajhaf67ysSmwKz)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of TRON (TRX) through price feeds supplied by an oracle.

## US Dollars (sUSD)

**Address:** [TY46yPvHK4vunZDFhiQpeGpK8qy9zY4RCX](https://tronscan.io/#/address/TY46yPvHK4vunZDFhiQpeGpK8qy9zY4RCX)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of a single US Dollar (USD). This Synth always remains constant at 1.}

