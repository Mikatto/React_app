import React from 'react';
const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

class SelectedLanguage extends React.Component {

    render() {
        return (
                <ul className='languages'>
                    {languages.map((language, index) =>
                        <li
                            key={index}
                            style={{color: language === this.props.selectLang ? '#d0021b' : '#000000'}}
                            onClick={this.props.repos?this.props.select:null}>
                            {language}
                        </li>)}
                </ul>
        )
    }
}

export default SelectedLanguage;