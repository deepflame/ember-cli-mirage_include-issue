import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  first_name() {
    return faker.name.firstName();
  },

  last_name() {
    return faker.name.lastName();
  },
});
