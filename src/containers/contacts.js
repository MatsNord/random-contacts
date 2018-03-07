import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
//import { getContacts } from './../api';
import PersonCard from './../components/contact/card/person-card';
import PersonList from './../components/contact/card/person-list';
import Loader from './../components/loader/loader';
import { requestContacts } from '../actions';


// This implementation of sort functions are too trivial, and could be more sofisticated
// as it contains a lot of code duplications
const sortAsc = (a, b) => {
  const o1 = a.name.last.toLowerCase();
  const o2 = b.name.last.toLowerCase();
  const p1 = a.name.first.toLowerCase();
  const p2 = b.name.first.toLowerCase();
  if (o1 < o2) return -1;
  if (o1 > o2) return 1;
  if (p1 < p2) return -1;
  if (p1 > p2) return 1;
  return 0;
}

const sortDesc = (a, b) => {
  const o1 = a.name.last.toLowerCase();
  const o2 = b.name.last.toLowerCase();
  const p1 = a.name.first.toLowerCase();
  const p2 = b.name.first.toLowerCase();
  if (o1 < o2) return 1;
  if (o1 > o2) return -1;
  if (p1 < p2) return 1;
  if (p1 > p2) return -1;
  return 0;
}


class Contacts extends Component {
  // Binding the state to the instance. It works as using a contructor
  // I use a "copy" of the state here, to do the soring
  // It's actually only copies of the refrenses, so no extra data is loaded. 
  state = {
    persons: undefined,
    backData: undefined,
    sortOrder: sortAsc
  };

  // Use ES6 "lambda binding"
  filterListHandler = (event) => {
    var updatedList = this.state.backData;
    updatedList = updatedList.filter(function(item){
      return item.name.first.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1 
          || item.name.last.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
    });
        
    this.setState({persons: [...updatedList]});
  };

  // Use ES6 "lambda binding"
  sortedListHandler = (event) => {
      const sortCb = event.target.checked ? sortDesc : sortAsc;
      var updatedList = this.state.backData.sort(sortCb);
      this.setState({persons: [...updatedList], sortOrder: sortCb});
   };

  componentDidMount(){
    this.props.onContactsRequest();
    // const sortCB = this.state.sortOrder;
    // const persons = this.props.contacts.data.sort(sortCB);
    // this.setState({persons: [...persons], backData: [...persons]})
  }

  render() {
    // All fetched data of persons. 
    //const {persons} = this.state;
    const persons = this.props.contacts;
    // The switch directive is to mutually exclude the other route
    return (
      <div>
        { persons ? (
          <Switch>
            <Route 
              exact
              path='/contacts'
              render={(props) => <PersonList {...props} persons={persons} filter={this.filterListHandler} order={this.sortedListHandler}/>}
            />
            <Route  
              path='/contacts/:id' 
              render={({match}) => <PersonCard person={ persons.find( person => person.email === match.params.id )} />}
            />
          </Switch>
        ): ( <Loader> <div className="loader center" /></Loader> ) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.persons
});

const mapDispatchToProps = dispatch => {
  return {
    onContactsRequest: () =>  dispatch(requestContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);