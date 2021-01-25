import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  TOMOCHAIN_DEVNET = 99,
  TOMOCHAIN_TESTNET = 89,
  TOMOCHAIN_MAINNET = 88
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// TODO: Need to change to luaswap's factory address
export const FACTORY_ADDRESS = '0x0388C1E0f210AbAe597B7DE712B9510C6C36C857'

// TODO: Need to change every code smartcontract updated
export const INIT_CODE_HASH = '0xf176ce2ef2ec9c3333f7ab282e4269fdd75024da47415e2c7c6e04272fc1bfab'
// Tomo factory address testnet: 0x1BA0DdCa35e152bE46e85e1EF9Db22d431dDc95e
export const TOMO_FACTORY_ADDRESS = '0x28c79368257CD71A122409330ad2bEBA7277a396'
// Tomo init code testnet: 0x2b9f535a55a8f0b77a1508fcfc2c2ed9d6ea509f3ea06d803782ad840328d61e
export const TOMO_INIT_CODE_HASH = '0xdb97fca50f04565472504aea8301c967285be031e5bdd131140734c3759d7015'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _995 = JSBI.BigInt(995)
export const _996 = JSBI.BigInt(996)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
