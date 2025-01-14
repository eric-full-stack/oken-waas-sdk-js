/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  owner: string;
  approved: string;
  tokenId: string;
  0: string;
  1: string;
  2: string;
}>;
export type ApprovalForAll = ContractEventLog<{
  owner: string;
  operator: string;
  approved: boolean;
  0: string;
  1: string;
  2: boolean;
}>;
export type Initialized = ContractEventLog<{
  version: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type Paused = ContractEventLog<{
  account: string;
  0: string;
}>;
export type RoleAdminChanged = ContractEventLog<{
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleGranted = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleRevoked = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  tokenId: string;
  0: string;
  1: string;
  2: string;
}>;
export type Unpaused = ContractEventLog<{
  account: string;
  0: string;
}>;

export interface LootBoxNFT extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): LootBoxNFT;
  clone(): LootBoxNFT;
  methods: {
    ADMIN_ROLE(): NonPayableTransactionObject<string>;

    DEFAULT_ADMIN_ROLE(): NonPayableTransactionObject<string>;

    MINTER_ROLE(): NonPayableTransactionObject<string>;

    PAUSER_ROLE(): NonPayableTransactionObject<string>;

    addTierURI(_newURI: string): NonPayableTransactionObject<void>;

    approve(
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    balanceOf(owner: string): NonPayableTransactionObject<string>;

    burn(tokenId: number | string | BN): NonPayableTransactionObject<void>;

    getApproved(
      tokenId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getRoleAdmin(role: string | number[]): NonPayableTransactionObject<string>;

    grantRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    hasRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<boolean>;

    initialize(
      _name: string,
      _symbol: string,
      _tierURIs: string[],
      _owner: string
    ): NonPayableTransactionObject<void>;

    isApprovedForAll(
      owner: string,
      operator: string
    ): NonPayableTransactionObject<boolean>;

    lockForReveal(
      _owner: string,
      _tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    mint(
      _to: string,
      _tier: number | string | BN
    ): NonPayableTransactionObject<void>;

    name(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    ownerOf(tokenId: number | string | BN): NonPayableTransactionObject<string>;

    pause(): NonPayableTransactionObject<void>;

    paused(): NonPayableTransactionObject<boolean>;

    renounceRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    revealContract(): NonPayableTransactionObject<string>;

    revokeRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): NonPayableTransactionObject<void>;

    setOwner(_newOwner: string): NonPayableTransactionObject<void>;

    setRevealContract(_contract: string): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    symbol(): NonPayableTransactionObject<string>;

    tierCIDs(arg0: number | string | BN): NonPayableTransactionObject<string>;

    tokenByIndex(
      index: number | string | BN
    ): NonPayableTransactionObject<string>;

    tokenOfOwnerByIndex(
      owner: string,
      index: number | string | BN
    ): NonPayableTransactionObject<string>;

    tokenTierMap(
      _tokenId: number | string | BN
    ): NonPayableTransactionObject<string>;

    tokenURI(
      tokenId: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    unpause(): NonPayableTransactionObject<void>;

    updateBaseTokenURI(
      _newBaseTokenURI: string
    ): NonPayableTransactionObject<void>;

    updateTierURI(
      _tier: number | string | BN,
      _newURI: string
    ): NonPayableTransactionObject<void>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    ApprovalForAll(cb?: Callback<ApprovalForAll>): EventEmitter;
    ApprovalForAll(
      options?: EventOptions,
      cb?: Callback<ApprovalForAll>
    ): EventEmitter;

    Initialized(cb?: Callback<Initialized>): EventEmitter;
    Initialized(
      options?: EventOptions,
      cb?: Callback<Initialized>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    Paused(cb?: Callback<Paused>): EventEmitter;
    Paused(options?: EventOptions, cb?: Callback<Paused>): EventEmitter;

    RoleAdminChanged(cb?: Callback<RoleAdminChanged>): EventEmitter;
    RoleAdminChanged(
      options?: EventOptions,
      cb?: Callback<RoleAdminChanged>
    ): EventEmitter;

    RoleGranted(cb?: Callback<RoleGranted>): EventEmitter;
    RoleGranted(
      options?: EventOptions,
      cb?: Callback<RoleGranted>
    ): EventEmitter;

    RoleRevoked(cb?: Callback<RoleRevoked>): EventEmitter;
    RoleRevoked(
      options?: EventOptions,
      cb?: Callback<RoleRevoked>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    Unpaused(cb?: Callback<Unpaused>): EventEmitter;
    Unpaused(options?: EventOptions, cb?: Callback<Unpaused>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "ApprovalForAll", cb: Callback<ApprovalForAll>): void;
  once(
    event: "ApprovalForAll",
    options: EventOptions,
    cb: Callback<ApprovalForAll>
  ): void;

  once(event: "Initialized", cb: Callback<Initialized>): void;
  once(
    event: "Initialized",
    options: EventOptions,
    cb: Callback<Initialized>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "Paused", cb: Callback<Paused>): void;
  once(event: "Paused", options: EventOptions, cb: Callback<Paused>): void;

  once(event: "RoleAdminChanged", cb: Callback<RoleAdminChanged>): void;
  once(
    event: "RoleAdminChanged",
    options: EventOptions,
    cb: Callback<RoleAdminChanged>
  ): void;

  once(event: "RoleGranted", cb: Callback<RoleGranted>): void;
  once(
    event: "RoleGranted",
    options: EventOptions,
    cb: Callback<RoleGranted>
  ): void;

  once(event: "RoleRevoked", cb: Callback<RoleRevoked>): void;
  once(
    event: "RoleRevoked",
    options: EventOptions,
    cb: Callback<RoleRevoked>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;

  once(event: "Unpaused", cb: Callback<Unpaused>): void;
  once(event: "Unpaused", options: EventOptions, cb: Callback<Unpaused>): void;
}
