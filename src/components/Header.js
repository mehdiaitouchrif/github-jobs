import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<div>
			<a href='/'>
				<h1 className='heading-primary px-2 md:p-0'>
					<span className='font-semibold'>Github</span> Jobs
				</h1>
			</a>
		</div>
	)
}

export default Header
