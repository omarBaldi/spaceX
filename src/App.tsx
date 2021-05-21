import './app.css';
import { Switch, Route } from 'react-router-dom';
import { ImageBanner } from './components/ImageBanner/image-banner';
import { Dragons } from './pages/dragons/dragons';
import { Rockets } from './pages/rockets/rockets';
import { Ships } from './pages/ships/ships';

const data = [
	{ title: 'Dragons', linkTo: '/dragons', imageURL: '', component: Dragons },
	{ title: 'Rockets', linkTo: '/rockets', imageURL: '', component: Rockets },
	{ title: 'Ships', linkTo: '/ships', imageURL: '', component: Ships },
];

function App() {
	return (
		<div>
			{data.map((bannerData, index) => {
				return <ImageBanner key={index} {...bannerData} />;
			})}

			<Switch>
				{data.map((currentData, index) => {
					return (
						<Route
							key={index}
							path={currentData.linkTo}
							component={currentData.component}
						/>
					);
				})}
			</Switch>
		</div>
	);
}

export default App;
