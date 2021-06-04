import React from 'react';
import Buttons from '../../Buttons/Buttons';
import styles from './../Modals.module.css';

class ModalHeader extends React.Component {
	render() {
		return (
			<div className={styles.header}>
				{this.props.isExit && <Buttons title="x" class={styles.close} handle={this.props.handle} />}
				<h3 className={styles.text}>{this.props.content}</h3>

			</div>
		);
	}
}

export default ModalHeader;
