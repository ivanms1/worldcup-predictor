import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  },
};

export const groupsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateMatch: (state, action: PayloadAction<MatchData>) => {
      state[action.payload.group].results[action.payload.match][
        action.payload.result.country
      ] = action.payload.result.score;

      if (
        !state[action.payload.group].results[action.payload.match][
          action.payload.result.opponent
        ]
      ) {
        state[action.payload.group].results[action.payload.match][
          action.payload.result.opponent
        ] = 0;
      }
    },
  },
});

export const { updateMatch } = groupsSlice.actions;

export default groupsSlice.reducer;
