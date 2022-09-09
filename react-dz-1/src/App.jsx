import React, {useEffect, useState} from 'react';
import UserInfo from "./components/UserInfo";
import Button from "./components/Button";

const App = () => {
    const [userCard, setUserCard] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (toggle) {
            setUserCard(
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                    <UserInfo name={'Иван Иванов'} age={25} sex={'мужской'}/>
                </div>
            );
        } else setUserCard(null)
    }, [toggle]);

    return (
        <>
            <Button buttonText={'Показать информацию'} onClick={() => setToggle(!toggle)}/>
            {userCard}
        </>
    )
}

export default App;