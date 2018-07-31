import React, {Component} from "react";
import EntityCountriesMenu from "./EntityCountriesMenu";
import {connect} from "react-redux";
import * as actions from '../../../actions';
import EntityList from "./EntitiesList";

class Entities extends Component {

  state = {selectedCountry: null};

  componentDidMount() {
    this.props.fetchEntityCountryCodes();
  }

  handleCountrySelect = code => {
    this.props.fetchEntities(code);

    this.setState({selectedCountry: code});
  };

  componentDidUpdate() {
    console.log(this.props.entities);
  }

  render() {
    const {selectedCountry} = this.state;
    const {entities} = this.props;
    const selectedEntities = selectedCountry && entities[selectedCountry] && entities[selectedCountry].items;

    return(
      <div style={{height: '60vh'}}>

        <div>
          <EntityCountriesMenu onCountrySelect={this.handleCountrySelect}/>
        </div>

        {
          selectedEntities ?
            <EntityList entities={selectedEntities} /> :
            <div style={{flex: 10, height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              'Please select a Country on the side menu !'
            </div>
        }

      </div>
    );
  }
}

const mapStateToProps = ({entities}) => {
  return {
    entities
  };
};

export default connect(mapStateToProps, actions)(Entities);