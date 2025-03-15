import ResponsivePlot from 'react-plotly.js';
import './stylesheets/lineplot.css';
function AI(props) {
	async function askDeepSeek(question) {
		const response = await fetch(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer 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`,
				},
				body: JSON.stringify({
					model: 'deepseek/deepseek-r1:free',
					messages: [
						{ role: 'system', content: 'You are an AI assistant.' },
						{ role: 'user', content: question },
					],
				}),
			}
		);

		const data = await response.json();
		console.log(data.choices[0]?.message?.content || 'No response');
	}

	// Example usage
	askDeepSeek(
		'Is it a good time to invest in Tesla? i will giv you a few metrics to make your decision. final value:' +
			props.final +
			' EPS:' +
			props.EPS +
			' profit margin:' +
			props.ProfitM +
			' EBITDA:' +
			props.EBITDA +
			' revenue per share:' +
			props.RevenuePerShare +
			' return on assets:' +
			props.ReturnOnAssets +
			' return on equity:' +
			props.ReturnOnEquity +
			' revenue:' +
			props.Revenue +
			' quarterly earnings growth:' +
			props.QuarterlyEarningsGrowth
	);

	return (
		<div className="lineplot" onClick={askDeepSeek}>
			ggg
		</div>
	);
}
export default AI;
