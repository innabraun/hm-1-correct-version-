import React from 'react';
import styles from './Modals.module.css';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalContent from './ModalContent/ModalContent';
import Buttons from '../Buttons/Buttons';

class Modal extends React.Component {
	state = {
		isActive: false,
	};

	handleOpen = () => {
		this.setState({ isActive: !this.state.isActive });
	};

	render() {
		return (
			<div>
				<Buttons
					handle={this.handleOpen.bind(this)}
					title={this.props.textBtn}
					class={this.props.class}
				/>
				{this.state.isActive && (
					<div onClick={this.handleOpen.bind(this)} className={styles.darkarea}>
						<div
							className={styles.onwrapper}
							onClick={e => {
								e.stopPropagation();
							}}
						>
							<div className={styles.wrapper}>
								<ModalHeader
									content={this.props.headerContent}
									isExit={this.props.isExit} className={styles.close}
									handle={this.handleOpen.bind(this)}
								/>

								<ModalContent text={this.props.bodyText} bottomText={this.props.bottomText} />

								<div class={styles.btn}>
								<Buttons title="ok" handle={this.handleOpen.bind(this)} class={styles.item} />
								<Buttons title="cancel" handle={this.handleOpen.bind(this)} class={styles.item} />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Modal;
