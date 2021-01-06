import {
	GET_FULL_TIME,
	GET_JOB,
	GET_JOBS,
	GET_LOCATION,
	SEARCH_JOBS,
	SET_LOADING,
} from './types'

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				results: [],
				loading: true,
			}
		case GET_JOBS:
		case SEARCH_JOBS:
		case GET_FULL_TIME:
		case GET_LOCATION:
			return {
				...state,
				results: action.payload,
				loading: false,
			}
		case GET_JOB:
			return {
				...state,
				jobDetails: action.payload,
				loading: false,
			}
	}
}
