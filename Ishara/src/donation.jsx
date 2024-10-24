import './donation.css';
import { Link } from 'react-router-dom';

function Donation() {
  
  return (
    <div>
        <div className="dontcont">
            <div>
                <h1>Donate Us</h1>
                <p>Your generous contribution helps us empower the deaf community by improving access to education and communication tools.</p>
                <div><Link to="/donationpage">Donate Now </Link></div>

            </div>
            <div>
                <img src={donatepng} alt="donation img"></img>
            </div>
        </div>
    </div>
  )
}

export default Donation ;
