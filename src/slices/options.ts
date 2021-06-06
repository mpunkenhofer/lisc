import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Options} from '../common/types';
import {AppThunk} from '../store';
import * as storage from '../common/storage';

type OptionsState = {
  options: Options;
  loading: boolean;
  error: string | null;
};

const OptionsInitialState: OptionsState = {
  options: {
    a: true,
  },
  loading: false,
  error: null,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState: OptionsInitialState,
  reducers: {
    optionRequest(state): void {
      state.loading = true;
      state.error = null;
    },
    optionsSuccess(state, {payload}: PayloadAction<Options>): void {
      state.options = payload;
      state.loading = false;
      state.error = null;
    },
    optionsFailure(state, {payload}: PayloadAction<string>): void {
      state.loading = false;
      state.error = payload;
    },
    setA(state, {payload}: PayloadAction<boolean>): void {
      state.options.a = payload;
    },
  },
});

export const {
  optionRequest,
  optionsSuccess,
  optionsFailure,
  setA: setImportUsers,
} = optionsSlice.actions;

export const getOptions =
  (): AppThunk =>
  (dispatch, getState): void => {
    if (!getState().options.loading) {
      dispatch(optionRequest());
      storage
        .getOptions()
        .then(options => dispatch(optionsSuccess(options)))
        .catch((err: string) => dispatch(optionsFailure(err.toString())));
    }
  };

export const setOptions =
  (): AppThunk =>
  (dispatch, getState): void => {
    const options = getState().options.options;

    dispatch(optionRequest());
    storage
      .setOptions(options)
      .then(options => dispatch(optionsSuccess(options)))
      .catch((err: string) => dispatch(optionsFailure(err.toString())));
  };

export default optionsSlice.reducer;
