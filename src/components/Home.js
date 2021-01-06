import Filters from './Filters'
import Results from './Results'
import Search from './Search'

const Home = () => {
	return (
		<div className='px-2 md:px-0'>
			<Search />
			<main className='main grid gap-6 md:grid-cols-4'>
				<Filters />
				<Results />
			</main>
		</div>
	)
}

export default Home
