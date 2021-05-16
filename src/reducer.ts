import { combineReducers } from '@reduxjs/toolkit'
import templatesReducer from './slices/templates'
import optionsReducer from './slices/options'

const rootReducer = combineReducers({
    templates: templatesReducer,
    options: optionsReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer