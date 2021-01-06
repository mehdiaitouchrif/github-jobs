import Background from '../assets/background.png'
import { useContext, useState } from 'react'
import Context from '../context/context'

const Search = () => {
	// Context
	const context = useContext(Context)

	const [term, setTerm] = useState('')

	const onChange = (e) => {
		setTerm(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		context.searchJobs(term)
	}

	return (
		<div className='search-box relative'>
			<img
				src={Background}
				alt='Background Search'
				className='h-full md:h-auto'
			/>
			<div className='absolute top-16 md:top-12 w-full text-center'>
				<form className='relative' className='mx-4' onSubmit={onSubmit}>
					<input
						type='text'
						value={term}
						className='search-input py-2 px-3 rounded text-lg focus:outline-none'
						placeholder='Title, companies, expertise or benefits'
						onChange={onChange}
					/>
				</form>
			</div>
		</div>
	)
}

export default Search
