import { roles } from './mock_responses/roles';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var SchedulerSource = {
  getRoleSummary() {
    return new Promise(function (resolve, reject) {
      // Simulate an asynchronous API call with some unknown latency.
      setTimeout(() => {
        resolve(roles);
      }, randomInRange(100, 400));
    });
  }
};

export default SchedulerSource;