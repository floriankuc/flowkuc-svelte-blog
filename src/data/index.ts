import type { Position } from 'src/types';

export const techs = ['React', 'CSS', 'HTML', 'JavaScript', 'TypeScript', 'Redux'];

const eppendorf: Position = {
	title: 'Web Developer',
	time: '2022 - present',
	bullets: [
		'Implementing OIDC authentication in front end',
		'Developing and maintaining code of UI components',
		'Web component related discoveries with Svelte, Preact, StencilJS and SolidJS',
		'Set up AstroJS docs'
	]
};

const bookingtime: Position = {
	title: 'Junior Web Developer',
	time: '2020 - 2022',
	bullets: [
		'Developed and maintained code for appointment booking flows',
		'Proposed and implemented testing strategy including writing documentation',
		'Developed UI components and responsive websites',
		'Used technologies such as React, TypeScript, HTML, CSS'
	]
};

const business: Position = {
	title: 'Account and training manager, accountant',
	time: '2011 - 2019',
	bullets: [
		"Facilitated and supervised language and intercultural trainings for clients' employees",
		'Increased customer satisfaction through quality management, quality assurance and holding webinars',
		'Handled payments and reconciled accounts in accounts payable and accounts receivable'
	]
};

export const positions: Position[] = [eppendorf, bookingtime, business];
