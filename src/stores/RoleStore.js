import alt from '../alt';
import RoleActions from '../actions/RoleActions';
import SchedulerSource from '../sources/SchedulerSource';

class RoleStore {
  constructor() {
    this.state = {
      roles: [],
      errorMessage: null,
      loading: false
    };

    this.bindActions(RoleActions);
  }

  updatedRoles(roles) {
    this.setState({ roles, loading: false });
  }

  isUpdatingRoles() {
    this.setState({ loading: true });
  }
}

export default alt.createStore(RoleStore, 'RoleStore');
