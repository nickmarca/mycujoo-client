import entityCountryCodesReducer from "./entityCountryCodesReducer";
import entitiesReducer from "./entitiesReducer";
import {combineReducers} from "redux";

export default combineReducers({
    entityCountryCodes: entityCountryCodesReducer,
    entities: entitiesReducer
});