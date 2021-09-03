import {Component} from "react";
import {fetchPopularRepos} from "./api/fetchPopularRepos";
import RepoGrid from "./RepoGrid.js";
import SelectedLang from "./SelectedLanguage.jsx";

class App extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null
    }

    repoFetch(){
      fetchPopularRepos(this.state.selectedLanguage)
      .then(data => this.setState({ repos: data }));
    }

    componentDidMount() {
        this.repoFetch();
    }

    selectLanguage = (event) => {
        this.setState({ repos: null });
        this.repoFetch();
        if(event.target.innerText !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: event.target.innerText});
        }
    }

    render() {
        return (
            <>
            <SelectedLang select={this.selectLanguage}
            selectLang={this.state.selectedLanguage}
            repos={!!this.state.repos}/>
                {this.state.repos ?
                    <RepoGrid repos={this.state.repos} /> :
                    <p style={{ textAlign: 'center'}}>Loading ...</p>}
            </>
        )
    }
}

export default App;