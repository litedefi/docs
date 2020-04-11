Here is the list of all contracts within the current Oikos system.

**Version**: [v0.0.2](https://github.com/oikos-cash/oikos/tree/v0.0.2)

**Docs Built**: Apr 10, 2020

!!! info "Naming Conventions"
	Within the developer ecosystem, the names of Oikos contracts are referred to by their `source` Solidity file.If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol` - then the convention is to suffix the name of the differing feature to the end - be it the proxy target e.g. `FeePool` for `ProxyFeePool` or the synth currencyKey eg: `sTRX` for `SynthsTRX`

!!! tip "Handy Contract Links"
	All of the below contracts can be accessed by our [contract linker](https://github.com/Synthetixio/contract-linker) utility. Simply suffix the contract name to the end of https://contracts.oikos.cash to get a link that will always redirect to the latest version of the contract on Tronscan.

	For example, try https://contracts.oikos.cash/Oikos to get linked to the latest Oikos underlying.

	For testnets, insert the testnet name before the contract, as in https://contracts.oikos.cash/kovan/Oikos

 
## SHASTA Contracts
<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>
              <tr>
                <td>ArbRewarder</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ArbRewarder.sol">ArbRewarder.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ArbRewarder.json">ArbRewarder.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/419ed32faced9e3b69e5798b959785120221bb531d">419ed32faced9e3b69e5798b959785120221bb531d</a>
                </td>
              </tr>
              <tr>
                <td>DappMaintenance</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/DappMaintenance.sol">DappMaintenance.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/DappMaintenance.json">DappMaintenance.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/417f988fbfcbc8afc8f6899a0dac64cfe53ee011f2">417f988fbfcbc8afc8f6899a0dac64cfe53ee011f2</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415573bc20cc97f1ca16f153ea31bc510105df40ca">415573bc20cc97f1ca16f153ea31bc510105df40ca</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41098ababa0bb41abf9dc63e340d917cfb4e1337ce">41098ababa0bb41abf9dc63e340d917cfb4e1337ce</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/EscrowChecker.json">EscrowChecker.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4168931fa3d5bd7862173e64d10985f6853a28a1bb">4168931fa3d5bd7862173e64d10985f6853a28a1bb</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/417723835607557318f23996d0f398d1f8b6a78bd7">417723835607557318f23996d0f398d1f8b6a78bd7</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/FeePool.json">FeePool.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41a0ccf8537200f3833a4b8aec84871d0c714c3cbf">41a0ccf8537200f3833a4b8aec84871d0c714c3cbf</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/FeePoolEternalStorage.json">FeePoolEternalStorage.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4131a66e725397a2393d1599c7c49be522ba37fcc5">4131a66e725397a2393d1599c7c49be522ba37fcc5</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/FeePoolState.json">FeePoolState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41626d17020ce2f34a4b5b3edcecd7f22d8bf7fe41">41626d17020ce2f34a4b5b3edcecd7f22d8bf7fe41</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e90ca52ebf82c295d79024076d37b6c5c604e172">41e90ca52ebf82c295d79024076d37b6c5c604e172</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4132fb27b9fd741abca8c5189f3f7804a3d28e24f4">4132fb27b9fd741abca8c5189f3f7804a3d28e24f4</a>
                </td>
              </tr>
              <tr>
                <td>ProxySynthetix</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/411d300ced0731d46822b55ca0b40061f0ab9683c7">411d300ced0731d46822b55ca0b40061f0ab9683c7</a>
                </td>
              </tr>
              <tr>
                <td>ProxyXDR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415e9c5794f9505ca97c323296cbc50fcc3447e921">415e9c5794f9505ca97c323296cbc50fcc3447e921</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4104f261435e1657c3ffd546970109d6cfbe297963">4104f261435e1657c3ffd546970109d6cfbe297963</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/416f04a9377cb5314440389959d823dde7aa81393c">416f04a9377cb5314440389959d823dde7aa81393c</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4193acf9adc872f9b17baff79e0f5fefa2a0653093">4193acf9adc872f9b17baff79e0f5fefa2a0653093</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiCEX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e039138fdb99d16c15d1671805945b6543e4f9a2">41e039138fdb99d16c15d1671805945b6543e4f9a2</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiDEFI</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/413e8d8b74b6e35dc7bac51c71b24e370707056125">413e8d8b74b6e35dc7bac51c71b24e370707056125</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41fb714652d6193f2243002a5952ee66d7509b23ce">41fb714652d6193f2243002a5952ee66d7509b23ce</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLINK</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4185f45891894d62d9f4880559866709d35fc56847">4185f45891894d62d9f4880559866709d35fc56847</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiLTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41cb3164f2072b06fc3b61568a1df32f53df8b4db2">41cb3164f2072b06fc3b61568a1df32f53df8b4db2</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiMKR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e739c88954af704a6e23e019daf8e8330d1db6e8">41e739c88954af704a6e23e019daf8e8330d1db6e8</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiTRX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41fdba43983964e67623a2a491710c3deaf8580e55">41fdba43983964e67623a2a491710c3deaf8580e55</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXRP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/418334e836bcf277a3eb6dcfb4e38bd2c9d0b70d87">418334e836bcf277a3eb6dcfb4e38bd2c9d0b70d87</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiXTZ</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41b8f10c41942126c773ce2b85a981dc873acefc40">41b8f10c41942126c773ce2b85a981dc873acefc40</a>
                </td>
              </tr>
              <tr>
                <td>ProxysAUD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41ebb444fc83bbdc137bf23cd2d699583f26e5e24c">41ebb444fc83bbdc137bf23cd2d699583f26e5e24c</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41b34c0d9dd110abf994e8d26534845ab8fb5dbd03">41b34c0d9dd110abf994e8d26534845ab8fb5dbd03</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4191bb613fbc39010b69654e368f59af1b1225cc3b">4191bb613fbc39010b69654e368f59af1b1225cc3b</a>
                </td>
              </tr>
              <tr>
                <td>ProxysBTT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41869e068206f3a9197c5ba6e1501a51d2169301c0">41869e068206f3a9197c5ba6e1501a51d2169301c0</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCEX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/417a73eba77d5c53f3a6d325fcdd462e39f6374eb5">417a73eba77d5c53f3a6d325fcdd462e39f6374eb5</a>
                </td>
              </tr>
              <tr>
                <td>ProxysCHF</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41751cfd43741cbcbde2e3281dbf6dc4970d733d58">41751cfd43741cbcbde2e3281dbf6dc4970d733d58</a>
                </td>
              </tr>
              <tr>
                <td>ProxysDEFI</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4188482b9c35ea358c356595299cad4ea9433a48e0">4188482b9c35ea358c356595299cad4ea9433a48e0</a>
                </td>
              </tr>
              <tr>
                <td>ProxysETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41cdb6ce98bf43737fdb55a696efbc25581bb2bdce">41cdb6ce98bf43737fdb55a696efbc25581bb2bdce</a>
                </td>
              </tr>
              <tr>
                <td>ProxysEUR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/418bf6e0f33dc5a0d09e88a6b2fa107d47af226851">418bf6e0f33dc5a0d09e88a6b2fa107d47af226851</a>
                </td>
              </tr>
              <tr>
                <td>ProxysGBP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4107a530f23d1810774491bd236d8975128e86b155">4107a530f23d1810774491bd236d8975128e86b155</a>
                </td>
              </tr>
              <tr>
                <td>ProxysJPY</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4153cff94c2637ae3a917f8d06ae5c82f13f33f21b">4153cff94c2637ae3a917f8d06ae5c82f13f33f21b</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLINK</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4113ccbdc837f1f041a81f284bcc73e3ee78bb1945">4113ccbdc837f1f041a81f284bcc73e3ee78bb1945</a>
                </td>
              </tr>
              <tr>
                <td>ProxysLTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/414d48b922113fa0fd8f4cee7132632e665c5d927a">414d48b922113fa0fd8f4cee7132632e665c5d927a</a>
                </td>
              </tr>
              <tr>
                <td>ProxysMKR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4145c048666969a076283e020130cf0812cbf14cb9">4145c048666969a076283e020130cf0812cbf14cb9</a>
                </td>
              </tr>
              <tr>
                <td>ProxysTRX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41056c4b3c825e6220784a640945e11a563f129722">41056c4b3c825e6220784a640945e11a563f129722</a>
                </td>
              </tr>
              <tr>
                <td>ProxysUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/410e137dcc4bdb5bdbeb4dc7ea7f572f2dc683152d">410e137dcc4bdb5bdbeb4dc7ea7f572f2dc683152d</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAG</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41c8d485446e38ca26cbb9da7720cfcdaa40a49449">41c8d485446e38ca26cbb9da7720cfcdaa40a49449</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/412eeb27e6ac2e9fc2102f8f7f26655c480147a681">412eeb27e6ac2e9fc2102f8f7f26655c480147a681</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXRP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/413408c98df23262d2f40ee5a7ef593c8e5decd5da">413408c98df23262d2f40ee5a7ef593c8e5decd5da</a>
                </td>
              </tr>
              <tr>
                <td>ProxysXTZ</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41cf80943e0f615c75a0a1317bcde29a6ab7b845c3">41cf80943e0f615c75a0a1317bcde29a6ab7b845c3</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/RewardEscrow.json">RewardEscrow.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41d8481c02a73dc2e0ebf6b999f4866d651265dc18">41d8481c02a73dc2e0ebf6b999f4866d651265dc18</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/RewardsDistribution.json">RewardsDistribution.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4130e331229c8abae9856f54fadf14395cc898f72f">4130e331229c8abae9856f54fadf14395cc898f72f</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/SafeDecimalMath.json">SafeDecimalMath.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41310c89eea36470ddeca4527f47b0e5e5385098a4">41310c89eea36470ddeca4527f47b0e5e5385098a4</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/SupplySchedule.json">SupplySchedule.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41dd3ec7261500d389beff0e5c2d687389b1cfb5a4">41dd3ec7261500d389beff0e5c2d687389b1cfb5a4</a>
                </td>
              </tr>
              <tr>
                <td>SynthXDR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41750a90e061e2970b16e3f26a522db11be6b6c781">41750a90e061e2970b16e3f26a522db11be6b6c781</a>
                </td>
              </tr>
              <tr>
                <td>Synthetix</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synthetix.sol">Synthetix.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synthetix.json">Synthetix.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/417ca2c40d9aa986b6608e07a68ebf33ea5f19a866">417ca2c40d9aa986b6608e07a68ebf33ea5f19a866</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixEscrow</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/SynthetixEscrow.sol">SynthetixEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/SynthetixEscrow.json">SynthetixEscrow.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/417290a18a1b2d59ef6f65440fd7bec48a26d45e6d">417290a18a1b2d59ef6f65440fd7bec48a26d45e6d</a>
                </td>
              </tr>
              <tr>
                <td>SynthetixState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/SynthetixState.sol">SynthetixState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/SynthetixState.json">SynthetixState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41f088a65f360873aec73a186f297af447f4116ce3">41f088a65f360873aec73a186f297af447f4116ce3</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4140fa816bb95d2c6e350efaacfeb764ec073c477e">4140fa816bb95d2c6e350efaacfeb764ec073c477e</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/418f457c5f47bb76b21e0461298dcfc1ff6b52a39b">418f457c5f47bb76b21e0461298dcfc1ff6b52a39b</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e2bdf08b2761b8a8ca017a0bc13632e4589850cc">41e2bdf08b2761b8a8ca017a0bc13632e4589850cc</a>
                </td>
              </tr>
              <tr>
                <td>SynthiCEX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41a6dce32508ec680d71100698db984856355eef21">41a6dce32508ec680d71100698db984856355eef21</a>
                </td>
              </tr>
              <tr>
                <td>SynthiDEFI</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415f23aa15d6b1216d147035ac505e502e3ddac5ee">415f23aa15d6b1216d147035ac505e502e3ddac5ee</a>
                </td>
              </tr>
              <tr>
                <td>SynthiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4185746f1844fa1daf1fef7f099045200739c78e92">4185746f1844fa1daf1fef7f099045200739c78e92</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLINK</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/414cf8beb24359b137a2c7cff8b8f747b73dbff43f">414cf8beb24359b137a2c7cff8b8f747b73dbff43f</a>
                </td>
              </tr>
              <tr>
                <td>SynthiLTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41018cb03908050e96556e6abf7c3bb8957b9ebef4">41018cb03908050e96556e6abf7c3bb8957b9ebef4</a>
                </td>
              </tr>
              <tr>
                <td>SynthiMKR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e60c89c21bea6ae62bb7ee283b9b8d50ec7bc238">41e60c89c21bea6ae62bb7ee283b9b8d50ec7bc238</a>
                </td>
              </tr>
              <tr>
                <td>SynthiTRX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4199e0f73fd5f45fecf8654f63d56d00127bcb25f8">4199e0f73fd5f45fecf8654f63d56d00127bcb25f8</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXRP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/419856decef26f5655a8e7b468264405131a4a3962">419856decef26f5655a8e7b468264405131a4a3962</a>
                </td>
              </tr>
              <tr>
                <td>SynthiXTZ</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41a037b006d9302b28cf80907c111d1c6f03e483bc">41a037b006d9302b28cf80907c111d1c6f03e483bc</a>
                </td>
              </tr>
              <tr>
                <td>SynthsAUD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4106606dc631c90b22b1424298955d1264d6df28de">4106606dc631c90b22b1424298955d1264d6df28de</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415d7d4f999ff26f79472f826112f9d23bbd3f5138">415d7d4f999ff26f79472f826112f9d23bbd3f5138</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41ec6f9d4f5a25f4e315df1c770518a8b98736379b">41ec6f9d4f5a25f4e315df1c770518a8b98736379b</a>
                </td>
              </tr>
              <tr>
                <td>SynthsBTT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41a8a7c55c6ea4135d9a3aef09ca2a17095cfc6780">41a8a7c55c6ea4135d9a3aef09ca2a17095cfc6780</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCEX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415abb09853c4526d629b1487d6752da93d536f2e4">415abb09853c4526d629b1487d6752da93d536f2e4</a>
                </td>
              </tr>
              <tr>
                <td>SynthsCHF</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41656a106b631b9496f091c31f1216b1a3a2631e06">41656a106b631b9496f091c31f1216b1a3a2631e06</a>
                </td>
              </tr>
              <tr>
                <td>SynthsDEFI</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41b27982e0cdd1647fff030d1130a06f6493b34dde">41b27982e0cdd1647fff030d1130a06f6493b34dde</a>
                </td>
              </tr>
              <tr>
                <td>SynthsETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415f0a6f862f7c89e3c20ba88a0efacba4dd75f1f4">415f0a6f862f7c89e3c20ba88a0efacba4dd75f1f4</a>
                </td>
              </tr>
              <tr>
                <td>SynthsEUR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/418d811148f1fefcf6614153d0e91ae6fbadb8cc04">418d811148f1fefcf6614153d0e91ae6fbadb8cc04</a>
                </td>
              </tr>
              <tr>
                <td>SynthsGBP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/412ebe548c55114d5fff6e8ebb0319559113f5bc6d">412ebe548c55114d5fff6e8ebb0319559113f5bc6d</a>
                </td>
              </tr>
              <tr>
                <td>SynthsJPY</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415f6f1eee2eebe0e7b37055c0515b53d2a4693366">415f6f1eee2eebe0e7b37055c0515b53d2a4693366</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLINK</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/413132c84af1412bccf16bfc35ebb4d605c34eb547">413132c84af1412bccf16bfc35ebb4d605c34eb547</a>
                </td>
              </tr>
              <tr>
                <td>SynthsLTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/414b3b43c41bb2961582c666441c8a91ad4c5db335">414b3b43c41bb2961582c666441c8a91ad4c5db335</a>
                </td>
              </tr>
              <tr>
                <td>SynthsMKR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4102bf13ae69d80038b6122638aa421f2ff61bbe3f">4102bf13ae69d80038b6122638aa421f2ff61bbe3f</a>
                </td>
              </tr>
              <tr>
                <td>SynthsTRX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41a684069d581d7f31ee7cb1adb46d75572c82f65d">41a684069d581d7f31ee7cb1adb46d75572c82f65d</a>
                </td>
              </tr>
              <tr>
                <td>SynthsUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/413e3157000f46c6d1e64ccd71bdbbab38d0c5886b">413e3157000f46c6d1e64ccd71bdbbab38d0c5886b</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAG</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41075adfc9d2304d0ac3ac6d7afcfd25668d1275d2">41075adfc9d2304d0ac3ac6d7afcfd25668d1275d2</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4134faf3de0b92da9cf2a4c8b4a3828434cd5dc101">4134faf3de0b92da9cf2a4c8b4a3828434cd5dc101</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXRP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41cf9b0e9cfe26c9250e13265cbf7b5dd1793c1420">41cf9b0e9cfe26c9250e13265cbf7b5dd1793c1420</a>
                </td>
              </tr>
              <tr>
                <td>SynthsXTZ</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/416185fa4b1540277d4c55dadd492ef2dfb337202a">416185fa4b1540277d4c55dadd492ef2dfb337202a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateSynthetix</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41ffede3063f0c8406d012a66825942caa9d5f91f4">41ffede3063f0c8406d012a66825942caa9d5f91f4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateXDR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/414be4d21787445c6dd42c5b6f9eac4c5baca5498c">414be4d21787445c6dd42c5b6f9eac4c5baca5498c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/414b6bbdff20c1963f9c9b662bfa1efc28570e3195">414b6bbdff20c1963f9c9b662bfa1efc28570e3195</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41278ecfe761c49e8f267b3e0e4bfc1e1116d68039">41278ecfe761c49e8f267b3e0e4bfc1e1116d68039</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/417611e48d5f12c31af8f674bdc9209d409b3cb404">417611e48d5f12c31af8f674bdc9209d409b3cb404</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiCEX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/417fbd4487c97b946772c182dbc305548f94b6e3aa">417fbd4487c97b946772c182dbc305548f94b6e3aa</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiDEFI</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41d84edacc3fcfed0691a3f63e169ab48177832c62">41d84edacc3fcfed0691a3f63e169ab48177832c62</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41716a23d0c2449e001f4227370a304eb649785b44">41716a23d0c2449e001f4227370a304eb649785b44</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLINK</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41c461f313fc0abecd984a2dc03dc7df5cdfd20d6c">41c461f313fc0abecd984a2dc03dc7df5cdfd20d6c</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiLTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4195d8d4b638d4ab76ee329443bc6bf69db94401f8">4195d8d4b638d4ab76ee329443bc6bf69db94401f8</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiMKR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41d6a96d1becf88b0acd46b58db9afb160e08dc1f0">41d6a96d1becf88b0acd46b58db9afb160e08dc1f0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiTRX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e54a97ad381d1611bf6cecc5cda2475df621f5a4">41e54a97ad381d1611bf6cecc5cda2475df621f5a4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXRP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/413023d5d55a3d89c3728679e45a68889f16c83217">413023d5d55a3d89c3728679e45a68889f16c83217</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiXTZ</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41eead66dd5bc3eddd0e08d6ab0d0575edb53f6338">41eead66dd5bc3eddd0e08d6ab0d0575edb53f6338</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesAUD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41b1a3329d7569a25fb3c4de4d5482a6b195bcafc1">41b1a3329d7569a25fb3c4de4d5482a6b195bcafc1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/415c14384286a56041a7a82e5a8a67695df1a0bcd6">415c14384286a56041a7a82e5a8a67695df1a0bcd6</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/419d5f7898b5f5024014dda2cfa30bdca3cdd4f801">419d5f7898b5f5024014dda2cfa30bdca3cdd4f801</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesBTT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41be3d3e98cadf7d7ed7b2aaf55eaddf5f15e4e7f3">41be3d3e98cadf7d7ed7b2aaf55eaddf5f15e4e7f3</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCEX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/416b3554b9254d9d585e20963b8929663cefd8c33a">416b3554b9254d9d585e20963b8929663cefd8c33a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesCHF</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/416f94e1c3fa196f1c292ca6f1d1cfd08ed1b0f1b1">416f94e1c3fa196f1c292ca6f1d1cfd08ed1b0f1b1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesDEFI</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4101f73c558f107973ed125af1c6c50cc77c3f6b38">4101f73c558f107973ed125af1c6c50cc77c3f6b38</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41f94fc6fa7b2bd09ffd807e2b5e1f4a5e8dc34e26">41f94fc6fa7b2bd09ffd807e2b5e1f4a5e8dc34e26</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesEUR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e282023eef472cb243a6ceb3b752ae2cc217ae96">41e282023eef472cb243a6ceb3b752ae2cc217ae96</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesGBP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/418f48e3921b8b6da1c606efbbfb13e105c58ee1be">418f48e3921b8b6da1c606efbbfb13e105c58ee1be</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesJPY</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41766713db81718fcc57d98ef0131aa9d03e9d52f1">41766713db81718fcc57d98ef0131aa9d03e9d52f1</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLINK</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41bbe05c4c1b435ccc43714967b7e731d0587f217a">41bbe05c4c1b435ccc43714967b7e731d0587f217a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesLTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41ecf2b76ffd1682fde5540f42b88f00b506a72959">41ecf2b76ffd1682fde5540f42b88f00b506a72959</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesMKR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41f2373b5c1619f8942eaaaa2cad6305d91ec4a611">41f2373b5c1619f8942eaaaa2cad6305d91ec4a611</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesTRX</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4161fc6c0f41fd74459a99bc9a89130512c780b660">4161fc6c0f41fd74459a99bc9a89130512c780b660</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/410b64dfeafae47b0cf1fc3507718d79bb5632438e">410b64dfeafae47b0cf1fc3507718d79bb5632438e</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAG</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/418c4630d2ccd5062c91a4c5de89a4a42c6876a65d">418c4630d2ccd5062c91a4c5de89a4a42c6876a65d</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/4196067b9a10133463cd06002623b965aa3754e0d0">4196067b9a10133463cd06002623b965aa3754e0d0</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXRP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/41e4bdd8f4993cb5f54f9ab7fac031a27cd1376a63">41e4bdd8f4993cb5f54f9ab7fac031a27cd1376a63</a>
                </td>
              </tr>
              <tr>
                <td>TokenStatesXTZ</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/shasta/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://shasta.tronscan.io/address/413c61b838e2fe775954d1d946a7da29090a8b99f7">413c61b838e2fe775954d1d946a7da29090a8b99f7</a>
                </td>
              </tr></table>