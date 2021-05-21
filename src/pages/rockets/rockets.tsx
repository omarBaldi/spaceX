import { FC } from 'react';
import { Maybe } from '../../types/maybe';

type RocketsProps = {
	id?: Maybe<string>;
};

export const Rockets: FC<RocketsProps> = (props: RocketsProps): JSX.Element => {
	return (
		<div>
			<p>This is the rocket page</p>
		</div>
	);
};
