import {connect} from 'react-redux';
import {decidePokemon, decideType, decidePartner, showData, resetType} from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => ({
  number: state.number,
  errorText: state.errorText,
  subTypeArray: state.subTypeArray,
  id: state.id,
  resultNo: state.resultNo
});

const mapDispatchToProps = dispatch => ({
      decidePokemon: number => dispatch(decidePokemon(number)),
      decideType: () => dispatch(decideType()),
      decidePartner: () => dispatch(decidePartner()),
      showData: id => dispatch(showData(id)),
      resetType: () => dispatch(resetType()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
