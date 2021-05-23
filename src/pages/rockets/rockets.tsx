import { FC, useState, useEffect } from 'react';
import { API_Rocket } from '../../API/rockets';
import { Link } from 'react-router-dom';

export const Rockets: FC<{}> = () => {
	const [rocketData, setRocketData] = useState<any>(null);

	useEffect(() => {
		const getAPIData = async (): Promise<any | null> => {
			const data = await API_Rocket.getAllRockets();
			setRocketData(data);
		};
		getAPIData();
	}, []);

	const renderRocketData = (currentRocket: any, index: number): JSX.Element => {
		return (
			<div key={index}>
				<p>{currentRocket.name}</p>
				<p>{currentRocket.description}</p>
				<img src={currentRocket.flickr_images[0]} alt='' />
				<Link to={`/rockets/${currentRocket.id}`}>Click to see more info</Link>
			</div>
		);
	};

	return (
		<div>
			<h4>This is the rocket page</h4>
			{console.log(rocketData)}
			<div>{rocketData && rocketData.map(renderRocketData)}</div>
		</div>
	);
};
