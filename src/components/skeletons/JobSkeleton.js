import Skeleton from './Skeleton'
import Shimmer from './Shimmer'

const JobSkeleton = () => {
	return (
		<div className='skeleton-wrapper'>
			<div className='skeleton-job'>
				<Skeleton type='title' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
				<Skeleton type='long-text' />
			</div>
			<Shimmer />
		</div>
	)
}

export default JobSkeleton
