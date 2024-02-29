import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

class Events extends Component {
  state = {activeId: '', initialStatus: true}

  currentStatus = id => {
    this.setState({activeId: id, initialStatus: false})
  }

  filterList = () => {
    const {activeId} = this.state
    const event = eventsList.find(i => i.id === activeId)
    return event ? event.registrationStatus : null
  }

  eventClick = () => (
    <div className="click-container">
      <h1>Click on the event ,to view it's registration Details</h1>
    </div>
  )

  registrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="side-image"
        alt="registrations closed"
      />
      <h1>You have already registered</h1>
    </>
  )

  register = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="side-image"
        alt="Registered"
      />
      <h1>You have already registered</h1>
    </>
  )

  yetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="side-image"
        alt="Yet to register"
      />
      <h1>Stay tuned, we will reopen registration</h1>
      <button type="button">register Here</button>
    </>
  )

  render() {
    const {initialStatus, activeId} = this.state
    const list = this.filterList()

    return (
      <div className="events-container">
        <div>
          <h1>Events</h1>
          <div className="">
            <ul>
              {eventsList.map(event => (
                <EventItem
                  eventsList={event}
                  key={event.id}
                  currentStatus={this.currentStatus}
                  value={event.id}
                  isActive={event.id === activeId}
                />
              ))}
            </ul>
          </div>
        </div>
        {initialStatus ? (
          this.eventClick()
        ) : (
          <div className="register-container">
            {list === 'YET_TO_REGISTER' && this.yetToRegister()}
            {list === 'REGISTERED' && this.register()}
            {list === 'REGISTRATIONS_CLOSED' && this.registrationClosed()}
          </div>
        )}
      </div>
    )
  }
}

export default Events
