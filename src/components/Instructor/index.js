import {Component} from 'react'
import {Link} from 'react-router-dom'
import CommonPart from '../CommonPart'

import './index.css'

class Instructor extends Component {
  render() {
    return (
      <>
        <div>
          <div className="company-name-and-user-logo">
            <Link to="/" className="link">
              <h3 className="company-head">EDYODA</h3>
            </Link>
            <div className="logo-hi-test">
              <p>Hi Test Learners!</p>
              <div className="user-profile-logo">
                <img
                  src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1680147743~exp=1680148343~hmac=3a5aaf2aea9688cb39917c9039a8d29e841695cb50c8bffff9698cc4209ad6b9"
                  alt="profile-logo"
                  className="profile-logo-image"
                />
              </div>
            </div>
          </div>
          <div className="upper-navbar">
            <div className="selected-course-and-icon">
              <p>DS031221</p>
              <p className="heading-program">Data Scientist Program</p>
            </div>
          </div>
          <div className="lower-website">
            <CommonPart />
            <div className="instructor-total-box">
              <h2>Instructor Details</h2>
              <div className="instructor-box">
                <img
                  src="https://edyoda.s3.amazonaws.com/media/profile-picture/profile_pic_Jayeshvyas.jpg"
                  alt="instructor"
                  className="instructor-image"
                />
                <h3>Your Instructor is Jayesh Vyas</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Instructor
