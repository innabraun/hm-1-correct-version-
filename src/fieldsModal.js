import styles from './Buttons/Buttons.module.css';
export const fields = [
	{
		textBtn: 'open first modal',
		isExit: true,
		bodyText: "Once you delete this file, it won\'t be possible to undo this action.",
		bottomText:' Are you sure you want to delete it?',
		headerContent: 'Do you want to delete this file?',

		class: styles.item1,
	},
	{
		textBtn: 'open second modal',
		isExit: true,
		bodyText: 'You will lost all your followers in this way. ',
		bottomText:"Dont leave, we love you" ,
		headerContent: 'Do you want to delete your profile?',

		class: styles.item2,
	},
];
