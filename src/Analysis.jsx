import { useState } from 'react';
import './stylesheets/analysis.css';
import { useEffect } from 'react';
import Plot from 'react-plotly.js';
import Line from './lineplot';
import Low from './lowplot';
import Moav from './lowplot';
import General from './general';
import Candle from './Candlestick';
import Moredet from './moredet';
import AI from './AIgent.jsx';
function Analysis() {
	const [Records, setRecords] = useState({});
	const [Chart, setChart] = useState(null);
	const [Navig, setNavig] = useState('open');
	const [Navsymb, setNavsymb] = useState('›');

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
	const toggleStatus = () => {
		if (Navig === 'closed') {
			setNavig('open');
			setNavsymb('‹');
		} else {
			setNavig('closed');
			setNavsymb('›');
		}
	};
	// Function to handle checkbox changes

	const [isChecked, setIsChecked] = useState(true);
	const [Basic, setBasic] = useState('generalcontainer');

	const handleCheckboxChange = () => {
		if (isChecked == false) {
			setIsChecked(true);
			setBasic('generalcontainer');
		} else {
			setIsChecked(false);
			setBasic('generalcontainerclose');
		}
	};
	const [isChecked2, setIsChecked2] = useState(true);
	const [Candles, setCandles] = useState('candle');

	const handleCandleChange = () => {
		if (isChecked2 == false) {
			setIsChecked2(true);
			setCandles('candle');
		} else {
			setIsChecked2(false);
			setCandles('candleclose');
		}
	};
	const [isChecked3, setIsChecked3] = useState(true);
	const [stockVal, setstockVal] = useState('chart');
	const [cnav, setcnav] = useState('chartnav');

	const handleStockChange = () => {
		if (isChecked3 == false) {
			setIsChecked3(true);
			setstockVal('chart');
			setcnav('chartnav');
		} else {
			setIsChecked3(false);
			setstockVal('chartclose');
			setcnav('chartnavclose');
		}
	};

	const [isChecked4, setIsChecked4] = useState(true);
	const [Moavs, setMoavs] = useState('chart2');

	const handleMoavChange = () => {
		if (isChecked4 == false) {
			setIsChecked4(true);
			setMoavs('chart2');
		} else {
			setIsChecked4(false);
			setMoavs('chart2close');
		}
	};
	const [isChecked5, setIsChecked5] = useState(true);
	const [Metric, setMetric] = useState('moredetcontainer');

	const handleMetricChange = () => {
		if (isChecked5 == false) {
			setIsChecked5(true);
			setMetric('moredetcontainer');
		} else {
			setIsChecked5(false);
			setMetric('moredetcontainerclose');
		}
	};

	return (
		<div className="maincontainer">
			<div className="Navcon">
				<div className={Navig}>
					<div className="search"></div>
					<div className="toggler">
						<input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<label className="check" >
							{' '}
							Basic Metrics
						</label>
						<br />
						<input
							type="checkbox"
							checked={isChecked2}
							onChange={handleCandleChange}
						/>
						<label className="check" >
							{' '}
							Candlestick Graph
						</label>
						<br />
						<input
							type="checkbox"
							checked={isChecked3}
							onChange={handleStockChange}
						/>
						<label className="check" >
							{' '}
							Line Graph
						</label>
						<br></br>
						<input
							type="checkbox"
							checked={isChecked4}
							onChange={handleMoavChange}
						/>
						<label className="check" >
							{' '}
							Moving Average
						</label>
						<br></br>
						<input
							type="checkbox"
							checked={isChecked5}
							onChange={handleMetricChange}
						/>
						<label className="check" >
							{' '}
							Important Metrics
						</label>
						<br></br>
					</div>
				</div>

				<div className="btndiv">
					<button className="openbtn" onClick={toggleStatus}>
						{Navsymb}
					</button>
				</div>
			</div>
			<div className="leftside">
				<div className="details">
					<div className="heading">{Records['Company']}</div>
					<div className="basic_desc">{Records['Description']}</div>
				</div>
				<General
					final={Records['final']}
					time={Records['interval']}
					Last={Records['Last refresh']}
					css={Basic}
					sector={Records['Sector']}
				/>
				<Candle
					moav={Records['moving Average']}
					close={Records['closelist']}
					high={Records['highlist']}
					low={Records['lowlist']}
					open={Records['openlist']}
					Index={Records['index']}
					css={Candles}
				/>
				<AI
					final={Records['final']}
					time={Records['interval']}
					Last={Records['Last refresh']}
					EPS={Records['EPS']}
					ProfitM={Records['ProfitMargin']}
					Currency={Records['Currency']}
					EBITDA={Records['EBITDA']}
					RevenuePerShare={Records['RevenuePerShareTTM']}
					OperatingMargin={Records['OperatingMarginTTM']}
					ReturnOnAssets={Records['ReturnOnAssetsTTM']}
					ReturnOnEquity={Records['ReturnOnEquityTTM']}
					Revenue={Records['RevenueTTM']}
					GrossProfit={Records['GrossProfitTTM']}
					QuarterlyEarningsGrowth={Records['QuarterlyEarningsGrowthYOY']}
					QuarterlyRevenueGrowth={Records['QuarterlyRevenueGrowthYOY']}
				/>
			</div>
			<div className="charts">
				<div className={cnav}>
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
				<div className={stockVal}>
					<Line Records={Chart} Index={Records['index']} />
				</div>
				<div className={Moavs}>
					<Moav
						moav={Records['moving Average']}
						close={Records['closelist']}
						high={Records['highlist']}
						low={Records['lowlist']}
						open={Records['openlist']}
						Index={Records['index']}
					/>
				</div>
				<Moredet
					css={Metric}
					EPS={Records['EPS']}
					ProfitM={Records['ProfitMargin']}
					Currency={Records['Currency']}
					EBITDA={Records['EBITDA']}
					RevenuePerShare={Records['RevenuePerShareTTM']}
					OperatingMargin={Records['OperatingMarginTTM']}
					ReturnOnAssets={Records['ReturnOnAssetsTTM']}
					ReturnOnEquity={Records['ReturnOnEquityTTM']}
					Revenue={Records['RevenueTTM']}
					GrossProfit={Records['GrossProfitTTM']}
					QuarterlyEarningsGrowth={Records['QuarterlyEarningsGrowthYOY']}
					QuarterlyRevenueGrowth={Records['QuarterlyRevenueGrowthYOY']}
				/>
			</div>
		</div>
	);
}
export default Analysis;
