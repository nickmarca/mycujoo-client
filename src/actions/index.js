import axios from 'axios';
import {FETCH_ENTITIES_SUCCESS, FETCH_ENTITY_COUNTRY_CODES_SUCCESS} from "./types";

const API_URL = 'https://gql.mycujoo.tv';

export const fetchEntityCountryCodes = () =>  async dispatch => {
  const {data: {data}} = await axios.post(API_URL, {query: `{
    entityCountryCodes 
  }`});

  dispatch({type: FETCH_ENTITY_COUNTRY_CODES_SUCCESS, payload: data.entityCountryCodes});
};

export const fetchEntities = countryCode => async dispatch => {
  const {data: {data}} = await axios.post(API_URL, {query: `
    {
        entities(countryCode: "${countryCode}") {
          total
          items{
            name
            type
            id
            officialFifa
          }
        }
      
    }`
  });

  console.log(data.entities);

  dispatch({type: FETCH_ENTITIES_SUCCESS, payload: {[countryCode]: data.entities}})
};