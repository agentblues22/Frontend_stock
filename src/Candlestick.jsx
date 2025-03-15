import ResponsivePlot from 'react-plotly.js';
import './stylesheets/candle.css';
function Candle(props) {
	const data = [
		{
			x: props.Index,
			open: props.open,
			high: props.high,
			low: props.low,
			close: props.close,
			type: 'candlestick',
		},
	];

	const layout = {
		title: 'Candlestick Plot of high,low and Close',
		autosize: true,
		mode: 'lines+markers',
		plot_bgcolor: 'white',
		paper_bgcolor: 'white',
		xaxis: {
			title: 'Time',
			tickfont: {
				size: 8,
			},
		},
		yaxis: {
			title: 'value',
			tickfont: {
				size: 8,
			},
		},
	};

	const config = {
		responsive: true,
	};
	return (
		<div className={props.css}>
			<ResponsivePlot
				data={data}
				layout={layout}
				config={config}
				useResizeHandler={true}
				style={{ width: '100%', height: '100%' }}
			/>
		</div>
	);
}
export default Candle;
