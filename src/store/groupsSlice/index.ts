import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import getCountryData from "src/helpers/getCountryData";

export type Group = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

export type Match = 0 | 1 | 2 | 3 | 4 | 5;

type MatchData = {
  group: string;
  match: number;
  result: {
    opponent: number;
    country: number;
    score: number;
  };
};

export type CounterState = {
  [key: string]: {
    results: {
      [key: number]: {
        [key: number]: number;
      };
    };
    countriesData: {
      [key: number]: {
        Pts: number;
        W: number;
        D: number;
        L: number;
        GF: number;
        GA: number;
        MP: number;
      };
    };
  };
};

const initialState: CounterState = {
  A: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
  B: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
  C: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
  D: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
  E: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
  F: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
  G: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
  H: {
    results: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    countriesData: {},
  },
};

export const groupsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateMatch: (state, action: PayloadAction<MatchData>) => {
      const { group, match, result } = action.payload;
      state[group].results[match][result.country] = result.score;

      if (!state[group].results[match][result.opponent]) {
        state[group].results[match][result.opponent] = 0;
      }

      state[group].countriesData[result.country] = getCountryData(
        result.country,
        state[group].results
      );
      state[group].countriesData[result.opponent] = getCountryData(
        result.opponent,
        state[group].results
      );
    },
  },
});

export const { updateMatch } = groupsSlice.actions;

export default groupsSlice.reducer;
