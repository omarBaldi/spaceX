import { FC } from 'react';
import { Maybe } from '../../types/maybe';

type DragonsProps = {
	id?: Maybe<string>;
};

export const Dragons: FC<DragonsProps> = (props: DragonsProps): JSX.Element => {
	return (
		<div>
			<p>This is the dragons page</p>
		</div>
	);
};
