import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/slices/counter';
import { setFirstName, setLastName } from '../redux/slices/credentialsSlice';

const Home = () => {
    const value = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector((state) => state.credentials);

    const handleFirstNameChange = (e) => {
        dispatch(setFirstName(e.target.value));
    };

    const handleLastNameChange = (e) => {
        dispatch(setLastName(e.target.value));
    };
    return (
        <>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <div>{value}</div>

            <div>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={handleFirstNameChange} />
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={handleLastNameChange} />
                </label>
            </div>

        </>
    );
}

export default Home;

