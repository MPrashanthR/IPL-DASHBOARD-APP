// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {TeamDetails} = props
  const {id, teamImageUrl, name} = TeamDetails
  return (
    <li key={id} className="item">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="ipl-item-logo" src={teamImageUrl} alt={name} />
        <p className="item-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
