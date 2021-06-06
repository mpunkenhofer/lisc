// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Template } from "../common/types";
// import { AppThunk } from "../store";
// import * as storage from "../common/storage";

// type ProjectState = {
//   template: Template;
//   str: number;
//   con: number;
//   dex: number;
//   qui: number;
// };

// const TemplatesInitialState: TemplatesState = {
//     templates: [],
//     loading: false,
//     error: null
// };

// const templatesSlice = createSlice({
//     name: 'templates',
//     initialState: TemplatesInitialState,
//     reducers: {
//         templatesRequest(state): void {
//             state.loading = true;
//             state.error = null;
//         },
//         templatesSuccess(state, {payload}: PayloadAction<Template[]>): void {
//             state.templates = payload;
//             state.loading = false;
//             state.error = null;
//         },
//         templatesFailure(state, {payload}: PayloadAction<string>): void {
//             state.loading = false;
//             state.error = payload;
//         },
//         addTemplate(state, {payload}: PayloadAction<Template>): void {
//             state.templates.push(payload);
//         },
//     }
// });

// export const {
//     templatesRequest,
//     templatesSuccess,
//     templatesFailure,
//     addTemplate
// } = templatesSlice.actions;

// export const getTemplates = (): AppThunk => (dispatch, getState): void => {
//     if (!getState().templates.loading) {
//         dispatch(templatesRequest());
//         storage.getTemplates()
//             .then(templates => dispatch(templatesSuccess(templates)))
//             .catch((err: string) => dispatch(templatesFailure(err.toString())));
//     }
// };

// export const setTemplates = (): AppThunk => (dispatch, getState): void => {
//     const templates = getState().templates.templates;

//     dispatch(templatesRequest());
//     storage.setTemplates(templates)
//         .then(templates => dispatch(templatesSuccess(templates)))
//         .catch((err: string) => dispatch(templatesFailure(err.toString())));
// };

// export default templatesSlice.reducer;
