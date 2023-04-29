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

export type MessageReceived = ContractEventLog<{
  msg: string;
  sender: string;
  0: string;
  1: string;
}>;

export interface Custody extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Custody;
  clone(): Custody;
  methods: {
    emitProof(_msg: string): NonPayableTransactionObject<void>;
  };
  events: {
    MessageReceived(cb?: Callback<MessageReceived>): EventEmitter;
    MessageReceived(
      options?: EventOptions,
      cb?: Callback<MessageReceived>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "MessageReceived", cb: Callback<MessageReceived>): void;
  once(
    event: "MessageReceived",
    options: EventOptions,
    cb: Callback<MessageReceived>
  ): void;
}