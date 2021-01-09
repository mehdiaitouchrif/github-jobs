import Skeleton from './Skeleton'
import Shimmer from './Shimmer'

const JobSkeleton = () => {
	return (
		<div className='skeleton-wrapper'>
			<div className='skeleton-jobs'>
				<div>
					<Skeleton type='square' />
				</div>
				<div>
					<Skeleton type='title' />
					<Skeleton type='text' />
					<Skeleton type='text' />
				</div>
			</div>
			<Shimmer />
		</div>
	)
}

export default JobSkeleton
