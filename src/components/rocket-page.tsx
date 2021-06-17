import { animated, to, useSpring } from '@react-spring/web';
import { useMove } from 'react-use-gesture';

import { Rocket } from './rocket';
import { WaterMark } from './water-mark';
import './rocket-page.css';

const scalingFactor = 40;
const calcX = (px: number) => (window.innerWidth / 2 - px) / scalingFactor;
const calcY = (py: number) => (window.innerHeight / 2 - py) / scalingFactor;

const defaultDeltaPos = { pos: [0, 0] };

export function RocketPage() {
	const [{ pos }, api] = useSpring(() => defaultDeltaPos);

	const bind = useMove(({ xy: [px, py] }) =>
		api({ pos: [calcX(px), calcY(py)] })
	);

	return (
		<div className="container" {...bind()}>
			<animated.div
				className="background"
				style={{
					scale: 1.1,
					transform: to([pos], ([x, y]) => `translate(${x}px,${y}px)`)
				}}
			/>
			<div className="rocket-pane">
				<Rocket />
			</div>
			<WaterMark />
		</div>
	);
}
