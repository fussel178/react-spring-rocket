import Logo from '../assets/logo.svg';
import './water-mark.css';

export function WaterMark() {
	return (
		<div className="water-mark">
			<div>
				<p>Part of Telestion</p>
				<p>A project by WüSpace e. V.</p>
			</div>
			<div>
				<img src={Logo} alt="WüSpace e. V. Logo" />
			</div>
		</div>
	);
}
