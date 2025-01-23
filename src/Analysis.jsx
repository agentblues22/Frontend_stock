import { useState } from 'react';
import './stylesheets/analysis.css';
import { useEffect } from 'react';
import Plot from 'react-plotly.js';
import Line from './lineplot';
import Low from './lowplot';
import Moav from './lowplot';
import General from './general';
import Candle from './Candlestick';
function Analysis() {
	const [Records, setRecords] = useState({});
	const [Chart, setChart] = useState(null);

	useEffect(() => {
		fetch('http://127.0.0.1:8000/company?comp=JPM')
			.then((response) => response.json())
			.then((data) => setRecords(data))
			.catch((error) => console.log(error));
	}, []);
	useEffect(() => {
		if (Records['lowlist']) {
			setChart(Records['highlist']); // Set the chart data when Records is updated
		}
	}, [Records]); // Add Records as a dependency
	function hifun() {
		setChart(Records['highlist']);
	}
	function lowfun() {
		setChart(Records['lowlist']);
	}
	function closefun() {
		setChart(Records['closelist']);
	}

	return (
		<div className="maincontainer">
			<div className="leftside">
				<div className="details">
					<div className="heading">
						<div className="logo">
							<img src={Records['Logo']}></img>
						</div>{' '}
						{Records['Company']}
					</div>
					<div className="othdetails">
						<div className="basic_desc">{Records['Description']}</div>
					</div>
				</div>
				<General
					final={Records['final']}
					time={Records['interval']}
					Last={Records['Last refresh']}
				/>
				<Candle
					moav={Records['moving Average']}
					close={Records['closelist']}
					high={Records['highlist']}
					low={Records['lowlist']}
					open={Records['openlist']}
					Index={Records['index']}
				/>
			</div>
			<div className="charts">
				<div className="chartnav">
					<div className="chartbtn" onClick={hifun}>
						High
					</div>
					<div className="chartbtn" onClick={lowfun}>
						Low
					</div>
					<div className="chartbtn" onClick={closefun}>
						Close
					</div>
				</div>
				<div className="chart">
					<Line Records={Chart} Index={Records['index']} />
				</div>
				<div className="chart2">
					<Moav
						moav={Records['moving Average']}
						close={Records['closelist']}
						high={Records['highlist']}
						low={Records['lowlist']}
						open={Records['openlist']}
						Index={Records['index']}
					/>
				</div>
			</div>
		</div>
	);
}
export default Analysis;
