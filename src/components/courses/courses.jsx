import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../redux/actions/';
import CourseList from './courseList.jsx';


class Courses extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            course:{
                title:""
            }
        }
    }
     
    componentDidMount() {

        const { courses, authors, actions } = this.props;
        
        if(courses.length === 0) {
            actions.loadCourses().catch(err =>{
                alert('Failed to fetch courses',err);
            });
        }
        
        if(authors.length === 0) {
           actions.loadAuthors().catch(err =>{
                alert('Failed to fetch authors',err);
            });
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
        this.props.actions.createCourse(this.state.course);
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

                    <CourseList courses={this.props.courses}/>
                </form>
            </React.Fragment>
        )
    }
}

Courses.propTypes = {  
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,   
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses:
        state.authors.length === 0 
        ? [] 
        : state.courses.map(course =>{
            return {
                ...course,
                authorName: state.authors.find(author => author.id === course.authorId).name
            }
        }),
        authors: state.authors
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(actionCreators.loadCourses,dispatch),
            loadAuthors: bindActionCreators(actionCreators.loadAuthors, dispatch)
        }

    }
}
/* 
 Imp: mapDispatchToProps is omitted than by default
 component gets a dispatch prop injected automatically
 returned by connect Method that connect component with
 redux store.
*/

export default connect(mapStateToProps, mapDispatchToProps)(Courses);