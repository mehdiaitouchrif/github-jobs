const Card = ({ job }) => {
	return (
		<div className='card cursor-pointer'>
			<div className='flex items-center'>
				<img
					src={job.company_logo}
					alt='Company Mark'
					className='rounded w-full object-cover'
				/>
			</div>
			<div className='col-span-7'>
				<h2 className='font-bold'>{job.company}</h2>
				<h1 className='mt-2 mb-3 text-xl'>{job.title} </h1>
				<h3 className='badge'>{job.type} </h3>
			</div>
		</div>
	)
}

export default Card
