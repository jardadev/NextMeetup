import EventFilter from '../../components/Events/EventFilter/EventFilter';
import EventList from '../../components/Events/EventList/EventList';
import { getFilteredEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

const EventFilterPage = () => {
	const router = useRouter();
	const filterData = router.query.slug;
	console.log(filterData);
	if (!filterData) {
		return <p className='center'>Loading...</p>;
	}

	const filteredMonth = filterData[0];
	const filteredYear = filterData[1];
	const numMonth = +filteredMonth;
	const numYear = +filteredYear;

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});
	console.log(filteredEvents);
	if (!filteredEvents || filteredEvents.length === 0) {
		return <p className='center'>No events found for selected filters.</p>;
	}

	return (
		<>
			<EventList items={filteredEvents} />
		</>
	);
};

export default EventFilterPage;
