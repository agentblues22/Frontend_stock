import './stylesheets/moredet.css';
function Moredet(props) {
	const data = [
		{
			final: props.final,
			time: props.time,
			last: props.Last,
			sector: props.sector,
		},
	];

	return (
		<div className={props.css}>
			<table id="customers">
				<tr>
					<th>Important Details</th>
					<th> </th>
				</tr>
				<tr>
					<td>EPS</td>
					<td>{props.EPS}</td>
				</tr>
				<tr>
					<td>Profit Margin</td>
					<td>{props.ProfitM}</td>
				</tr>
				<tr>
					<td>Currency</td>
					<td>{props.Currency}</td>
				</tr>
				<tr>
					<td>EBITDA</td>
					<td>{props.EBITDA}</td>
				</tr>
				<tr>
					<td>Revenue Per Share</td>
					<td>{props.RevenuePerShare}</td>
				</tr>
				<tr>
					<td>Operating Margin</td>
					<td>{props.OperatingMargin}</td>
				</tr>
				<tr>
					<td>Return On Assets</td>
					<td>{props.ReturnOnAssets}</td>
				</tr>
				<tr>
					<td>Return On Equity</td>
					<td>{props.ReturnOnEquity}</td>
				</tr>
				<tr>
					<td>Revenue</td>
					<td>{props.Revenue}</td>
				</tr>
				<tr>
					<td>Gross Profit</td>
					<td>{props.GrossProfit}</td>
				</tr>
				<tr>
					<td>Quarterly Earnings Growth</td>
					<td>{props.QuarterlyEarningsGrowth}</td>
				</tr>
				<tr>
					<td>Quarterly Revenue Growth</td>
					<td>{props.QuarterlyRevenueGrowth}</td>
				</tr>
			</table>
		</div>
	);
}
export default Moredet;
