import Link from 'next/link';
import styles from './Button.module.css';

const Button = (props) => {
	const { link, children } = props;

	return (
		<Link href={link}>
			<a className={styles.btn}>{children}</a>
		</Link>
	);
};
export default Button;
