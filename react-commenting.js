// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
      super()
      //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 1 )
      //
      //   (1.)      'this.state' is an object that can be implemented from a Component in React.
      //             It holds values that are expected to be updated and displayed to the user.
      //
      //        ( > )   The state is initializing a variable with the name 'userInput' with the value of a blank string.
      //
      //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
      //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 2 )
      //
      //   (2.)      'this.setState()' is a function of a React Component that will update the value
      //             of a 'state' variable and refresh the component in which it is a part of.
      //
      //        ( > )   The state of 'userInput' will be changed to the value of the event.
      //
      //
      //            Side Note:  The update of a state's value through 'setState()' is asynchronous.
      //                        Attempting to use the value from 'state' after using 'setState()'
      //                        will not result in using the most up-to-date value of that state.                      
      //                        
      //                        (#) AKA:    It hasn't had time to update by the time you try and use it. 
      //                                    You are unable to call for the value immedietly after
      //                                    using 'setState()'.
      //                
      //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
    this.setState({ userInput: e.target.value})
  }

  render(){
      //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 3 )
      //
      //   (3.)      'userInput' is be destructured from the object 'this.state'.
      //             This will locally assign a variable with the same name to the
      //             value of the variable in the state object ('this.state') of
      //             the same name.
      //
      //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/*
          //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 4 )
          //
          //   (4.)      Placed inside the 'input' tag, an 'onChange' attribute will execute 
          //             every time a change occurs inside the text/input box.
          //
          //        ( > )   'onChange' is calling the 'robot' function of the 'App' class.
          //                It will send the function an event that can have it's contents
          //                accessed inside the function 'robot'.
          //
          //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
          */}
          onChange={ this.robot }
          {/* 
          //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 5 )
          //
          //   (5.)      Placed inside the 'input' tag, a 'value' attribute will set the the 
          //             contents of an input tag's box to whatever the 'value' attribute is equal to.
          //
          //        ( > )   In this case, 'value' is being set to what the user is typing ('userInput').
          //                Which is updated every time the user types, thanks to the function being
          //                called from the 'onChange' attribute.
          //
          //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
          */}
          value={ userInput }
        />

        <div>
          {/* 
          //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 6 )
          //
          //   (6.)      This is will display the Component 'GoodRobot'.
          //
          //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
          */}
          <GoodRobot
          {/* 
            //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 7 )
            //
            //   (7.)       The user's input ('userInput') is being passed to the 'GoodRobot' Component through props.
            //
            //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
            */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
        //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 8 )
        //
        //    (8.)      This 'div' tag contains all the JSX that will be rendered when the 'GoodRobot' Component is called.
        //
        //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
      <div>
        <h3>Good Robot</h3>
        {/* 
        //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 9 )
        //
        //    (9.)      This 'h4' tag will render the words inside of it.
        //              The user's input that was passed in by props is now accessable through 'this.props.userInput'.
        //              By placing 'this.props.userInput' inside curly braces ('{}'), we can place the value of 'userInput'
        //              within the rest of the text in the 'h4' tag.
        //
        //  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
        */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /    ( 10 )
//
//    (10.)      We are setting the class-component 'GoodRobot' to the default export of it's file ('GoodRobot.js').
//               We can then import this class-component from it's file ('GoodRobot.js')
//               and give it any name upon importing into another file.
//
//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /
export default GoodRobot
