import React, { Component } from 'react' ;
import { Link } from '@reach/router';


/* as per now, error boundaries are not supported on hooks, 
only with class component it works */
class ErrorBoundary Extends Component {
    state = {hasError : false}
    static getDerivedStatefromError() {
        return {
            hasError : true
        }
    }
    componentDidCatch(error, info) {
        /* this piece is never built on production code, this is skipped on,
        only on development mode this piece of code is built and ran */
        if(process.env.NODE_ENV === 'development') {
            console.error('errorBoundary caught an err', error, info)
        }
        
    }
    render () {
        if (this.state.hasError) {
            <h1>
                 There was an error with this listing. 
            </h1>
        }

        return this.props.children;
    }
}
export default ErrorBoundary;

{/* 
    <ErrorBoundary>
    <App/>
    </ErrorBoundary> 
*/}