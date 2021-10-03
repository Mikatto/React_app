import "./app.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import NewNote from "./components/NoteNew/NoteNew";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import { ThemeContext, themes } from "./context/theme-context";

function App() {
    const [ notes, setNotes ] = useState([]);
    const [ isInput, toggleInput] = useState(false);
    const [ noteText, setNoteText] = useState(null);
    const [ currentTheme, setCurrentTheme ] = useState(themes.light);

    useEffect(() => {
        getDataHandler();
    }, [])

    const getDataHandler = () => {
        axios.get(`https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers`)
            .then(response => setNotes(response.data))
    }

    const deleteHandler = (id) => {
        axios.delete(`https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/${id}`)
            .then(() => getDataHandler());
    }

    const editHandler = (text, id) => {
        axios.put(`https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/${id}`, {description: text})
            .then(() => getDataHandler());
    }

    const inputHandler = () => {
        toggleInput(!isInput);
    }

    const newNoteSubmit = (event) => {
        event.preventDefault();
        inputHandler();
        axios.post(`https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers`, {description: noteText})
            .then(() => getDataHandler());
    }

    const newNoteChange = (event) => {
        setNoteText(event.target.value);
    }

    const toggleTheme = () => {
        setCurrentTheme( prevTheme => prevTheme === themes.light ? themes.dark : themes.light);
    }

    return (
        <ThemeContext.Provider value={currentTheme}>
            <div className="app" style={{ background: currentTheme.bodyBackground }}>
                <div className="notes__wrap">
                    <div className="notes__header">
                    <button className="btn new__btn" onClick={inputHandler}>New Note</button>
                        <ThemeChanger onChange={toggleTheme} />
                    </div>
                    <div className="notes__items">
                        {isInput ? <div className="note" style={{background: currentTheme.background, border: currentTheme.borderColor}}>
                        <NewNote onSubmit={newNoteSubmit}
                        onChange={newNoteChange}
                        onDiscard={inputHandler}/>
                        </div>: null}

                        {notes.map( item => {
                            return (
                                <Note key={item.id}
                                    text={item.description}
                                    onDelete ={() => deleteHandler(item.id)}
                                    onEdit={ (text) => editHandler(text, item.id)}/>
                            )
                        })}
                    </div>
                </div>
            </div>   
        </ThemeContext.Provider>
    )
}

export default App;