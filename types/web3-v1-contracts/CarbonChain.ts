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

export type BatchTimeLimitChanged = ContractEventLog<{
  newBatchTimeLimit: string;
  0: string;
}>;
export type BridgeChanged = ContractEventLog<{
  newBridge: string;
  0: string;
}>;
export type CMCO2Changed = ContractEventLog<{
  newCMCO2: string;
  0: string;
}>;
export type CarbonOffset = ContractEventLog<{
  carbonTon: string;
  transactionInfo: string;
  onBehalfOf: string;
  sender: string;
  offsetHash: string;
  transactionIndex: string;
  batchIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type CarbonOffsetBatch = ContractEventLog<{
  newBatch: [string, string, string, string];
  carbonTon: string;
  recipient: string;
  hashChain: string;
  batchIndex: string;
  0: [string, string, string, string];
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type MemPoolLimitChanged = ContractEventLog<{
  newMemPoolLimit: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type RecipientChanged = ContractEventLog<{
  newRecipient: string;
  0: string;
}>;

export interface CarbonChain extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): CarbonChain;
  clone(): CarbonChain;
  methods: {
    batches(arg0: number | string | BN): NonPayableTransactionObject<{
      totalCarbonOffset: string;
      hashChain: string;
      timestamp: string;
      blockNumber: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    carbonOffset(arg0: string): NonPayableTransactionObject<string>;

    hashChain(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    totalTransactions(arg0: string): NonPayableTransactionObject<string>;

    transactions(arg0: number | string | BN): NonPayableTransactionObject<{
      carbonTon: string;
      transactionInfo: string;
      onBehalfOf: string;
      sender: string;
      offsetHash: string;
      batchNumber: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    initialize(
      _cMCO2: string,
      _bridge: string,
      _recipient: string,
      _memPoolLimit: number | string | BN,
      _batchTimeLimit: number | string | BN
    ): NonPayableTransactionObject<void>;

    offsetCarbon(
      _carbonTon: number | string | BN,
      _transactionInfo: string,
      _onBehalfOf: string
    ): NonPayableTransactionObject<void>;

    createBatch(): NonPayableTransactionObject<void>;

    shouldCreateBatch(): NonPayableTransactionObject<boolean>;

    changeBridge(newBridge: string): NonPayableTransactionObject<boolean>;

    getBridge(): NonPayableTransactionObject<string>;

    changeCMCO2(newCMCO2: string): NonPayableTransactionObject<boolean>;

    getCMCO2(): NonPayableTransactionObject<string>;

    changeRecipient(newRecipient: string): NonPayableTransactionObject<boolean>;

    getRecipient(): NonPayableTransactionObject<string>;

    changeMemPoolLimit(
      newMemPoolLimit: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    getMemPoolLimit(): NonPayableTransactionObject<string>;

    changeBatchTimeLimit(
      newBatchTimeLimit: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    getBatchTimeLimit(): NonPayableTransactionObject<string>;

    getPendingTransactionsCount(): NonPayableTransactionObject<string>;

    getLastBatchCreation(): NonPayableTransactionObject<string>;

    numberOfTransactions(): NonPayableTransactionObject<string>;

    numberOfBatches(): NonPayableTransactionObject<string>;
  };
  events: {
    BatchTimeLimitChanged(cb?: Callback<BatchTimeLimitChanged>): EventEmitter;
    BatchTimeLimitChanged(
      options?: EventOptions,
      cb?: Callback<BatchTimeLimitChanged>
    ): EventEmitter;

    BridgeChanged(cb?: Callback<BridgeChanged>): EventEmitter;
    BridgeChanged(
      options?: EventOptions,
      cb?: Callback<BridgeChanged>
    ): EventEmitter;

    CMCO2Changed(cb?: Callback<CMCO2Changed>): EventEmitter;
    CMCO2Changed(
      options?: EventOptions,
      cb?: Callback<CMCO2Changed>
    ): EventEmitter;

    CarbonOffset(cb?: Callback<CarbonOffset>): EventEmitter;
    CarbonOffset(
      options?: EventOptions,
      cb?: Callback<CarbonOffset>
    ): EventEmitter;

    CarbonOffsetBatch(cb?: Callback<CarbonOffsetBatch>): EventEmitter;
    CarbonOffsetBatch(
      options?: EventOptions,
      cb?: Callback<CarbonOffsetBatch>
    ): EventEmitter;

    MemPoolLimitChanged(cb?: Callback<MemPoolLimitChanged>): EventEmitter;
    MemPoolLimitChanged(
      options?: EventOptions,
      cb?: Callback<MemPoolLimitChanged>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    RecipientChanged(cb?: Callback<RecipientChanged>): EventEmitter;
    RecipientChanged(
      options?: EventOptions,
      cb?: Callback<RecipientChanged>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "BatchTimeLimitChanged",
    cb: Callback<BatchTimeLimitChanged>
  ): void;
  once(
    event: "BatchTimeLimitChanged",
    options: EventOptions,
    cb: Callback<BatchTimeLimitChanged>
  ): void;

  once(event: "BridgeChanged", cb: Callback<BridgeChanged>): void;
  once(
    event: "BridgeChanged",
    options: EventOptions,
    cb: Callback<BridgeChanged>
  ): void;

  once(event: "CMCO2Changed", cb: Callback<CMCO2Changed>): void;
  once(
    event: "CMCO2Changed",
    options: EventOptions,
    cb: Callback<CMCO2Changed>
  ): void;

  once(event: "CarbonOffset", cb: Callback<CarbonOffset>): void;
  once(
    event: "CarbonOffset",
    options: EventOptions,
    cb: Callback<CarbonOffset>
  ): void;

  once(event: "CarbonOffsetBatch", cb: Callback<CarbonOffsetBatch>): void;
  once(
    event: "CarbonOffsetBatch",
    options: EventOptions,
    cb: Callback<CarbonOffsetBatch>
  ): void;

  once(event: "MemPoolLimitChanged", cb: Callback<MemPoolLimitChanged>): void;
  once(
    event: "MemPoolLimitChanged",
    options: EventOptions,
    cb: Callback<MemPoolLimitChanged>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "RecipientChanged", cb: Callback<RecipientChanged>): void;
  once(
    event: "RecipientChanged",
    options: EventOptions,
    cb: Callback<RecipientChanged>
  ): void;
}