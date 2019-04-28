import {connect} from 'react-redux';
import {addCount, changeMessage, decidePokemon} from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => ({
  count: state.count,
  message: state.message,
  number: state.number,
});

const mapDispatchToProps = dispatch => {
  return(
    {
      addCount: () => dispatch(addCount()),
      changeMessage: message => dispatch(changeMessage(message)),
      decidePokemon: number => dispatch(decidePokemon(number))
    }
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
