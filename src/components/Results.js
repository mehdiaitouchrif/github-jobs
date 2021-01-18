import { useContext, useEffect, useState } from 'react'
import Context from '../context/context'
import Card from './Card'
import { Link } from 'react-router-dom'
import JobSkeleton from './skeletons/JobsSkeleton'
import Paginate from './Paginate'

const Results = () => {
	const context = useContext(Context)
	const { results, loading, getJobs } = context

	const [currentPage, setCurrentPage] = useState(1)
	const [jobsPerPage, setJobsPerPage] = useState(5)

	useEffect(() => {
		getJobs()
	}, [])

	const indexOfLastJob = currentPage * jobsPerPage
	const indexOfFirstJob = indexOfLastJob - jobsPerPage
	const currentJobs = results.slice(indexOfFirstJob, indexOfLastJob)

	const createArr = (num) => {
		let arr = []
		for (let i = 0; i < num; i++) {
			arr.push(num[i])
		}
		return arr
	}

	const changePage = (page) => setCurrentPage(page)

	return (
		<div className='md:col-span-3 my-4'>
			{loading
				? createArr(5).map(() => <JobSkeleton />)
				: currentJobs.map((job) => (
						<Link key={job.id} to={`/${job.id}`}>
							<Card job={job} />
						</Link>
				  ))}
			<Paginate
				jobsPerPage={jobsPerPage}
				totalJobs={results.length}
				changePage={changePage}
			/>
		</div>
	)
}

export default Results
