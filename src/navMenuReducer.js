import CONSTANTS from './constants';
const { MENU_TYPES_ACTION } = CONSTANTS;
const navMenuReducer = (state, action) => {
  switch (action.type) {
    case MENU_TYPES_ACTION.MENU_OPEN: {
      return {
        ...state,
        isMenuOpen: true
      }
    }
    case MENU_TYPES_ACTION.MENU_CLOSE: {
      return {
        ...state,
        isMenuOpen: false
      }
    }

      break;
    default:
      return state;
  }
}

export default navMenuReducer; 