import React from 'react'; 

import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';


const App = () =>(
  <>
  <h1>My profile</h1>
  <ProfilePhoto/>
  <FullName/>
  <Address/>
  </>
);

export default App;

