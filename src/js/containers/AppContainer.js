import {connect} from 'react-redux';
import {addCount, changeMessage} from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => ({
  count: state.count,
  message: state.message,
});

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return(
    {
      addCount: () => dispatch(addCount()),
      changeMessage: message => dispatch(changeMessage(message)),
    }
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
