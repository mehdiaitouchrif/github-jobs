import { useContext, useEffect, useState } from 'react'
import Context from '../context/context'

const Filters = () => {
	const onSubmit = (e) => {
		e.preventDefault()
	}

	// Radio buttons
	const [checked, setChecked] = useState(false)
	const [location, setLocation] = useState('')

	const context = useContext(Context)
	const { getFullTimeJobs, getLocationJobs, getJobs } = context

	const handleType = (e) => {
		setChecked(!checked)
	}

	const handleLocation = (e) => {
		setLocation(e.target.value)
		getLocationJobs(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getLocationJobs(location)
	}

	useEffect(() => {
		if (checked) {
			getFullTimeJobs()
		} else {
			getJobs()
		}
	}, [checked])

	return (
		<div className='my-6 mt-10 md:mt-6 px-2 '>
			<div>
				<input
					type='checkbox'
					name='type'
					className='p-2 text-lg'
					onChange={handleType}
				/>{' '}
				<label htmlFor='type'>Full Time</label>
			</div>

			<form onSubmit={handleSubmit} className='my-3'>
				<input
					type='text'
					className='py-2 px-3 rounded w-full'
					placeholder='City, state, zip code or country'
					onChange={(e) => setLocation(e.target.value)}
				/>
			</form>

			<div>
				<div>
					<input
						type='radio'
						name='location'
						value='san_fransisco'
						onChange={handleLocation}
						checked={location === 'san_fransisco'}
					/>{' '}
					<label htmlFor='location'>San Fransisco</label>
				</div>

				<div>
					<input
						type='radio'
						name='location'
						value='nyc'
						onChange={handleLocation}
						checked={location === 'nyc'}
					/>{' '}
					<label htmlFor='location'>New York</label>
				</div>
				<div>
					<input
						type='radio'
						name='location'
						value='denver'
						onChange={handleLocation}
						checked={location === 'denver'}
					/>{' '}
					<label htmlFor='location'>Denver</label>
				</div>
				<div>
					<input
						type='radio'
						name='location'
						value='london'
						onChange={handleLocation}
						checked={location === 'london'}
					/>{' '}
					<label htmlFor='location'>London</label>
				</div>
			</div>
		</div>
	)
}

export default Filters
