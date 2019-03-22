import React, {Component} from 'react';
import ThemeContext from './../appContext/themeContext';


class Details extends Component {
    constructor (props) {
        super(props);
        console.log("details", props)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!nextProps.pets.length>0) {            
          return false;
        } else {
          return true;
        }
      }
    render () {
        console.log('details render function'); 
        console.log(this.props.pets);
        return (
            <div>Details
            <ThemeContext.Consumer>
                {
                    theme => <div><span>context in class [consumer]</span><button style={{
                        backgroundColor: theme[0]
                    }}>adopt ..</button></div>
                }
            </ThemeContext.Consumer>
            </div>
        )
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        console.log('did update')
        if (this.props.pets !== prevProps.pets) {
         // this.fetchData(this.props.userID);
         console.log('....')
        }
      }
}

export default Details;