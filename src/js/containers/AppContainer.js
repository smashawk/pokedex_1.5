import {connect} from 'react-redux';
import {decidePokemon} from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => ({
  number: state.number,
  errorText: state.errorText,
});

const mapDispatchToProps = dispatch => ({
      decidePokemon: number => dispatch(decidePokemon(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
