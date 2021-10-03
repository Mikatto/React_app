import './style.css';

const ThemeChanger = (props) => {
    return(
        <div className="class__toggle_btn">
            <input type="checkbox" name="switch" id="switch" onChange={props.onChange}/>
            <label htmlFor="switch"></label> 
        </div>
        
    )
}

export default ThemeChanger;