import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/Events/EventDetail/EventSummary';
import EventContent from '../../components/Events/EventDetail/EventContent';
import EventLogistics from '../../components/Events/EventDetail/EventLogistics';
const EventDetailPage = () => {
	const router = useRouter();
	const eventDetail = router.query.eventId;

	const event = getEventById(eventDetail);

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>{event.description}</EventContent>
		</>
	);
};

export default EventDetailPage;
