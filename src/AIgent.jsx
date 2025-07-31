import ResponsivePlot from 'react-plotly.js';
import './stylesheets/AIgent.css';
import { useState } from 'react';
function AI(props) {
	const [Review, setReview] = useState('under work');
	const [But, setBut] = useState('closeB');
	const askDeepSeek = () => {
		if (But == 'closeB') {
			setBut('openB');
		} else {
			setBut('closeB');
		}
	};

	return (
		<>
			<div className="buttn" onClick={askDeepSeek}></div>
			<div className={But}>{Review}</div>
		</>
	);
}
export default AI;
