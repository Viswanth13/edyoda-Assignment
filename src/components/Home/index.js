import {Component} from 'react'
import {FaCaretDown} from 'react-icons/fa'

// import Modules from '../Modules'
// import Instructor from '../Instructor'
import CommonPart from '../CommonPart'
import './index.css'

class Home extends Component {
  state = {showFullNav: false, activeCourse: 'DS031221'}

  toggleNavBarState = () => {
    this.setState(prevState => ({showFullNav: !prevState.showFullNav}))
  }

  changeActiveCourse = event => {
    this.setState(prevState => ({
      showFullNav: !prevState.showFullNav,
      activeCourse: event.target.textContent,
    }))
  }

  //   checkActive = event => {
  //     const {activeCourse} = this.state
  //     if (activeCourse === event.target.id) {
  //       return 'active li-el'
  //     }
  //     return 'li-el'
  //   }

  render() {
    const {showFullNav, activeCourse} = this.state
    // const activeChosen = this.checkActive()
    // console.log(activeChosen)
    return (
      <>
        <div>
          <div className="company-name-and-user-logo">
            <h2 className="company-head">EDYODA</h2>
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
              <p>{activeCourse}</p>
              <button
                type="button"
                onClick={this.toggleNavBarState}
                className="icon-button"
              >
                <FaCaretDown />
              </button>
              <p className="heading-program">Data Scientist Program</p>
            </div>
            {showFullNav && (
              <ul className="ul-el">
                <li
                  //   className="li-el"
                  className={activeCourse === 'ECRD' ? 'li-el active' : 'li-el'}
                  onClick={this.changeActiveCourse}
                  id="ECRD"
                >
                  ECRD
                </li>
                <li
                  className={
                    activeCourse === 'FSR222222' ? 'li-el active' : 'li-el'
                  }
                  onClick={this.changeActiveCourse}
                  id="FSR222222"
                >
                  FSR222222
                </li>
                <li
                  className={
                    activeCourse === 'DS261121' ? 'li-el active' : 'li-el'
                  }
                  onClick={this.changeActiveCourse}
                  id="DS261121"
                >
                  DS261121
                </li>
                <li
                  className={
                    activeCourse === 'DS031221' ? 'li-el active' : 'li-el'
                  }
                  onClick={this.changeActiveCourse}
                  id="DS031221"
                >
                  DS031221
                </li>
              </ul>
            )}
          </div>
          <div className="lower-website">
            <CommonPart />
            <div className="static-content">
              <div className="home-top-box">
                <div className="home-top-1">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3090/3090011.png"
                    alt="data-analysis"
                    className="data-analytics-img"
                  />
                </div>
                <div className="home-top-2">
                  <p className="home-top-2-short-1">
                    CERTIFICATION | ATTEMPT 1
                  </p>
                  <p className="home-top-2-big">DATA ANALYSIS</p>
                  <p className="home-top-2-big">CERTIFICATION</p>
                  <p className="home-top-2-short-2">COMPLETED | 21 MAR 2022</p>
                </div>
                <div className="home-top-3">
                  <p className="home-top-3-head">Exam Structure</p>
                  <div className="round1-div">
                    <p className="round-head">Round 1</p>
                    <p className="round-text">MCQs</p>
                    <p className="round-text">Coding</p>
                  </div>
                  <div className="round1-div">
                    <p className="round-head">Round 2</p>
                    <p className="round-text">Project</p>
                  </div>
                </div>
                <div className="home-top-4">
                  <button type="button" className="home-top-4-button">
                    VIEW EXAM DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
