import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BsLayoutThreeColumns} from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'

class CommonPart extends Component {
  render() {
    return (
      <>
        <div className="side-navbar">
          <Link to="/" className="link">
            <div className="side-nav-items">
              <AiFillHome className="icon-side-navbar" />
              <p className="side-text">Home</p>
            </div>
          </Link>
          {/* <hr className="hr-el" /> */}
          <Link to="/modules" className="link">
            <div className="side-nav-items">
              <BsLayoutThreeColumns className="icon-side-navbar" />
              <p className="side-text">Modules</p>
            </div>
          </Link>
          <Link to="/instructor" className="link">
            <div className="side-nav-items">
              <GiTeacher className="icon-side-navbar" />
              <p className="side-text">Instructor</p>
            </div>
          </Link>
        </div>
      </>
    )
  }
}

export default CommonPart
