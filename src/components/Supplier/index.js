
import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assests/images/img12.png';

const Supplier = () => {
  
  return (
    <>
     
      <div className="container supplier-page">
      <Link className='self' to='/'>
            <img src={LogoS} alt="donor"/>
      </Link>
        <div className="text-zone">
          <h1>
            
         Food Supplier
          </h1>
          <p>
          Food Supplier bridge the gap between surplus food donors and those in need. Through their volunteer efforts, they transport donated food to recipient organizations, ensuring that no meal goes to waste.

Join us in the fight against hunger. Become a Food Carrier today
          </p>
          <Link to="/Ssignup" className='flat-button with-margin'>Supplier Sign Up</Link>

          <Link to="/Ssignin" className='flat-button'>Supplier Sign In</Link>
         
        
        </div>

      </div>
     
    </>
  )
}

export default Supplier