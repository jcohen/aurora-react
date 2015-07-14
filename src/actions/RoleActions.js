import alt from '../alt';
import SchedulerSource from '../sources/SchedulerSource';

class RoleActions {
  constructor() {
    this.generateActions('isUpdatingRoles', 'updatedRoles', 'failedUpdatingRoles');
  }

  fetchRoles() {
    this.actions.isUpdatingRoles();

    SchedulerSource.getRoleSummary().then(
        (roles) => this.actions.updatedRoles(roles),
        () => this.actions.failedUpdatingRoles());
  }
}

export default alt.createActions(RoleActions);
