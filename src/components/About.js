import React from 'react';
 
class About extends React.Component {

  render() {
    return (
          <>
          <div className="ui message">
              <div className="header">
              About
              </div>
              <h4> To access admin page sign In as Admin :</h4>
              <ul>
                <li> username:  Admin </li>
                <li> password:  admin </li>
              </ul>
              <ul className="list">
                <li>The user will get a Ruby Method with a name, description, and 2 examples with input & output.</li>
                <li>Users can translate the ruby method to javascript in an editor container.</li>
                <li>Users can test the output before submitting the answer.</li>
                <li>If the User Submit the code and the output match, he/she can press next and get a harder method to translate.</li>
                <li> User can view his/her profile and check the previews methods that he/she wrote.</li>
                <li> The user can resume the quiz from the previous attempt whenever he/she login.</li>
              </ul>
          </div>
          </>)
  }
}
export default About;