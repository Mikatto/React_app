import {Component} from "react";
import {fetchPopularRepos} from "../../api/fetchPopularRepos";
import SelectLanguage from "./SelectLanguage";
import RepoGrid from "./RepoGrid";
import {connect} from "react-redux";
import { reposDataAction } from '../../redux/actions/app.actions';

const mapStateToProps = (state) => {
    return {
        language:state.languageReducer.selectedLanguage,
        repos:state.repoReducer.repos
    };
}

const mapDispatchToProps= (dispatch) => {
    return {
        setRepo:(value)=>dispatch(reposDataAction(value))
    };
}

class Popular extends Component {

    componentDidMount() {
        this.fetchPopularReposHandler(this.props.language);
    }

    fetchPopularReposHandler = (text) => {
        fetchPopularRepos(text)
            .then(data => this.props.setRepo(data));
    }

    render() {
        return (
            <>
                <span>{this.props.text}</span>
                <SelectLanguage/>
                {this.props.repos ?
                    <RepoGrid/> :
                    <p style={{ textAlign: 'center'}}>Loading ...</p>}
            </>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Popular);
