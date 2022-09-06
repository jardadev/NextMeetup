import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/Events/EventList/EventList';
import EventFilter from '../../components/Events/EventFilter/EventFilter';

const EventsPage = () => {
	const events = getAllEvents();
	return (
		<div>
			<EventFilter />
			<EventList items={events} />
		</div>
	);
};

export default EventsPage;
