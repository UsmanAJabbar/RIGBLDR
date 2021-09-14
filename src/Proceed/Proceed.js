import React from 'react';
import { Redirect } from "react-router-dom";

class Proceed extends React.Component {
  render() {
    return (
	    window.location.href="http://google.com"
     // <Redirect push
      //  to={{
//		pathname: "http://google.com",
 //         search: "?utm=your+face",
    //      state: { referrer: currentLocation }
  //      }}
   //   />
    )
  }
}

export default Proceed;
