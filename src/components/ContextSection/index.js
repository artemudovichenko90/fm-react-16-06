import React, { Component } from 'react';
import TreeWithContextTheme from './../Tree';
import HeaderWithContextTheme from './../Header';
import { UserContext, ThemeContext } from './../../context';
import CONSTANTS from './../../constants';
const { THEMES } = CONSTANTS;

class ContextSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT,
      user: {
        id: 1,
        fname: 'Elon',
        lname: 'Musk',
        imgSrc: 'data:image/jpeg;base64,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'
      }
    }
  }
  setTheme = (theme) => {
    this.setState({ theme });
  }
  render() {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <HeaderWithContextTheme />
          <TreeWithContextTheme />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default ContextSection;