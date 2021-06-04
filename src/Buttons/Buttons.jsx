import React from 'react';
import styles from './Buttons.module.css';

class Buttons extends React.Component {
	render() {
		const { title, handle, background } = this.props;
		return (
			<div className={styles.wrapper}>
				<button onClick={handle} className={this.props.class} style={{ background: background }}>
					{title}
				</button>
			</div>
		);
	}
}

export default Buttons;
