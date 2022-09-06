import Link from 'next/link';
import styles from './Button.module.css';

const Button = (props) => {
	const { link, onClick, children } = props;
	if (link) {
		return (
			<Link href={link}>
				<a className={styles.btn}>{children}</a>
			</Link>
		);
	}
	return <button onClick={onClick}>{children}</button>;
};
export default Button;
