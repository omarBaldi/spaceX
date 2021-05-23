import './app.css';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage';
import { Dragons } from './pages/dragons/dragons';
import { Rockets } from './pages/rockets/rockets';
import { Ships } from './pages/ships/ships';

const bannersHomepage = [
	{ title: 'Dragons', linkTo: '/dragons', imageURL: '' },
	{ title: 'Rockets', linkTo: '/rockets', imageURL: '' },
	{ title: 'Ships', linkTo: '/ships', imageURL: '' },
];

const routes = [
	{ path: '/', render: () => <Homepage banners={bannersHomepage} /> },
	{ path: '/dragons', component: Dragons },
	{ path: '/rockets', component: Rockets },
	{ path: '/ships', component: Ships },
];

function App() {
	return (
		<>
			<Switch>
				{routes.map((currentRoute, index) => {
					return <Route exact key={index} {...currentRoute} />;
				})}
			</Switch>
		</>
	);
}

export default App;
