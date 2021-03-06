import { connect } from 'react-redux'
import * as EditorActions from '../actions'
import { bindActionCreators } from 'redux'
import Main from '../components/Main'

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(EditorActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
