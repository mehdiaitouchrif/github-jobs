import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/context'
import JobSkeleton from './skeletons/JobSkeleton'

const JobDetails = (props) => {
	const context = useContext(Context)
	const { getJob, jobDetails, loading } = context
	const id = props.match.params.id

	useEffect(() => {
		getJob(id)
	}, [])

	return (
		<div className='grid gap-4 md:grid-cols-5 px-4 py-2 md:px-0'>
			<div className='overflow-hidden'>
				<Link to='/' className='font-semibold flex'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						className='w-6 mr-2'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M7 16l-4-4m0 0l4-4m-4 4h18'
						/>
					</svg>
					<span>Back to search </span>
				</Link>
				<div>
					<p className='text-lg font-semibold'>How to apply?</p>
					{jobDetails && (
						<p dangerouslySetInnerHTML={{ __html: jobDetails.how_to_apply }} />
					)}
				</div>
			</div>
			<div className=' md:col-span-4 mb-6'>
				{loading ? (
					<JobSkeleton />
				) : (
					<div>
						<h1 className='text-2xl mb-3'>{jobDetails.title} </h1>
						<p dangerouslySetInnerHTML={{ __html: jobDetails.description }} />
					</div>
				)}
			</div>
		</div>
	)
}

export default JobDetails
