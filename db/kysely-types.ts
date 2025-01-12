/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Account {
  access_token: string | null;
  expires_at: Int8 | null;
  id: Generated<string>;
  id_token: string | null;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  scope: string | null;
  session_state: string | null;
  token_type: string | null;
  type: string;
  userId: string;
}

export interface Migrations {
  batch: number;
  id: Generated<number>;
  migration: string;
}

export interface Session {
  expires: Timestamp;
  id: Generated<string>;
  sessionToken: string;
  userId: string;
}

export interface User {
  email: string;
  emailVerified: Timestamp | null;
  id: Generated<string>;
  image: string | null;
  name: string | null;
}

export interface VerificationToken {
  expires: Timestamp;
  identifier: string;
  token: string;
}

export interface Poke {
  id: number;
  user_id: Generated<string>;
  poked_id: number;
  status: number;
  created_at: Date;
  edited_at: Date;
}

export interface DB {
  Account: Account;
  migrations: Migrations;
  Session: Session;
  User: User;
  VerificationToken: VerificationToken;
  Poke: Poke;
}
