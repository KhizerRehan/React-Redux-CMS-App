import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions';
import PropTypes from 'prop-types';

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course:{
                title:""
            }
        }
    }

    handleChange =  event =>{
        const course = {...this.state.course, title:event.target.value};
        this.setState({
            course
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h2>Courses</h2>
                    <h3>Add course</h3>
                    <input type="text"
                    onChange = {this.handleChange}
                    value={this.state.course.title}
                    />

                    <input type="submit" value="Save" />

                    {
                        this.props.courses.map(course =>(
                            <div key={course.title}>{course.title}</div>
                        ))
                    }
                </form>
            </React.Fragment>
        )
    }
}

Courses.propTypes = {   
    courses:PropTypes.array.isRequired,   
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

/* 
 Imp: mapDispatchToProps is omitted than by default
 component gets a dispatch prop injected automatically
 returned by connect Method that connect component with
 redux store.
*/

export default connect(mapStateToProps)(Courses);