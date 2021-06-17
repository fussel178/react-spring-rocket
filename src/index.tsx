import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './fonts.css';
import './index.css';
import { App } from './components/app';

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
