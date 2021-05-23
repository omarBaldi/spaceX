import { FC } from 'react';
import HomepageProps from './dto';
import { ImageBanner } from '../../components/ImageBanner/image-banner';

export const Homepage: FC<HomepageProps> = ({
	banners,
}: HomepageProps): JSX.Element => {
	return (
		<div>
			{banners?.map((bannerData, index) => {
				return <ImageBanner key={index} {...bannerData} />;
			})}
		</div>
	);
};
