import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['posts'],

  // will raise an error
/*
  include() {
    return  ['posts'];
  }
*/
});
