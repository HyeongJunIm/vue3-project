import { boot } from 'quasar/wrappers';
import InstantSearch from 'vue-instantsearch/vue3/es';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.use(InstantSearch);
});
