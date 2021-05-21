import { FC } from 'react';
import { Maybe } from '../../types/maybe';

type ShipsProps = {
	id?: Maybe<string>;
};

export const Ships: FC<ShipsProps> = (props: ShipsProps): JSX.Element => {
	return (
		<div>
			<p>This is the ships page</p>
		</div>
	);
};
