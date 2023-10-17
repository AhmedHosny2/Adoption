import { motion } from 'framer-motion';
import homePets from '../../assets/home-pets.jpg';
import Card from '../card1/card1';

const heroVariant = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay: 1, duration: 1, ease: 'easeInOut', when: 'beforeChildren' },
	},
};

const childCardVariant1 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.1, duration: 0.5, ease: 'easeOut' },
	},
};
const childCardVariant2 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.4, duration: 0.5, ease: 'easeOut' },
	},
};
const childCardVariant3 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.7, duration: 0.5, ease: 'easeOut' },
	},
};
const childCardVariant4 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 1, duration: 0.5, ease: 'easeOut' },
	},
};

const dogsvg = (
	<>
		<svg
			className="home-svg-animals"
			width="120px"
			height="120px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#ffffff"
			stroke-width="0.00024000000000000003"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.15452 1.01195C5.11987 1.32041 7.17569 2.2474 8.72607 3.49603C9.75381 3.17407 10.8558 2.99995 12 2.99995C13.1519 2.99995 14.261 3.17641 15.2946 3.5025C16.882 2.27488 18.8427 1.31337 20.8354 1.01339C21.2596 0.95092 21.7008 1.16534 21.8945 1.55273C22.6719 3.38958 22.6983 5.57987 22.2202 7.49248L22.2128 7.52213C22.0847 8.03536 21.9191 8.69868 21.3876 8.92182C21.7827 9.89315 22 10.9466 22 12.0526C22 14.825 20.8618 17.6774 19.8412 20.2348L19.8412 20.2348L19.7379 20.4936C19.1182 22.0486 17.7316 23.1196 16.125 23.418L13.8549 23.8397C13.1549 23.9697 12.4562 23.7172 12 23.2082C11.5438 23.7172 10.8452 23.9697 10.1452 23.8397L7.87506 23.418C6.26852 23.1196 4.88189 22.0486 4.26214 20.4936L4.15891 20.2348C3.13833 17.6774 2.00004 14.825 2.00004 12.0526C2.00004 10.9466 2.21737 9.89315 2.6125 8.92182C2.08046 8.69845 1.91916 8.05124 1.7909 7.53658L1.7799 7.49248C1.32311 5.66527 1.23531 3.2968 2.10561 1.55273C2.29827 1.16741 2.72906 0.945855 3.15452 1.01195ZM6.58478 4.44052C5.45516 5.10067 4.47474 5.9652 3.71373 6.98132C3.41572 5.76461 3.41236 4.41153 3.67496 3.18754C4.68842 3.48029 5.68018 3.89536 6.58478 4.44052ZM20.2863 6.98133C19.5303 5.97184 18.5577 5.11195 17.4374 4.45347C18.3364 3.9005 19.3043 3.45749 20.3223 3.17455C20.5884 4.40199 20.5853 5.76068 20.2863 6.98133ZM8.85364 5.56694C9.81678 5.20285 10.8797 4.99995 12 4.99995C13.1204 4.99995 14.1833 5.20285 15.1464 5.56694C18.0554 6.66661 20 9.1982 20 12.0526C20 14.4676 18.9891 16.9876 18.0863 19.238L18.0862 19.2382C18.0167 19.4115 17.9478 19.5832 17.8801 19.7531C17.5291 20.6338 16.731 21.2712 15.7597 21.4516L13.4896 21.8733L12.912 20.5896C12.7505 20.2307 12.3935 19.9999 12 19.9999C11.6065 19.9999 11.2496 20.2307 11.0881 20.5896L10.5104 21.8733L8.24033 21.4516C7.26908 21.2712 6.471 20.6338 6.12001 19.7531C6.05237 19.5834 5.98357 19.4119 5.91414 19.2388L5.91395 19.2384L5.91381 19.238C5.01102 16.9876 4.00004 14.4676 4.00004 12.0526C4.00004 9.1982 5.94472 6.66661 8.85364 5.56694ZM10.5 15.9999C10.1212 15.9999 9.77497 16.2139 9.60557 16.5527C9.43618 16.8915 9.47274 17.2969 9.7 17.5999L11.2 19.5999C11.3889 19.8517 11.6852 19.9999 12 19.9999C12.3148 19.9999 12.6111 19.8517 12.8 19.5999L14.3 17.5999C14.5273 17.2969 14.5638 16.8915 14.3944 16.5527C14.225 16.2139 13.8788 15.9999 13.5 15.9999H10.5ZM9.62134 11.1212C9.62134 11.9497 8.94977 12.6212 8.12134 12.6212C7.29291 12.6212 6.62134 11.9497 6.62134 11.1212C6.62134 10.2928 7.29291 9.62125 8.12134 9.62125C8.94977 9.62125 9.62134 10.2928 9.62134 11.1212ZM16 12.4999C16.8284 12.4999 17.5 11.8284 17.5 10.9999C17.5 10.1715 16.8284 9.49994 16 9.49994C15.1716 9.49994 14.5 10.1715 14.5 10.9999C14.5 11.8284 15.1716 12.4999 16 12.4999Z"
					fill="#ffffff"
				></path>{' '}
			</g>
		</svg>
	</>
);

