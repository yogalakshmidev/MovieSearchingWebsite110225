import { Link } from 'react-router';
import pagenotfound from '../assets/pagenotfound.jpeg';
export const PageNotFound = () => {
  return (
    <div className='container'>
      <img src={pagenotfound} className='img-fluid'/>
      <div className="text-center">
        <Link to="/" className='btn btn-danger'>Go to Homepage</Link>
      </div>
    </div>
  )
}
