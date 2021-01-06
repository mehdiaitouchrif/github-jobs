import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/context'

const JobDetails = (props) => {
	const context = useContext(Context)
	const { getJob, jobDetails, loading } = context
	const id = props.match.params.id

	useEffect(() => {
		getJob(id)
	}, [])

	return (
		<div className='grid gap-4 md:grid-cols-5 px-4 py-2 md:px-0'>
			<div className='w-full'>
				<Link to='/' className='font-semibold'>
					Back to search{' '}
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
					<h1>Loading...</h1>
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
