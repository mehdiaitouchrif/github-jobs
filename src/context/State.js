import reducer from './reducer'
import Context from './context'
import { useReducer } from 'react'

import {
	GET_JOBS,
	GET_JOB,
	SEARCH_JOBS,
	SET_LOADING,
	GET_FULL_TIME,
	GET_LOCATION,
} from './types'

// Initial state
const initialState = {
	results: [],
	jobDetails: {},
	loading: false,
}

const State = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	// Action functions
	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING })

	// Get All Jobs
	const getJobs = async () => {
		setLoading()
		const res = await fetch(
			'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
		)
		const data = await res.json()
		dispatch({
			type: GET_JOBS,
			payload: data,
		})
	}

	// Get A Single Job Details
	const getJob = async (id) => {
		setLoading()
		const res = await fetch(
			`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
		)
		const data = await res.json()
		dispatch({
			type: GET_JOB,
			payload: data,
		})
	}

	// Search for Jobs
	const searchJobs = async (term) => {
		setLoading()
		const res = await fetch(
			`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${term}`
		)
		const data = await res.json()
		dispatch({
			type: SEARCH_JOBS,
			payload: data,
		})
	}

	// Filter only Full Time Jobs
	const getFullTimeJobs = async () => {
		setLoading()
		const res = await fetch(
			'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?full_time=true'
		)
		const data = await res.json()
		dispatch({
			type: GET_FULL_TIME,
			payload: data,
		})
	}

	// Filter by location
	const getLocationJobs = async (loc) => {
		setLoading()
		const res = await fetch(
			`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${loc}`
		)
		const data = await res.json()
		dispatch({
			type: GET_LOCATION,
			payload: data,
		})
	}

	return (
		<Context.Provider
			value={{
				results: state.results,
				jobDetails: state.jobDetails,
				loading: state.loading,
				getJobs,
				getJob,
				getFullTimeJobs,
				getLocationJobs,
				searchJobs,
			}}>
			{children}
		</Context.Provider>
	)
}

export default State
