import Button from '../../ui/Button';
import AddressIcon from '../../icons/address-icon';
import ArrowRightIcon from '../../icons/arrow-right-icon';
import DateIcon from '../../icons/date-icon';

import styles from './EventItem.module.css';
const EventItem = (props) => {
	const { id, title, image, date, location } = props;

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = location.replace(', ', '\n');
	const exploreLink = `/events/${id}`;

	return (
		<li className={styles.item}>
			<img src={`/${image}`} alt={title} height={'150px'} />
			<div className={styles.content}>
				<div>
					<h2>{title}</h2>
					<div className={styles.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
					<div className={styles.actions}>
						<Button link={exploreLink}>
							See Details
							<span className={styles.icon}>
								<ArrowRightIcon />
							</span>
						</Button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
