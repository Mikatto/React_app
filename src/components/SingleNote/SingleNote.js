import "./style.css";
import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";

function SingleNote(props) {
    const theme = useContext(ThemeContext);

    return(
        <div className="note__content">
            <p className="note__text" style={{ color: theme.txtColor }}>{props.text}</p>
            <div className="note__controls">
                <button className="btn edit__btn" onClick={props.onEdit}>Edit</button>
                <button className="btn delete__btn_outline" onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default SingleNote;