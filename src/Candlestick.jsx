import ResponsivePlot from 'react-plotly.js';
import './stylesheets/candle.css';
function Candle(props) {
	const data = [
		{
			x: props.index,
			open: props.open,
			high: props.high,
			low: props.low,
			close: props.close,
			type: 'candlestick',
		},
	];

	const layout = {
		title: 'Candlestick Plot of high,low and Close',
		xaxis: { title: 'Time' },
		yaxis: { title: 'values' },
	};

	const config = {
		responsive: true,
	};
	return (
		<div className="candle">
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
