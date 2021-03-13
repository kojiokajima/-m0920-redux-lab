import React, { Component } from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import addPerson from '../actions/addPerson'
import deletePerson from '../actions/deletePerson'

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandle = (person) => {
    const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'William',
        age: Math.floor( Math.random() * 40 )
    }

    this.props.addPerson(newPerson)
    }

    personDeletedHandle = (index) => {
        this.props.deletePerson(index)
    }

    render () {
        // console.log('this.props: ', this.props)
        // console.log('this.props.persons: ', this.props.persons)

        return (
            <div>
                <AddPerson personAdded={() => this.personAddedHandle(this.props.persons)} />
                {
                    this.props.persons.map((person, index) => {
                        return <Person
                            key={index}
                            name={person.name}
                            age={person.age}
                            clicked={() => this.personDeletedHandle(index)}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    } 
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPerson: addPerson,
        deletePerson: deletePerson
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);