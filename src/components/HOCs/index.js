import { ThemeContext, UserContext } from "../../context"
import { Component } from 'react';

export const WithContextTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>{
      ([theme, setTheme]) => <InnerComponent theme={theme} setTheme={setTheme}{...props} />
    }</ThemeContext.Consumer>)
}

export const WithContextUser = (InnerComponent) => (props) => {
  return (
    <UserContext.Consumer>{
      user => <InnerComponent user={user} {...props} />
    }</UserContext.Consumer>)
}

// export const WithContextUser = (InnerComponent) => {
//   class InnerComponentWithContextUser extends Component {
//     render() {
//       return (
//         <UserContext.Consumer>{
//           user => <InnerComponent user={user} />
//         }</UserContext.Consumer>
//       )
//     }
//   }
// }