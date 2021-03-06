import { connect } from 'react-redux';
import { addProject } from '../../actions/projects_actions';
import { scrapeTags } from '../../actions/tag_actions';
import NewProjectForm from './new_project_form';

const mapStateToProps = (state, ownProps) => {

  return ({
    tags: state.tags,
    currentUser: state.session.currentUser,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createProject: (project) => dispatch(addProject(project)),
  getTags: () => dispatch(scrapeTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectForm);
