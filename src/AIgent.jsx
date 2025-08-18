import axios from 'axios'
import './stylesheets/AIgent.css';
import { useState } from 'react';
function AI(props) {
	const [Review, setReview] = useState('');
	const [But, setBut] = useState('closeB');
	const askDeepSeek = () => {
		if (But == 'closeB') {
			setBut('openB');
		} else {
			setBut('closeB');
		}
	};
	function handleSubmit(e) {
    e.preventDefault(); 
   axios.get('http://127.0.0.1:8000/ask', {
  params: {
    prompt: Review  // 👈 This sends ?prompt=Review in the URL
  }
})
.then(response => {
  console.log("AI Response:", JSON.parse(response.data.AI.body).response);
})
.catch(error => {
  console.error("Error fetching response:", error);
});

    
  }


	return (
		<>
			<div className="buttn" onClick={askDeepSeek}></div>
			<div className={But}>
			
			<div className='aicontent'></div>
			<div className= 'sender'>
				<form onSubmit={handleSubmit}>
  				<input type="text" className='msgbox' value={Review} onChange={(e)=>setReview(e.target.value)} placeholder='enter text'/>
  				<input type="submit" className='submitbutn' value="Submit"/>
				</form> 
			</div>
			
			</div>
		</>
	);
}
export default AI;
