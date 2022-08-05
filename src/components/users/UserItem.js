import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card shadow-xl compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className= "rounded-full shadow w-14 h14">
                        <img src={avatar_url} alt="Profile_image" /> {/*USER IMAGE*/}
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2> {/*USER LOGIN NAME*/}
                <Link className='text-base-content text-opacity-40' to={`/user/${login}`}> {/*GO TO USER PROFILE PAGE*/}
                    Visit Profile
                </Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes={
    user: PropTypes.object.isRequired
}
export default UserItem