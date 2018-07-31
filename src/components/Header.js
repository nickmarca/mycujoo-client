import React, {Component} from 'react';

import {Menu} from 'semantic-ui-react';
import logo from '../resources/logo.jpg';
import {withRouter} from "react-router-dom";

class Header extends Component {
  handleItemClick = (name, path) => {
    this.props.history.push(path);
  };

  render() {
    const { location: {pathname} } = this.props.history;

    return (
      <div style={{paddingTop: 15}}>
        <img src={logo} alt="Logo" style={{width: '100%', height: 234, objectFit: 'cover', borderRadius: 10}}/>
        <div style={{paddingTop: 15}}>
          <Menu>
            <Menu.Item name='home' active={pathname === '/'} onClick={() => this.handleItemClick("home", "/")}/>
            <Menu.Item
              name='entities'
              active={pathname === '/entities'}
              onClick={() => this.handleItemClick("entities", "/entities")}
            />
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
