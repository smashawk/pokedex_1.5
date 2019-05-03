import {connect} from 'react-redux';
import {decidePokemon, decideType, resetType} from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => ({
  number: state.number,
  errorText: state.errorText,
  poketype1: state.poketype[0],
  poketype2: state.poketype[1],
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
