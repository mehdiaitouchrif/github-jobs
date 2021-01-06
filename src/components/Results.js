import { useContext, useEffect } from 'react'
import Context from '../context/context'
import Card from './Card'
import { Link } from 'react-router-dom'

const Results = () => {
	const context = useContext(Context)
	const { results, loading, getJobs } = context
	useEffect(() => {
		getJobs()
	}, [])

	return (
		<div className='md:col-span-3 my-4'>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				results.map((job) => (
					<Link key={job.id} to={`/${job.id}`}>
						<Card job={job} />
					</Link>
				))
			)}
		</div>
	)
}

export default Results
