import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/Events/EventList/EventList';
import EventFilter from '../../components/Events/EventFilter/EventFilter';

const EventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const filterEventsHandler = (month, year) => {
		router.push(`/events/${month}/${year}`);
	};
	return (
		<div>
			<EventFilter onSearch={filterEventsHandler} />
			<EventList items={events} />
		</div>
	);
};

export default EventsPage;
