import React, {Component} from 'react';
import {Button, Flag, Menu} from "semantic-ui-react";
import {connect} from "react-redux";

class EntityCountriesMenu extends Component {
  state = {activeItem: null, menuPositionX: 0};

  constructor(props) {
    super(props);

    this.menuContainerRef = React.createRef();
  }

  handleItemClick = code => {
    this.props.onCountrySelect(code);

    this.setState({activeItem: code});
  };

  maxLength = () => {
    return 66 * this.props.entityCountryCodes.length;
  };

  scrollRight = () => {
    const {menuPositionX} = this.state;
    const menuContainerWidth = this.menuContainerRef && this.menuContainerRef.current.offsetWidth || 700;

    if (-(this.maxLength() - menuContainerWidth) < menuPositionX) {
      this.setState({
        menuPositionX: menuPositionX - 66
      });
    }
  };

  scrollLeft = () => {
    const {menuPositionX} = this.state;

    if (menuPositionX < 0) {
      this.setState({
        menuPositionX: menuPositionX + 66
      });
    }
  };

  resolveUnmatch = code => {
    switch (code) {
      case "gb-eng":
        return "gb";
      case "gb-nir":
        return "ie";
      case "gb-sct":
        return "gb sct";
      default:
        return code;
    }
  };

  renderItem = code => {
    const {activeItem} = this.state;

    return (
      <Menu.Item
        key={code}
        name={code}
        active={activeItem === code}
        onClick={() => this.handleItemClick(code)}>
        <div style={{width: 30, height: 30, textAlign: 'right', padding: '7px 1px 0px 0px'}}>
          <Flag name={this.resolveUnmatch(code.toLowerCase())}/>
        </div>
      </Menu.Item>
    );
  };

  render() {
    return (
      <div style={{display: 'flex', marginTop: 30}}>
        <div style={{flex: 1, padding: '7px 0'}}>
          <Button icon='angle left' onClick={this.scrollLeft}/>
        </div>
        <div style={{flex: 10, overflowX: 'hidden'}} ref={this.menuContainerRef}>
          <div style={{width: this.maxLength(), transform: `translate(${this.state.menuPositionX}px, 0px)`}}>
            <Menu icon='labeled' size={'mini'} pointing secondary>

              {this.props.entityCountryCodes.map(this.renderItem)}

            </Menu>
          </div>
        </div>
        <div style={{flex: 1, padding: '7px 0', textAlign: 'right'}}>
          <Button icon='angle right' onClick={this.scrollRight}/>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({entityCountryCodes}) => {
  return {
    entityCountryCodes
  }
};

export default connect(mapStateToProps, null)(EntityCountriesMenu);