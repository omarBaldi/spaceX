import './app.css';
import { ImageBanner } from './components/ImageBanner/image-banner';

function App() {
	return (
		<div>
			<ImageBanner title='Dragons' linkTo='#' />
			<ImageBanner title='Rockets' linkTo='#' />
			<ImageBanner title='Ships' linkTo='#' />
		</div>
	);
}

export default App;
