import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';



class Search_bar extends Component {

    constructor(props){
       
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
         this.onInputChange = this.onInputChange.bind(this)
        this.state = {term : ' '}
    }

    onInputChange(e) {
        console.log(e.target.value)

    this.setState({term: e.target.value })


    }

    onFormSubmit(e){
        e.preventDefault()
    // console.log(this.state.term)
// of function has a promise it automatically will send
// through the redux-promise that will resolve the data and then will return the actuall respond to the applicstion! 
    this.props.fetchWeather(this.state.term)
    this.setState({term:''})
        // we need to fetch data here ! 
    
    //api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
    }
    render () {

        return(
           
<form onSubmit={this.onFormSubmit} className="input-group">

    <input 
     className = "form-control"
     placeholder= "Get five-day forcast in your city"
     defaultValue = {this.state.term}  
     onChange={this.onInputChange}
     type="text"/>
    <span className="input-group-btn">
        <button type='submit' className="btn btn-secondary" > Submit</button> 
        </span>
</form>
          
        )

    }



}
// Now we have an acces to the function  fetchWeather as a props 
// because of the Redux connect method
function mapDispatchToProps(dispatch){
//action creator binds it with action Fetch Weather! 
    return bindActionCreators({ fetchWeather} , dispatch)
}
export default connect (null,mapDispatchToProps) (Search_bar);