const catsvg = (
	<>
		<svg
			className="home-svg-animals"
			width="120px"
			height="120px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#ffffff"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<path
					d="M19.0993 10.6602C20.2113 11.9744 19.98 13.5815 19.9801 15C19.9801 18.9062 14.7132 20 12 20C9.28677 20 4.01994 18.9062 4.01994 15C4.01995 13.5815 3.78875 11.9744 4.90066 10.6602M19.0993 10.6602C18.9048 10.4303 18.6692 10.2094 18.384 10M19.0993 10.6602C19.7993 11.0634 19.9781 9.55469 19.9801 9.0625V7.18761C19.9801 5.56261 18.8629 5.00011 17.9053 5.00011C16.9477 5.00011 15.0324 6.5625 14.394 6.5625C13.6279 6.5625 13.4804 6.40636 12 6.40636C10.5197 6.40636 10.3721 6.5625 9.60601 6.5625C8.9676 6.5625 7.05236 5 6.09476 5C5.13715 5 4.01995 5.5625 4.01995 7.1875V9.0625C4.02188 9.55469 4.20072 11.0634 4.90066 10.6602M4.90066 10.6602C5.09519 10.4303 5.33082 10.2094 5.61599 10"
					stroke="#ffffff"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>{' '}
				<path
					d="M12.8258 16C12.8258 16.1726 12.4647 16.3125 12.0193 16.3125C11.574 16.3125 11.2129 16.1726 11.2129 16C11.2129 15.8274 11.574 15.6875 12.0193 15.6875C12.4647 15.6875 12.8258 15.8274 12.8258 16Z"
					stroke="#ffffff"
					stroke-width="1.5"
				></path>{' '}
				<path
					d="M15.5 13.5938C15.5 14.0252 15.2834 14.375 15.0161 14.375C14.7489 14.375 14.5323 14.0252 14.5323 13.5938C14.5323 13.1623 14.7489 12.8125 15.0161 12.8125C15.2834 12.8125 15.5 13.1623 15.5 13.5938Z"
					stroke="#ffffff"
					stroke-width="1.5"
				></path>{' '}
				<path
					d="M9.5 13.5938C9.5 14.0252 9.28336 14.375 9.01613 14.375C8.74889 14.375 8.53226 14.0252 8.53226 13.5938C8.53226 13.1623 8.74889 12.8125 9.01613 12.8125C9.28336 12.8125 9.5 13.1623 9.5 13.5938Z"
					stroke="#ffffff"
					stroke-width="1.5"
				></path>{' '}
				<path
					d="M22.0004 15.4688C21.5165 15.1562 19.4197 14.375 18.6133 14.375"
					stroke="#ffffff"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>{' '}
				<path
					d="M20.3871 17.9688C19.9033 17.6562 18.7742 16.875 17.9678 16.875"
					stroke="#ffffff"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>{' '}
				<path
					d="M2 15.4688C2.48387 15.1562 4.58065 14.375 5.3871 14.375"
					stroke="#ffffff"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>{' '}
				<path
					d="M3.61279 17.9688C4.09667 17.6562 5.2257 16.875 6.03215 16.875"
					stroke="#ffffff"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>{' '}
			</g>
		</svg>
	</>
);

