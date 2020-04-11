# Historical Data

??? tip "Tip: The Oikos Dashboard"

    Oikos has a custom dashboard app - https://dashboard.oikos.cash - which shows a number of key metrics within the system. Some of the dashboard is powered by the subgraphs below and some by an internal metrics gathering system (closed source). We are in the process of migrating towards the Graph for our entire dashboard: https://github.com/Synthetixio/oikos/issues/254

There are a number a ways to access Oikos's historical data.

- Query Oikos event log history and calls using The Graph subgraphs
- Fetch state at some block in the past using an Archive Node
- Query event logs directly via the EVM
- Use a third party service like Google BigQuery or DuneAnalytics

### Subgraphs

Oikos currently has four separate subgraphs on The Graph. A subgraph is an entity-based datasource that is populated by Graph indexers - these replay all transactions since the genesis block and use custom mapping code to create entities when events are emitted and functions are invoked.

We've written a custom JavaScript library to abstract away the complexity of dealing with these subgraphs. It's called [oikos-data](libraries/oikos-data.md), and it's an `npm` module to query historical or subscribe to these events in real time.

Alternatively, Each of these subgraphs can be queried using GraphQL - follow the links below to query the subgraphs using GrapHQL in the data explorer UIs provided.

<a href="//thegraph.com/explorer/subgraph/oikos-cash-team/oikos"><img class="rounded-image" src="/img/misc/subgraph.png" /></a> <a href="//thegraph.com/explorer/subgraph/oikos-cash-team/oikos-exchanges"><img class="rounded-image" src="/img/misc/subgraph-exchanges.png" /></a> <a href="//thegraph.com/explorer/subgraph/oikos-cash-team/oikos-rates"><img class="rounded-image" src="/img/misc/subgraph-rates.png" /></a> <a href="//thegraph.com/explorer/subgraph/oikos-cash-team/oikos-depot"><img class="rounded-image"  src="/img/misc/subgraph-depot.png" /></a>

> The code for these subgraphs is up at: @Synthetixio/oikos-subgraph

### Query event logs directly on the EVM


!!! example "E.g. Get all `FeePool.FeesClaimed` events"

    ```javascript
    import oikos from 'oikos';
    const provider = ethers.getDefaultProvider();

    const network = 'mainnet';
    const { abi } = oikos.getSource({
      network,
      contract: 'FeePool'
    });
    const { address } = oikos.getTarget({
      network,
      // Note: for contracts with proxies, events are always emitted on the Proxy,
      // so we need to use this address here
      contract: 'ProxyFeePool'
    });

    const { signature } = abi.find(
      ({ type, name }) => type === 'event' && name === 'FeesClaimed'
    );

    (async () => {
      const feesClaimedEvents = await provider.getLogs({
        topics: [signature],
        address,
        fromBlock: 9000000,
        toBlock: 9015000
      });
      // show last three if any
      console.log(JSON.stringify(feesClaimedEvents.slice(0, 3), null, '\t'));
    })();
    ```

