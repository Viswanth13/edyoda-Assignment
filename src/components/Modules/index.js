import {Component} from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {
  AiOutlineQuestionCircle,
  AiOutlineCalendar,
  AiOutlineInfoCircle,
  AiFillPlayCircle,
} from 'react-icons/ai'

import {FcDocument} from 'react-icons/fc'
import {CgCodeSlash} from 'react-icons/cg'
import {BiTime, BiVideoRecording} from 'react-icons/bi'
import CommonPart from '../CommonPart'
import './index.css'

class Modules extends Component {
  state = {activeTab: 0}

  changeToTopic = () => {
    this.setState({activeTab: 0})
  }

  changeToQuiz = () => {
    this.setState({activeTab: 1})
  }

  changeToAssignment = () => {
    this.setState({activeTab: 2})
  }

  renderTopics = () => (
    <>
      <div className="total-topics-box">
        <h1>Python Loops</h1>
        <p>15 December 2021, Wednesday, 7:30 PM</p>
        <div className="topics-buttons">
          <div className="topics-1">
            <AiOutlineInfoCircle />
            <span className="box-span">SESSION PLAN</span>
          </div>
          <div className="topics-2">
            <AiFillPlayCircle />
            <span className="box-span">PREWATCH VIDEOS</span>
          </div>
          <div className="topics-3">
            <BiVideoRecording />
            <span className="box-span">SESSION RECORDING</span>
          </div>
          <div className="topics-4">
            <FcDocument />
            <span className="box-span">RECORDINGS</span>
          </div>
        </div>
        <div className="topic-detailed-box">
          <h3>Session Plan</h3>
          <p>Live Session is about to start, Please stay tuned.</p>
          <button type="button" className="join-live-button">
            JOIN LIVE SESSION
          </button>
          <h4>Sub Topics</h4>
          <p>1. Sorting and Indexing Dataframe</p>
          <p>2. Filtering Dataframe</p>
          <p>3. Usage of loc and iloc functions</p>
          <h4>Session Details</h4>
        </div>
      </div>
    </>
  )

  renderQuiz = () => (
    <>
      <div className="assignment-total-box">
        <div className="assignment-head-box">
          <h2>Quiz 1: Data Types</h2>
        </div>
        <p className="grey-text">16 December 2021, Thursday</p>
        <h3>Quiz Details</h3>
        <div className="assignment-box">
          <div className="assignment-box-1">
            <p>10</p>
            <p>Questions</p>
          </div>
          <div className="assignment-box-2">
            <p>125</p>
            <p>Total Score</p>
          </div>

          <div className="assignment-box-3">
            <p>Start:</p>
            <div>
              <AiOutlineCalendar />
              <span className="box-span">16 December 2021</span>
            </div>
            <div>
              <BiTime />
              <span className="box-span">07:30 PM</span>
            </div>
          </div>
          <div className="assignment-box-4">
            <p>Due:</p>
            <div>
              <AiOutlineCalendar />
              <span className="box-span">19 December 2021</span>
            </div>
            <div>
              <BiTime />
              <span className="box-span">11:59 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  renderAssignment = () => (
    <>
      <div className="assignment-total-box">
        <div className="assignment-head-box">
          <h2>Assignment 1: Operators | Loops</h2>
          <div className="head-right">
            <div className="tot-sco">
              <p className="head-right-text">3</p>
              <p className="grey-text">Problems</p>
            </div>

            <div className="tot-sco">
              <p className="head-right-text">100</p>
              <p className="grey-text">Total Score</p>
            </div>
          </div>
        </div>
        <p className="grey-text">20 December 2021</p>
        <h3>Assignment Details</h3>
        <div className="assignment-box">
          <div className="assignment-box-1">
            <p className="box-head-text">3</p>
            <p>Problems</p>
          </div>
          <div className="assignment-box-2">
            <p className="box-head-text">100</p>
            <p>Total Score</p>
          </div>

          <div className="assignment-box-3">
            <p className="box-head-text">Start:</p>
            <div>
              <AiOutlineCalendar />
              <span className="box-span">20 December 2021</span>
            </div>
            <div>
              <BiTime />
              <span className="box-span">07:30 PM</span>
            </div>
          </div>
          <div className="assignment-box-4">
            <p className="box-head-text">Due:</p>
            <div>
              <AiOutlineCalendar />
              <span className="box-span">26 December 2021</span>
            </div>
            <div>
              <BiTime />
              <span className="box-span">11:59 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  render() {
    const {activeTab} = this.state
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
            <div className="module-types-box">
              <button
                type="button"
                className={
                  activeTab === 0
                    ? 'active-tab-selected modules-button'
                    : 'modules-button'
                }
                onClick={this.changeToTopic}
              >
                <div>
                  <BsPlayCircle />
                  <span className="span-el">Python Loops</span>
                </div>
              </button>
              <button
                type="button"
                className={
                  activeTab === 1
                    ? 'active-tab-selected modules-button'
                    : 'modules-button'
                }
                onClick={this.changeToQuiz}
              >
                <div>
                  <AiOutlineQuestionCircle />
                  <span className="span-el">Quiz-1: Data Types</span>
                </div>
              </button>
              <button
                type="button"
                className={
                  activeTab === 2
                    ? 'active-tab-selected modules-button'
                    : 'modules-button'
                }
                onClick={this.changeToAssignment}
              >
                <div>
                  <CgCodeSlash />
                  <span className="span-el">
                    Assignment 1: Operators | Loops
                  </span>
                </div>
              </button>
            </div>
            {activeTab === 0 ? this.renderTopics() : ''}
            {activeTab === 1 ? this.renderQuiz() : ''}
            {activeTab === 2 ? this.renderAssignment() : ''}
          </div>
        </div>
      </>
    )
  }
}

export default Modules