const rabbitsvg = (
	<>
		<svg
			className="home-svg-animals"
			fill="#ffffff"
			height="120px"
			width="120px"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512.001 512.001"
			stroke="#ffffff"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<path d="M429.147,271.25V68.877C429.147,30.899,398.25,0,360.27,0c-37.973,0-68.864,30.899-68.864,68.877v81.104 c-23.117-5.848-46.697-6.113-70.811,0.03V68.877C220.596,30.899,189.703,0,151.731,0c-37.98,0-68.877,30.899-68.877,68.877v202.369 c-19.517,36.752-30.253,75.004-30.253,108.193c0,103.341,100.406,132.554,203.362,132.56c0.013,0,0.025,0.002,0.038,0.002 c0.013,0,0.025-0.002,0.038-0.002c102.939-0.007,203.362-29.211,203.362-132.56C459.4,346.089,448.289,307.374,429.147,271.25z M327.127,68.877c0-18.282,14.868-33.156,33.143-33.156c18.282,0,33.156,14.874,33.156,33.156v149.489 c-20.257-23.888-42.7-42.276-66.299-54.611L327.127,68.877L327.127,68.877z M118.575,68.877c0-18.282,14.873-33.156,33.156-33.156 c18.276,0,33.144,14.874,33.144,33.156v94.988c-25.181,13.257-47.914,33.018-66.3,54.586 C118.575,218.451,118.575,68.877,118.575,68.877z M256.001,406.549l-12.274-12.863h24.546L256.001,406.549z M273.861,475.966 v-36.389l35.23-36.924c16.015-16.78,4.103-44.687-19.125-44.687h-67.933c-23.194,0-35.161,27.883-19.126,44.686l35.233,36.924 v36.389c-74.461-2.627-149.818-22.34-149.818-96.529c0-78.793,77.497-198.218,167.679-198.218 c85.135,0,167.679,112.792,167.679,198.218C423.679,453.625,348.323,473.339,273.861,475.966z M188.994,304.986 c0.012-13.049-10.557-23.637-23.606-23.648c-13.049-0.012-23.637,10.557-23.648,23.606c-0.012,13.049,10.557,23.637,23.606,23.648 C178.395,328.604,188.983,318.035,188.994,304.986z M369.334,305.144c0.012-13.049-10.557-23.637-23.606-23.648 c-13.049-0.012-23.637,10.557-23.648,23.606c-0.012,13.049,10.557,23.637,23.606,23.648 C358.734,328.761,369.322,318.193,369.334,305.144z"></path>{' '}
			</g>
		</svg>
	</>
);

