/** This file is part of Super Castle Game.
 * @license GPLv3 | Copyright (c) 2023 Mark Vasilkov
 */
"use strict";

import type { IState } from "../node_modules/natlib/state.js";
import { levels } from "./levels.js";
import { Settings } from "./setup.js";
import { ShortBool, type ExtendedBool } from "./shortbool.ts";

// Duck

export const enum DuckPhase {
  INITIAL,
  TITLE_SCREEN,
  INTERACTIVE,
  MOVING,
  CONNECTING,
  LEAVING,
  ENTERING,
}

export const duckPhaseMap = [
  DuckPhase.TITLE_SCREEN,
  Settings.TITLE_ENTER_DURATION as number,
  ,
  ,
  ,
  ,
  DuckPhase.INTERACTIVE,
  ,
  DuckPhase.INTERACTIVE,
  ,
  DuckPhase.ENTERING,
  Settings.ENTER_DURATION as number,
  DuckPhase.INTERACTIVE,
  ,
];

export interface IDuckState extends IState {
  levelIndex: number;
  clear: { [levelIndex: number]: ExtendedBool };
  pointerHeld?: ExtendedBool;
  audioMuted?: ExtendedBool;
}

export const duckState: IDuckState = {
  // IState
  phase: DuckPhase.INITIAL,
  phaseTtl: 0,
  oldTtl: 0,
  // IDuckState
  levelIndex: 1,
  clear: {},
};

// Oscillator

export const enum OscillatorPhase {
  INITIAL,
  CYCLE,
}

export const oscillatorPhaseMap = [
  OscillatorPhase.CYCLE,
  Settings.OSCILLATOR_DURATION as number,
  OscillatorPhase.CYCLE,
  Settings.OSCILLATOR_DURATION as number,
];

export interface IOscillatorState extends IState {}

export const oscillatorState: IOscillatorState = {
  phase: OscillatorPhase.INITIAL,
  phaseTtl: 0,
  oldTtl: 0,
};

// Load state

try {
  if (localStorage.superCastleIndex && localStorage.superCastleClear) {
    const loadedIndex = +localStorage.superCastleIndex;
    const loadedClear = JSON.parse(localStorage.superCastleClear);

    if (
      loadedIndex &&
      loadedIndex < levels.length &&
      levels[loadedIndex] &&
      loadedClear[1] === ShortBool.TRUE
    ) {
      duckState.levelIndex = loadedIndex;
      Object.assign(duckState.clear, loadedClear);
    }
  }
} catch (err) {}
