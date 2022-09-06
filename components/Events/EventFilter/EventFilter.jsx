import { useRef } from 'react';
import styles from './EventFilter.module.css';
import Button from '../../ui/Button';

const EventFilter = (props) => {
	const { onSearch } = props;

	const monthFilterRef = useRef();
	const yearFilterRef = useRef();

	const searchButtonHandler = (e) => {
		e.preventDefault();
		const filteredMonth = monthFilterRef.current.value;
		const filteredYear = yearFilterRef.current.value;

		onSearch(filteredMonth, filteredYear);
	};
	return (
		<form className={styles.form}>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor='year'>Year</label>
					<select id='year' ref={yearFilterRef}>
						<option value='2022'>2022</option>
						<option value='2023'>2023</option>
					</select>
				</div>
				<div className={styles.control}>
					<label htmlFor='month'>Month</label>
					<select id='month' ref={monthFilterRef}>
						<option value='1'>January</option>
						<option value='2'>February</option>
						<option value='3'>March</option>
						<option value='4'>April</option>
						<option value='5'>May</option>
						<option value='6'>June</option>
						<option value='7'>July</option>
						<option value='8'>August</option>
						<option value='9'>September</option>
						<option value='10'>October</option>
						<option value='11'>November</option>
						<option value='12'>December</option>
					</select>
				</div>
			</div>
			<Button onClick={searchButtonHandler}>Search</Button>
		</form>
	);
};

export default EventFilter;
