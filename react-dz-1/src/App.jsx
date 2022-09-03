import React from 'react';
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
      <>
          <UserInfo userName={'Иван Иванов'} userAge={25} userSex={'мужской'}/>
      </>
  )
}

export default App;