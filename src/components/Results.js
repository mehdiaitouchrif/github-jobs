import { useContext, useEffect } from 'react'
import Context from '../context/context'
import Card from './Card'
import { Link } from 'react-router-dom'
import JobSkeleton from './skeletons/JobsSkeleton'

const Results = () => {
	const context = useContext(Context)
	const { results, loading, getJobs } = context
	useEffect(() => {
		getJobs()
	}, [])

	const createArr = (num) => {
		let arr = []
		for (let i = 0; i < num; i++) {
			arr.push(num[i])
		}
		return arr
	}

	return (
		<div className='md:col-span-3 my-4'>
			{loading
				? createArr(10).map(() => <JobSkeleton />)
				: results.map((job) => (
						<Link key={job.id} to={`/${job.id}`}>
							<Card job={job} />
						</Link>
				  ))}
		</div>
	)
}

export default Results
