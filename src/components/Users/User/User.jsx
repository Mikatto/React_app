import './user.css';

function User(props) {

    return(
        <div key={props.id} className='user'>
            <div className='user_main'>
                <div className='user_title'>{props.name} ({props.username})</div>
                <div>{props.email}</div>
                <div>{props.phone}</div>
                <a href='#'>{props.website}</a>
            </div>
            <div className='user_main'>
                <div className='user_title'>{props.street} {props.suite}</div>
                <div>{props.city}</div>
                <div>{props.zipcode}</div>
                <div>{props.lat} {props.lng}</div>
            </div>
            <div className='user_main'>
                <div className='user_title'>{props.companyName}</div>
                <div>{props.catchPhrase}</div>
                <div>{props.bs}</div>
            </div>
        </div>
    )
}
export default User