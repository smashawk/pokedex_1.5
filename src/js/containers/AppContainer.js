import {connect} from 'react-redux';
import {decidePokemon, decideType, resetType} from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => ({
  number: state.number,
  errorText: state.errorText,
  subTypeArray: state.subTypeArray
});

const mapDispatchToProps = dispatch => ({
      decidePokemon: number => dispatch(decidePokemon(number)),
      decideType: () => dispatch(decideType()),
      resetType: () => dispatch(resetType()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
