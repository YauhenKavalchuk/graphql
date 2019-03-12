import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';

export default compose(withStyles(styles, { withTheme: true }));