const otherssvg = (
	<>
		<svg
			width="120px"
			height="120px"
			viewBox="0 0 72 72"
			id="emoji"
			xmlns="http://www.w3.org/2000/svg"
			fill="#ffffff"
			stroke="#ffffff"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<g id="color">
					{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M11.2544,18.6688c0,0-0.4167,2.75-0.1667,3.1667c0.25,0.4167,2.3333,2.8333,2.6667,2.8333 s2.5,0.25,2.5,0.25l1.4167-2.8333l-1.6667-2.8333l-3.0833-1.25L11.2544,18.6688z"
					></path>{' '}
					<polygon
						fill="#ffffff"
						stroke="none"
						points="16.2544,10.5855 16.0877,13.3355 18.171,15.7521 20.421,15.7521 21.5877,14.0855 21.0877,11.0855 18.7544,8.5855"
					></polygon>{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M26.5044,7.3355l-1.9167,2.5l1.0833,2.1667l1.0833,1.3333l2.5833,0.0833l0.75-2.1667l-0.25-2.75 c0,0-0.75-1.1667-1.0833-1.1667C28.421,7.3355,26.5044,7.3355,26.5044,7.3355z"
					></path>{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M34.671,10.9188l-1,3.0833c0,0,0.1667,3.25,0.4167,3.5s2.6667,1.25,2.6667,1.25l1.5833-2.3333 l0.3333-3.5833l-1.75-1.8333L34.671,10.9188z"
					></path>{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M22.0044,20.8355c-0.0833,0.25-1.6667,3.5833-1.6667,3.5833l0.3333,3.5833l-1.1667,3.3333l0.6667,3.3333 l2.8333,2.0833l3.5833-0.5l2.1667-2.5833l5.25,1.4167c0,0,3.5-2,3.4167-2.25c-0.0833-0.25,0.5833-4.3333,0.5833-4.3333 s-2.8333-3.5833-3.5833-3.4167c0,0-1.1667-4.5-4.3333-5.4167c-3.1667-0.9167-6-0.5-6-0.5L22.0044,20.8355z"
					></path>{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M34.7544,40.5855c0,0-1.25,3.1667-1.0833,3.4167c0.1667,0.25,1.4167,3.25,1.4167,3.25 s2.5833,0.4167,2.6667,0.1667c0.0833-0.25,1.0833-2.9167,1.0833-2.9167l-0.0833-3.1667L34.7544,40.5855z"
					></path>{' '}
					<polygon
						fill="#ffffff"
						stroke="none"
						points="44.171,35.0855 42.421,38.2521 43.671,41.8355 47.3377,40.2521 47.8377,37.7521 46.921,35.3355"
					></polygon>{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M53.2544,37.3355c-0.0833,0.25-2.4167,3.4167-2.4167,3.4167l0.9167,3.1667l2.8333-0.0833l2-3.0833 l-0.5833-3L53.2544,37.3355z"
					></path>{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M58.671,45.3355l-2.5,3.0833l-0.5,2.75l1.4167,1l3.75-1c0,0,1-2.1667,1-2.4167 s-0.4167-2.8333-0.4167-2.8333L58.671,45.3355z"
					></path>{' '}
					<path
						fill="#ffffff"
						stroke="none"
						d="M41.0044,48.7521c-0.1975,0.9874-2.1667,4.5-2.1667,4.5s-2.9167,1.9167-3.0833,2.25 c-0.1667,0.3333-0.75,3.5833-0.75,3.5833l1.5,2.8333l2.4167,1.25l4.75-1.4167l3.25,3.5c0,0,3.25,0.5,4.5833-0.9167 c1.3333-1.4167,1.9167-4.3333,1.9167-4.3333l-1.5-3l0.5833-4c0,0-1.0833-5.3333-3.75-5.8333 C46.0877,46.6688,41.2544,47.5021,41.0044,48.7521z"
					></path>{' '}
				</g>{' '}
				<g id="hair"></g> <g id="skin"></g> <g id="skin-shadow"></g>{' '}
				<g id="line">
					{' '}
					<path
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
						d="M34.2042,25.0412c-0.0364-0.2205-0.0784-0.4413-0.134-0.6623c-1.0117-4.0167-4.871-6.5074-8.6199-5.5631 c-3.7489,0.9443-5.9678,4.9659-4.9561,8.9826c0.0557,0.221,0.1233,0.4353,0.1957,0.6468 c-1.1533,1.1787-1.6914,2.9682-1.2371,4.7717c0.6745,2.6778,3.2473,4.3382,5.7466,3.7087 c1.6833-0.424,3.7084-3.5122,3.9147-3.5641c0.2063-0.052,3.4527,1.7084,5.136,1.2844c2.4993-0.6295,3.9785-3.3106,3.3041-5.9884 C37.0998,26.854,35.7783,25.5329,34.2042,25.0412z"
					></path>{' '}
					<ellipse
						cx="19.0129"
						cy="12.4327"
						rx="2.6883"
						ry="3.7634"
						transform="matrix(0.9327 -0.3607 0.3607 0.9327 -3.2047 7.6957)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
					<ellipse
						cx="14.1245"
						cy="21.5497"
						rx="2.6883"
						ry="3.7634"
						transform="matrix(0.8286 -0.5598 0.5598 0.8286 -9.6426 11.5991)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
					<ellipse
						cx="36.1324"
						cy="14.8271"
						rx="3.7634"
						ry="2.6883"
						transform="matrix(0.0748 -0.9972 0.9972 0.0748 18.6429 49.7486)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
					<ellipse
						cx="27.7026"
						cy="10.244"
						rx="2.6883"
						ry="3.7634"
						transform="matrix(0.9893 -0.1458 0.1458 0.9893 -1.1975 4.1481)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
					<path
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
						d="M52.0157,56.9056c0.0775-0.2096,0.1503-0.4223,0.2113-0.6418c1.1089-3.991-1.0118-8.0652-4.7367-9.1002 c-3.7249-1.035-7.6434,1.3613-8.7523,5.3523c-0.061,0.2196-0.1083,0.4393-0.1501,0.6589c-1.5855,0.4534-2.9387,1.742-3.4366,3.534 c-0.7393,2.6606,0.6745,5.3768,3.1578,6.0668c1.6725,0.4647,4.9607-1.2164,5.1656-1.1594s2.1545,3.1934,3.8271,3.6581 c2.4832,0.69,5.0956-0.9076,5.8349-3.5682C53.6345,59.9139,53.14,58.1119,52.0157,56.9056z"
					></path>{' '}
					<ellipse
						cx="45.0559"
						cy="38.431"
						rx="3.7634"
						ry="2.6883"
						transform="matrix(0.1482 -0.989 0.989 0.1482 0.3735 77.2956)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
					<ellipse
						cx="36.2959"
						cy="43.9335"
						rx="2.6883"
						ry="3.7634"
						transform="matrix(0.9971 -0.0763 0.0763 0.9971 -3.2453 2.8964)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
					<ellipse
						cx="58.7464"
						cy="48.9846"
						rx="3.7634"
						ry="2.6883"
						transform="matrix(0.5586 -0.8295 0.8295 0.5586 -14.6983 70.3506)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
					<ellipse
						cx="53.6899"
						cy="40.8299"
						rx="3.7634"
						ry="2.6883"
						transform="matrix(0.363 -0.9318 0.9318 0.363 -3.8434 76.038)"
						fill="none"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						stroke-width="2"
					></ellipse>{' '}
				</g>{' '}
			</g>
		</svg>
	</>
);

function HomeHero() {
	return (
		<>
			<motion.div
				className="hero"
				style={{
					backgroundImage: `url(${homePets})`,
					minHeight: '60vh',
				}}
				variants={heroVariant}
				initial="hidden"
				animate="visible"
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="">
						<h1 className="mb-5 text-5xl font-bold">Find your new best friend</h1>
						<p className="mb-5">
							Here you will find pets from our network of over 11,500 shelters, rescues and
							adoption listings
						</p>

						<div className="flex flex-wrap gap-6 justify-center">
							<motion.div variants={childCardVariant1}>
								<Card first={dogsvg} second={'DOGS'} />
							</motion.div>
							<motion.div variants={childCardVariant2}>
								<Card first={catsvg} second={'CATS'} />
							</motion.div>
							<motion.div variants={childCardVariant3}>
								<Card first={rabbitsvg} second={'RABBITS'} />
							</motion.div>
							<motion.div variants={childCardVariant4}>
								<Card first={otherssvg} second={'OTHER ANIMALS'} />
							</motion.div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default HomeHero;
