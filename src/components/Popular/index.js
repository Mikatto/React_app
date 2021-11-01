import {Component} from "react";
import SelectLanguage from "./SelectLanguage";
import RepoGrid from "./RepoGrid";
import {connect} from "react-redux";
import { getPopRep } from '../../redux/thunk/app.fetchPopRep';


const mapStateToProps = (state) => {
    return {
        language:state.languageReducer.selectedLanguage,
        repos:state.popRepReducer,
    };
}

const mapDispatchToProps= (dispatch) => {
    return {
        setRepo:(value)=>dispatch(getPopRep(value)),
    };
}

class Popular extends Component {

    componentDidMount() {
        this.fetchPopularReposHandler(this.props.language);
    }

    fetchPopularReposHandler = (text) => {
        this.props.setRepo(text)
    }

    render() {
        if (this.props.repos.loading) {
            return (
                <>
                <SelectLanguage/>
                <div>LOADING</div>
                </>
            )
        }
        if (this.props.repos.error) {
            return (
                <>
            <SelectLanguage/>
            <div>error{this.props.repos.error}</div>
            </>
            )
        }
        return (
            <>
                <SelectLanguage/>
                {this.props.repos.poprep ?
                    <RepoGrid/> :null}
            </>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Popular);
