const Paginate = ({ jobsPerPage, totalJobs, changePage }) => {
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<nav>
			<ul className='flex py-4'>
				{pageNumbers.map((page) => (
					<li
						className='px-4 py-2 rounded bg-gray-200 mx-1 cursor-pointer :hover:bg-gray-300'
						onClick={() => changePage(page)}
						key={page}>
						{page}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Paginate
