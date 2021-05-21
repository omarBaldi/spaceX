import { FC, useState } from 'react';
import Styles from './image-banner.module.scss';
import ImageBannerProps from './dto';

export const ImageBanner: FC<ImageBannerProps> = ({
	imageURL,
	title,
	linkTo,
}: ImageBannerProps): JSX.Element => {
	const [hover, setHoverEffect] = useState<boolean>(false);

	return (
		<div
			className={`${Styles.bannerContainer} ${
				imageURL ? '' : `${Styles.noImage}`
			} ${hover ? `${Styles.active}` : ''}`}
			onMouseEnter={() => setHoverEffect(true)}
			onMouseLeave={() => setHoverEffect(false)}
		>
			<div className={Styles.bannerImage}>
				{imageURL && <img src={imageURL} alt='' />}
			</div>
			<div className={Styles.bannerText}>
				<h3>{title}</h3>
			</div>
		</div>
	);
};
