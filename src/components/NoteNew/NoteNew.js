import "./style.css";

function NoteNew(props) {


    return(
        <form onSubmit={props.onSubmit} onReset={props.onDiscard} className="note__new">
            <textarea onChange={props.onChange} className="note__input" value={props.value}></textarea>
            <div className="input__btns">
                <button type="submit" className="btn new__btn">Ok</button>
                <button type="reset" className="btn delete__btn">Cancel</button>
            </div>
        </form>
    )
}

export default NoteNew;