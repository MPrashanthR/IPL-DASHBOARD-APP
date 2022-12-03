// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamList()
  }

  getIplTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return isLoading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="bg-container">
        <div className="app-container">
          <div className="logo-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          <div className="team-container">
            <ul className="item-list">
              {teamList.map(eachItem => (
                <TeamCard key={eachItem.id} TeamDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
