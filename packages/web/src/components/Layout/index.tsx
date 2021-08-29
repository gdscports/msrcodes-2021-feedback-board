import {PropsWithChildren} from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({children}: PropsWithChildren<{}>) => (
  <>
    <Header title="GDSC Feedback Capture" />
    {children}
    <Footer />
  </>
);

export default Layout;
