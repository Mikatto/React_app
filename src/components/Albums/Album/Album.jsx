import './album.css';

function Album(props) {

    return(
        <div key={props.id} className='album'>
            <div className='user_title'>{props.title}</div>
        </div>
    )
}
export default Album