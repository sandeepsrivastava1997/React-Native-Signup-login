import {connect} from 'react-redux';
import SignIn from './SignIn'


const mapStateToProps = state => ({
    userName: state.userName
    Password: state.Password
})

const mapDispatchToProps = dispatch => ({
        type: SET_USER_NAME,
        userName: id => dispatch({type: 'SET_USER_NAME'}),
        type: SET_USER_PASSWORD,
        Password: id => dispatch({type:'SET_USER_PASSWORD'})
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)