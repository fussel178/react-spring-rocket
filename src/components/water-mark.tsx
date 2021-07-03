import Logo from '../assets/logo.svg';
import './water-mark.css';

export function WaterMark() {
	return (
		<div className="water-mark">
			<div>
				<p>Part of Telestion</p>
				<p>A project by WüSpace e. V.</p>
				<p>
					Rocket image by
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://therealjerrylow.com/"
					>
						Jerry Low
					</a>
				</p>
				{/*<a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
					<img
						alt="Creative Commons License"
						style={{ borderWidth: 0 }}
						src="https://i.creativecommons.org/l/by/3.0/80x15.png"
					/>
				</a>
				<br />
				This work is licensed under a{' '}
				<a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
					Creative Commons Attribution 3.0 Unported License
				</a>
				.*/}
			</div>
			<div>
				<img src={Logo} alt="WüSpace e. V. Logo" />
			</div>
		</div>
	);
}
