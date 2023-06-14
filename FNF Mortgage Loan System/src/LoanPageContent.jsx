import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export function LoanPageContent() {
  


  const navigate = useNavigate()
  function generateRandomId() {

    return Math.floor(Math.random() * 100000000);

  };
  const  ApplyNow=()=> {
    localStorage.setItem("appID",generateRandomId())
    navigate('/loanpage/personaldetails');
     window.location.href= '/loanpage/personaldetails';
  }
  
  return (
    <div className="loan-details">
      <h2 className="text-primary text-center mt-4">Welcome to the Loan Application!</h2>
      <p className="text-justify text-muted mb-3">
        Fill out the form on the left to provide us with the necessary information to process your loan application.
      </p>
      <p className="text-justify text-muted mb-3">
        Our team of experts will review your application and contact you with further details and instructions.
      </p>
      <p className="text-justify text-muted mb-3">
        If you have any questions or need assistance, please don't hesitate to reach out to our customer support team.
      </p>
      <h4 className="text-primary text-center mt-4">How it works</h4>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow-sm mb-4">

            <div className="card-body text-center">
              <h5 className="card-title text-primary">Apply</h5>
              <p className="card-text text-muted">Fill out our simple and secure online form with your personal and financial details.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow-sm mb-4">

            <div className="card-body text-center">
              <h5 className="card-title text-primary">Approve</h5>
              <p className="card-text text-muted">Get an instant decision on your loan application and verify your identity online.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow-sm mb-4">

            <div className="card-body text-center">
              <h5 className="card-title text-primary">Receive</h5>
              <p className="card-text text-muted">Receive your funds directly into your bank account within one or two business day.</p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-primary text-center mt-4">Why choose us</h3>
      <ul class="list-group list-group-horizontal-lg justify-content-center mb-4">
        <li class="list-group-item border-0 bg-transparent"><FontAwesomeIcon icon={faCheck} size="lg" color="#28a745" /> Competitive interest rates</li>
        <li class="list-group-item border-0 bg-transparent"><FontAwesomeIcon icon={faCheck} size="lg" color="#28a745" /> Flexible repayment options</li>
        <li class="list-group-item border-0 bg-transparent"><FontAwesomeIcon icon={faCheck} size="lg" color="#28a745" /> Fast approval process</li>
      </ul>


      <h3 className="text-primary text-center mt-4">Ready to apply?</h3>
      <p className="text-center mb-4">Click the button below to start your loan application today!</p>
      <div className="text-center">
        <button onClick={ApplyNow} className="btn btn-primary btn-lg" >Apply Now</button>
      </div>



      <h3 className="text-primary text-center mt-4">Already Applied?</h3>
      <p className="text-center mb-4">Check your Status!</p>
      <div className="text-center">
        <Link to="/status" className="btn btn-primary btn-lg">Check</Link>
      </div>






    </div>
  )
}