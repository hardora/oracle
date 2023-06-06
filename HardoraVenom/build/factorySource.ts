const hardoraFaucetAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_state","type":"uint256"},{"name":"_distributedTokenRoot","type":"address"}],"outputs":[]},{"name":"HardoraWallet","inputs":[{"name":"_wallet","type":"address"}],"outputs":[]},{"name":"onAcceptTokensMint","inputs":[{"name":"tokenRoot","type":"address"},{"name":"amount","type":"uint128"},{"name":"remainingGasTo","type":"address"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"setState","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_state","type":"uint256"}]},{"name":"distributedTokenRoot","inputs":[],"outputs":[{"name":"distributedTokenRoot","type":"address"}]},{"name":"distributedTokenWallet","inputs":[],"outputs":[{"name":"distributedTokenWallet","type":"address"}]}],"data":[{"key":1,"name":"owner","type":"address"}],"events":[{"name":"StateChange","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"state","type":"uint256"},{"name":"distributedTokenRoot","type":"address"},{"name":"distributedTokenWallet","type":"address"}]} as const

export const factorySource = {
    HardoraFaucet: hardoraFaucetAbi
} as const

export type FactorySource = typeof factorySource
export type HardoraFaucetAbi = typeof hardoraFaucetAbi
