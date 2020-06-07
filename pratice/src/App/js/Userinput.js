import React from "react";

/*Follow the instructions explained in the problem video and try to implement a solution on your own. Compare it with my solution (video + downloadable files) thereafter.

The instructions are:

Create TWO new components: UserInput and UserOutput
UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)
Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (=> the username) and pass the username to the UserOutput component
Add a method to manipulate the state (=> an event-handler method)
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/

const userInput = props => {
  return (
    <div>
      <input
        className="inputspace"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default userInput;