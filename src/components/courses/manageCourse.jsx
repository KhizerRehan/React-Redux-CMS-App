import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../redux/actions/';


class ManageCourse extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            course:{
                title:""
            }
        }
    }
     
    componentDidMount() {

    const { courses, authors, loadCourses, loadAuthors  } = this.props;
        
        if(courses.length === 0) {
            loadCourses().catch(err =>{
                alert('Failed to fetch courses',err);
            });
        }
        
        if(authors.length === 0) {
           loadAuthors().catch(err =>{
                alert('Failed to fetch authors',err);
            });
        }

    }

    render() {
        return (
            <React.Fragment>
              <h2> Manage Course</h2>
            </React.Fragment>
        )
    }
}

ManageCourse.propTypes = {  
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,   
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    }
}

// mapDispatchToProps as an Object rather than as a function
// another way to bind actionCreators with props.

const mapDispatchToProps =  {
    loadCourses: actionCreators.loadCourses,
    loadAuthors: actionCreators.loadAuthors
}
/* 
 Imp: mapDispatchToProps is omitted than by default
 component gets a dispatch prop injected automatically
 returned by connect Method that connect component with
 redux store.
*/

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);