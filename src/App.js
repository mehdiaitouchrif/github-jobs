import State from './context/State'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import JobDetails from './components/JobDetails'
import Header from './components/Header'

const App = () => {
	return (
		<State>
			<Router>
				<Route path='/' component={Header} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/:id' component={JobDetails} />
				</Switch>
			</Router>
		</State>
	)
}

export default App
