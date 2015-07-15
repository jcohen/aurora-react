import alt from '../alt';
import SchedulerSource from '../sources/SchedulerSource';

class RoleActions {
  constructor() {
    this.generateActions('isUpdatingRoles', 'updatedRoles', 'failedUpdatingRoles');
  }

  fetchRoles() {
    this.actions.isUpdatingRoles();

    // TODO(jcohen): Ideally when a request fails we'd pass some relevant info along when we
    // dispatch the failure action below.
    SchedulerSource.getRoleSummary().then(
        (roles) => this.actions.updatedRoles(roles),
        () => this.actions.failedUpdatingRoles());
  }
}

export default alt.createActions(RoleActions);
