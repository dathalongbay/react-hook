import * as React from 'react';

// lift state up with functional component 
const App = () => {
    const [toggle, setToggle] = React.useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return <Toggler toggle={toggle} onToggle={handleToggle} />;
}

const Toggler = ({toggle, onToggle}) => {

    return (
        <div>
            <button type='button' onClick={onToggle}>Toggle</button>
            {toggle && <div>Hello React</div>}
        </div>
    );
}
export default App;
