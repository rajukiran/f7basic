
import guest from './guest/routes';
import farmers from './farmers/routes';
import consumers from './consumers/routes';
import common from './common/components'

export default [].concat(guest, farmers, consumers, common);
