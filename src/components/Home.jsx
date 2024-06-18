import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/slices/counter';
import { setFirstName, setLastName } from '../redux/slices/credentialsSlice';
import { useState, useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);
    const { firstName, lastName } = useSelector((state) => state.credentials);

    // Lokalna stanja za praćenje unesenih vrednosti
    const [localFirstName, setLocalFirstName] = useState('');
    const [localLastName, setLocalLastName] = useState('');

    // Postavljanje lokalnih vrednosti kada Redux stanje promeni
    useEffect(() => {
        setLocalFirstName('');
        setLocalLastName('');
    }, [firstName, lastName]);

    useEffect(() => {
        // Resetuj lokalna stanja kada se komponenta montira ili se promeni putanja
        setLocalFirstName('');
        setLocalLastName('');
    }, []);

    const handleFirstNameChange = (e) => {
        setLocalFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLocalLastName(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(setFirstName(localFirstName));
        dispatch(setLastName(localLastName));
    };

    return (
        <>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <div>{value}</div>

            <div>
                <label>
                    First Name:
                    <input type="text" value={localFirstName} onChange={handleFirstNameChange} />
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input type="text" value={localLastName} onChange={handleLastNameChange} />
                </label>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Home;
