(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			mobilephone: '',
			how_you_heard: '',
			how_can_we_help: ''
			// formSubmitted: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetForm = this.resetForm.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

		console.log('changed');
	}

	handleSubmit() {
		console.log('A form was submitted: ');
		console.log(this.state);
		this.setState({
			// formSubmitted: true,
			first_name: '',
			last_name: '',
			email: '',
			mobilephone: '',
			how_you_heard: '',
			how_can_we_help: ''
		});
		const { formSubmitted } = this.props;
		formSubmitted();
	}
	resetForm() {
		// this.setState ({
		// 	formSubmitted: null
		// })
		const { formCleared } = this.props;
		formCleared();
	}

	componentDidMount() {

		//This is a fix to detect changes on the select2
		jQuery(this.refs.how_you_heard).on("change", e => {
			this.handleInputChange(e);
		});
	}

	render() {
		let contactFormClasses = 'contactForm';
		// if(this.state.formSubmitted){
		// 	contactFormClasses += ' submitted'
		// }
		const select2Styles = {
			width: "100%"
		};
		return React.createElement(
			'form',
			{ className: contactFormClasses },
			React.createElement(
				'div',
				{ className: 'submittedFormOverlay' },
				React.createElement(
					'div',
					{ className: 'text' },
					'THANK YOU!'
				),
				React.createElement(
					'div',
					{ className: 'closeBtn', onClick: this.resetForm },
					'X'
				)
			),
			React.createElement(
				'div',
				{ className: 'headline' },
				'FOR INFORMATION PLEASE FILL THE FORM BELOW'
			),
			React.createElement(
				'div',
				{ className: 'two-input-group' },
				React.createElement(
					'div',
					{ className: 'form-control' },
					React.createElement(
						'label',
						{ className: 'label' },
						'First Name*'
					),
					React.createElement('input', { className: 'input',
						name: 'first_name',
						type: 'text',
						value: this.state.first_name,
						onChange: this.handleInputChange,
						placeholder: 'First Name*' })
				),
				React.createElement(
					'div',
					{ className: 'form-control' },
					React.createElement(
						'label',
						{ className: 'label' },
						'Last Name*'
					),
					React.createElement('input', { className: 'input',
						name: 'last_name',
						type: 'text',
						value: this.state.last_name,
						onChange: this.handleInputChange,
						placeholder: 'Last Name*' })
				)
			),
			React.createElement(
				'div',
				{ className: 'form-control' },
				React.createElement(
					'label',
					{ className: 'label' },
					'E-mail*'
				),
				React.createElement('input', { className: 'input',
					name: 'email',
					type: 'text',
					value: this.state.email,
					onChange: this.handleInputChange,
					placeholder: 'E-mail*' })
			),
			React.createElement(
				'div',
				{ className: 'form-control' },
				React.createElement(
					'label',
					{ className: 'label' },
					'Mobile Phone Number*'
				),
				React.createElement('input', { className: 'input',
					name: 'mobilephone',
					type: 'text',
					value: this.state.mobilephone,
					onChange: this.handleInputChange,
					placeholder: 'Mobile Phone Number*' })
			),
			React.createElement(
				'div',
				{ className: 'form-control' },
				React.createElement(
					'label',
					{ className: 'label' },
					'How did you hear of us?*'
				),
				React.createElement(
					'select',
					{ style: select2Styles,
						className: 'how_you_heard',
						value: this.state.how_you_heard,
						name: 'how_you_heard',
						onChange: this.handleInputChange,
						ref: 'how_you_heard'
					},
					React.createElement('option', { className: 'emptyOption' }),
					React.createElement(
						'option',
						{ value: 'Google' },
						'Google'
					),
					React.createElement(
						'option',
						{ value: 'Friend' },
						'Friend'
					),
					React.createElement(
						'option',
						{ value: 'Newspaper' },
						'Newspaper'
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'form-control' },
				React.createElement(
					'label',
					{ className: 'label' },
					'How may we help you?*'
				),
				React.createElement('textarea', { className: 'input textarea',
					name: 'how_can_we_help',
					type: 'text',
					value: this.state.how_can_we_help,
					onChange: this.handleInputChange,
					placeholder: 'How may we help you?*' })
			),
			React.createElement(
				'div',
				{ className: 'fine-print' },
				'NOTE: By filling out this contact form, I give you my permission to contact me via email, cell phone, or text until I opt out of any such communications.'
			),
			React.createElement(
				'div',
				{ className: 'rightArrowContainer' },
				React.createElement('img', { className: 'rightArrow not-mobile', src: '/assets/images/rightarrow.svg', onClick: this.handleSubmit }),
				React.createElement(
					'div',
					{ className: 'mobileRightArrowContainer mobile-only', onClick: this.handleSubmit },
					React.createElement(
						'div',
						{ className: 'text' },
						'SEND'
					),
					React.createElement('img', { className: 'rightArrow mobile-only', src: '/assets/images/mobileSubmitArrow.svg' })
				)
			)
		);
	}
}

module.exports = ContactForm;

},{}],2:[function(require,module,exports){
const ContactForm = require('./contactform.jsx');

class ContactFormSlide extends React.Component {
	constructor(props) {
		super(props);
	}
	contactFormSubmitted() {
		const { formSubmitted } = this.props;
		formSubmitted();
	}

	contactFormCleared() {
		const { formCleared } = this.props;
		formCleared();
	}

	render() {
		return React.createElement(
			"div",
			{ className: "contactPageWrapper" },
			React.createElement(ContactForm, { formCleared: this.contactFormCleared.bind(this), formSubmitted: this.contactFormSubmitted.bind(this) }),
			React.createElement(
				"div",
				{ className: "privacyPolicy" },
				React.createElement(
					"div",
					{ className: "verticalLineContainer" },
					React.createElement("div", { className: "verticalLine" })
				),
				React.createElement("img", { className: "logo", src: "/assets/images/NRLiving.png" }),
				React.createElement(
					"div",
					{ className: "contactInfo" },
					React.createElement(
						"div",
						{ className: "address" },
						"1300 Manhattan Avenue Union City, NJ 07087"
					),
					React.createElement(
						"div",
						{ className: "address" },
						"Manhattan Avenue Capital 1300, LLC"
					),
					React.createElement("br", null),
					React.createElement(
						"div",
						{ className: "address" },
						"Richard Stabile"
					),
					React.createElement(
						"div",
						{ className: "address" },
						"RE/MAX Real Estate Limited"
					),
					React.createElement(
						"div",
						{ className: "phone" },
						"201-400-7487"
					),
					React.createElement(
						"div",
						{ className: "copyright" },
						"\xA9 2020 Hoboken Heights. All rights reserved."
					),
					React.createElement(
						"div",
						{ className: "btn" },
						"PRIVACY POLICY"
					)
				)
			)
		);
	}
}
module.exports = ContactFormSlide;

},{"./contactform.jsx":1}],3:[function(require,module,exports){
const modules = require('./modules.jsx');

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const slideHeaderState = this.props.options;
		const fixedHeader = slideHeaderState.fixedHeader;
		const addCornerLogo = slideHeaderState.addCornerLogo;
		if (!addCornerLogo) {
			return React.createElement('div', null);
		}
		const darkCornerLogo = slideHeaderState.addDarkCornerLogo;
		const animateCornerLogoOnStart = slideHeaderState.animateCornerLogoOnStart;
		const cornerLogoHideOnLastSlide = slideHeaderState.cornerLogoHideOnLastSlide;
		const cornerLogofadeIn = slideHeaderState.cornerLogofadeIn;

		let cornerLogoWrapperClasses = 'corner-logo-wrapper';
		if (darkCornerLogo) {
			cornerLogoWrapperClasses += ' darkMode';
		}
		if (animateCornerLogoOnStart) {
			cornerLogoWrapperClasses += ' animate';
		}
		if (fixedHeader) {
			cornerLogoWrapperClasses += ' fixed';
		}
		if (cornerLogoHideOnLastSlide) {
			cornerLogoWrapperClasses += ' cornerLogoHideOnLastSlide';
		}
		if (cornerLogofadeIn) {
			cornerLogoWrapperClasses += ' cornerLogofadeIn';
		}
		return React.createElement(
			'div',
			{ className: cornerLogoWrapperClasses },
			React.createElement(
				'div',
				{ className: 'text' },
				modules.explodeString('HOBOKEN HEIGHTS'),
				React.createElement('div', { className: 'cascading-animation separator' })
			),
			darkCornerLogo && React.createElement('img', { className: 'corner-logo', src: '/assets/images/NIRMA_Logo_Symbol_Black.png' }),
			!darkCornerLogo && React.createElement('img', { className: 'corner-logo', src: '/assets/images/NIRMA_Logo_Symbol_White.png' })
		);
	}
}

module.exports = Header;

},{"./modules.jsx":6}],4:[function(require,module,exports){
class LandingPageMusicPlayer extends React.Component {
	constructor(props) {
		super(props);
	}

	startMusicPlayer() {
		const { nextSlide } = this.props;
		const { playMusic } = this.props;
		playMusic();
		nextSlide();
	}

	stopMusicPlayer() {
		const { nextSlide } = this.props;
		const { muteMusic } = this.props;
		muteMusic();
		nextSlide();
	}

	animationHasEnded() {
		const { animationEnded } = this.props;
		animationEnded();
	}

	render() {
		let settingsClasses = 'settings slideInAnimationWrapper';
		let playButtonClasses = 'button play slideInAnimationElementContainer';
		let muteButtonClasses = 'button mute slideInAnimationElementContainer';

		if (this.props.isPlaying) {
			playButtonClasses += " selected_option";
		} else {
			muteButtonClasses += " selected_option";
		}

		return React.createElement(
			'div',
			{ className: settingsClasses },
			React.createElement(
				'div',
				{ className: playButtonClasses, onClick: this.startMusicPlayer.bind(this) },
				React.createElement(
					'div',
					{ className: 'text slideInAnimationElement slideInAnimationElementLeft' },
					'YES'
				)
			),
			React.createElement('div', { className: 'separator' }),
			React.createElement(
				'div',
				{ onClick: this.stopMusicPlayer.bind(this), className: muteButtonClasses, onAnimationEnd: this.animationHasEnded.bind(this) },
				React.createElement(
					'div',
					{ className: 'text slideInAnimationElement slideInAnimationElementRight' },
					'NO'
				)
			)
		);
	}
}

module.exports = LandingPageMusicPlayer;

},{}],5:[function(require,module,exports){
class MobileMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileMenuOpen: 0
		};
	}

	lastSlide() {
		const { scrollToLastSlide } = this.props;
		scrollToLastSlide();
		this.closeMobileMenu();
	}
	toggleSound() {
		const { toggleMusic } = this.props;
		toggleMusic();
	}

	expandMobileMenu() {
		this.setState({ mobileMenuOpen: 1 });
	}
	closeMobileMenu() {
		this.setState({ mobileMenuOpen: 0 });
	}
	render() {

		let mobileMenuClasses = 'mobileMenu';
		let expandedMobileMenuClasses = 'expandedMobileMenu';
		let hamburgerClasses = 'hamburger';
		expandedMobileMenuClasses += this.state.mobileMenuOpen ? ' open' : '';
		hamburgerClasses += this.props.currIdx == 4 ? ' darkMode' : '';

		return React.createElement(
			'div',
			{ className: mobileMenuClasses },
			React.createElement(
				'div',
				{ className: 'hamburgerWrapper' },
				React.createElement(
					'div',
					{ className: hamburgerClasses, onClick: this.expandMobileMenu.bind(this) },
					React.createElement('div', { className: 'line' }),
					React.createElement('div', { className: 'line' })
				)
			),
			React.createElement(
				'div',
				{ className: expandedMobileMenuClasses },
				React.createElement(
					'div',
					{ className: 'menuItemsContainer' },
					React.createElement(
						'div',
						{ className: 'text' },
						'HOBOKEN HEIGHTS'
					),
					React.createElement('div', { className: 'separator' }),
					React.createElement(
						'div',
						{ className: 'logo' },
						React.createElement('img', { src: '/assets/images/NIRMA_Logo_Symbol_White.png', alt: '' })
					),
					React.createElement(
						'div',
						{ className: 'sound', onClick: this.toggleSound.bind(this) },
						this.props.isPlaying && React.createElement('img', { src: '/assets/images/mobile_sound_on.svg', alt: '' }),
						!this.props.isPlaying && React.createElement('img', { src: '/assets/images/mobile_sound_off.svg', alt: '' })
					),
					React.createElement(
						'div',
						{ className: 'contact', onClick: this.lastSlide.bind(this) },
						React.createElement('img', { src: '/assets/images/mobile_mail.svg', alt: '' })
					),
					React.createElement(
						'div',
						{ className: 'close_btn', onClick: this.closeMobileMenu.bind(this) },
						React.createElement('img', { src: '/assets/images/mobile_menu_x.svg', alt: '' })
					)
				)
			)
		);
	}
}

module.exports = MobileMenu;

},{}],6:[function(require,module,exports){
const modules = {
	explodeString: function (string) {
		const spans = string.split("").map(function (char, index) {
			return React.createElement(
				"span",
				{ className: "letter cascading-animation", key: index },
				char
			);
		});
		return spans;
	}
};

module.exports = modules;

},{}],7:[function(require,module,exports){
class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cornerMusicPlayerAnimationFinished: 0
		};

		this.scrollToContactForm = this.scrollToContactForm.bind(this);
		this.cornerMusicPlayerAnimationEnded = this.cornerMusicPlayerAnimationEnded.bind(this);
		this.toggleMusic = this.toggleMusic.bind(this);
	}
	toggleMusic() {
		const { toggleMusicPlayer } = this.props;
		toggleMusicPlayer();
	}
	scrollToContactForm() {
		const { scrollToLastSlide } = this.props;
		scrollToLastSlide();
	}

	cornerMusicPlayerAnimationEnded() {
		this.setState({ cornerMusicPlayerAnimationFinished: 1 });
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currIdx !== this.props.currIdx && this.props.currIdx == 1) {
			this.cornerMusicPlayerAnimationEnded();
		}
	}

	render() {
		let classes = "musicplayer_container";
		let corner_content_wrapper_classes = 'corner_content_wrapper';

		// if(this.props.isFirstSlide) {
		// 	classes += " center_layout";
		// }
		// else {
		// }
		classes += " corner_layout";

		if (this.props.darkMode) {
			classes += " darkMode";
		}

		if (!this.state.cornerMusicPlayerAnimationFinished && this.props.currIdx != 1) {
			corner_content_wrapper_classes += " animationHasNotRun";
		}

		const statusText = this.props.isPlaying ? 'ON' : 'OFF';

		return React.createElement(
			"div",
			{ className: classes },
			React.createElement(
				"div",
				{ className: corner_content_wrapper_classes },
				React.createElement(
					"div",
					{ className: "corner_content slideInAnimationWrapper" },
					React.createElement(
						"div",
						{ className: "button musicplayer slideInAnimationElementContainer", onClick: this.toggleMusic.bind(this) },
						React.createElement(
							"div",
							{ className: "slideInAnimationElement slideInAnimationElementLeft" },
							"SOUND",
							React.createElement("br", null),
							statusText
						)
					),
					React.createElement("div", { className: "separator" }),
					React.createElement(
						"div",
						{ className: "button slideInAnimationElementContainer", onClick: this.scrollToContactForm.bind(this) },
						React.createElement(
							"div",
							{ className: "text slideInAnimationElement slideInAnimationElementRight" },
							"CONTACT"
						)
					)
				)
			)
		);
	}
}

module.exports = MusicPlayer;

},{}],8:[function(require,module,exports){
const SLIDES = [{
	styles: {
		background: "#000"
	},
	video: "/assets/videos/NIRMA_Logo_Motion.mp4",
	videoMobileStartPosition: 'center',
	isLandingPage: 1
}, {
	video: "/assets/videos/NRIMA_1_Exterior_HIGH_Cinemagraphic.mp4",
	videoLoop: true,
	videoZoomEffect: true,
	videoMobileStartPosition: 'left',
	addCornerLogo: true,
	centerBottom: {
		line1: "MANHATTAN AVE, 1300",
		line2: "COMING SOON"
	},
	hasDownArrow: true,
	soundEffect: "./assets/sounds/SOUND-NIGHT_VIEW.mp3",
	phantomMusicPlayer: true,
	mobileHasDifferentContent: true,
	mobileContent: {
		left: {
			centerBottom: {
				line1: "SWIPE <div class='right_arrow_bouncing'></div>",
				lineStyles: {
					display: 'flex',
					alignItems: 'center'
				}
			}
		},
		center: {
			centerBottom: {
				line1: "MANHATTAN AVE, 1300",
				line2: "COMING SOON"
			}
		}
	},
	mobileHorizontalVideoSlideEnabled: true
}, {
	slideClasses: "backgroundFrame",
	styles: {
		fontSize: '15px',
		lineHeight: '21px'
	},
	centerImage: "/assets/images/NIRMA_Logo_White.png",
	centerImageStyles: {
		width: "272px",
		marginBottom: "55px"
	},
	center: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br /><br />Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
	centerTextClasses: 'gotham-light',
	centerTextStyles: {
		width: "56vw"
	},
	centerTextStylesMobile: {
		width: "82vw"
	},

	contactButton: true
	// background: "#000"
}, {
	video: "/assets/videos/NIRMA_2_Patio_High_Cinemagraphic.mp4",
	videoLoop: true,
	videoZoomEffect: true,
	videoMobileStartPosition: 'center',
	addCornerLogo: true,
	cornerLogoHideOnLastSlide: true,
	cornerLogofadeIn: true,
	soundEffect: "./assets/sounds/SOUND-SUNSET_VIEW.mp3",
	mobileHorizontalVideoSlideEnabled: true,
	mobileHasDifferentContent: true,

	mobileContent: {
		center: {
			centerBottom: {
				line1: "<div class='left_arrow_bouncing'></div> SWIPE <div class='right_arrow_bouncing'></div>",
				lineStyles: {
					display: 'flex',
					alignItems: 'center'
				}
			}
		}
	}

}, {
	styles: {
		backgroundColor: "transparent",
		color: "#000",
		overflow: "scroll"
	},
	// addCornerLogo: true,
	addDarkCornerLogo: true,
	// animateCornerLogoOnStart: true,
	contactFormSlide: true
}];

module.exports = SLIDES;

},{}],9:[function(require,module,exports){
const ContactFormSlide = require('./contactformslide.jsx');
const Header = require('./header.jsx');
const LandingPageMusicPlayer = require('./landingpagemusicplayer.jsx');
const MusicPlayer = require('./musicplayer.jsx');

class Slide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			styles: this.props.obj.styles,
			landingPageAnimationFinished: 0,
			soundEffect: new Audio()
		};
		this.landingPageAnimationEnded = this.landingPageAnimationEnded.bind(this);

		this.musicPlay = this.musicPlay.bind(this);
		this.musicMute = this.musicMute.bind(this);
		this.scrollToNextSlide = this.scrollToNextSlide.bind(this);

		this.state.soundEffect.loop = true;

		if (this.state.styles) {
			this.state.styles.backgroundRepeat = "no-repeat";
		}
	}

	musicMute() {
		const { stopMusic } = this.props;
		stopMusic();
	}

	musicPlay(evt) {
		const { playMusic } = this.props;
		playMusic();
	}

	landingPageAnimationEnded() {
		this.setState({ landingPageAnimationFinished: 1 });
	}

	scrollToContactForm() {
		const { scrollToLastSlide } = this.props;
		scrollToLastSlide();
	}

	scrollToNextSlide() {
		const { goToNextSlide } = this.props;
		goToNextSlide();
	}

	playSoundEffect() {
		const soundEffect = this.props.obj.soundEffect;
		const musicIsPlaying = this.props.isPlaying;
		const isCurrent = this.props.isCurrent;
		if (isCurrent && musicIsPlaying && soundEffect) {
			const updateSoundSource = this.state.soundEffect.src.indexOf(soundEffect.substring(1)) == -1;
			const soundIsPaused = this.state.soundEffect.paused;
			if (updateSoundSource) {
				this.state.soundEffect.src = soundEffect;
			}
			if (soundIsPaused) {
				this.state.soundEffect.play();
			}
		} else this.state.soundEffect.pause();
	}

	contactFormSubmitted() {
		const { formSubmitted } = this.props;
		formSubmitted();
	}

	contactFormCleared() {
		const { formCleared } = this.props;
		formCleared();
	}

	render() {
		this.playSoundEffect();

		const slideObj = this.props.obj;
		let slideClasses = "slide bg000";
		let videoClasses = 'background-video';
		let landing_page_sound_player_classes = 'landing_page_sound_player';
		let centerTextClasses = 'center';
		let centerBottomClasses = "centerBottom";

		const isCurrent = this.props.isCurrent;
		const headerOptions = {
			addCornerLogo: slideObj.addCornerLogo,
			addDarkCornerLogo: slideObj.addDarkCornerLogo,
			animateCornerLogoOnStart: slideObj.animateCornerLogoOnStart,
			cornerLogoHideOnLastSlide: slideObj.cornerLogoHideOnLastSlide,
			cornerLogofadeIn: slideObj.cornerLogofadeIn
		};

		slideClasses += slideObj.slideClasses != undefined ? " " + slideObj.slideClasses : '';
		if (isCurrent) slideClasses += " runAnimations activeSlide";
		if (this.props.slideViewed) slideClasses += " runAnimationOnce";
		if (slideObj.videoZoomEffect) videoClasses += ' videoZoomEffect';
		slideClasses += slideObj.videoMobileStartPosition ? ' mobile-video-position-' + slideObj.videoMobileStartPosition : ' mobile-video-position-left';

		// if(!this.state.landingPageAnimationFinished) {
		// 	landing_page_sound_player_classes += " animationHasNotRun";
		// }

		if (slideObj.centerTextClasses) {
			centerTextClasses += ' ' + slideObj.centerTextClasses;
		}

		if (slideObj.mobileHasDifferentContent) {
			centerTextClasses += ' not-mobile';
			centerBottomClasses += ' not-mobile';
		}

		let centerTextStyles;
		if (window.innerWidth > 768) {
			centerTextStyles = slideObj.centerTextStyles;
		} else {
			centerTextStyles = slideObj.centerTextStylesMobile;
		}

		return React.createElement(
			'div',
			{ className: slideClasses, style: this.state.styles },
			React.createElement(Header, { options: headerOptions }),
			slideObj.phantomMusicPlayer &&
			// This music player should only appear on the second slide to create the visual effect of it sliding down and up with the second slide.
			// The regular music player is fixed in the right top corner
			React.createElement(MusicPlayer, { currIdx: this.props.currIdx, toggleMusicPlayer: this.musicToggle, goToNextSlide: this.scrollToNextSlide, scrollToLastSlide: this.scrollToContactForm, isPlaying: this.props.isPlaying }),
			slideObj.video && React.createElement(
				'video',
				{ autoPlay: true, muted: true, loop: slideObj.videoLoop ? true : false, className: videoClasses },
				React.createElement('source', { src: slideObj.video, type: 'video/mp4' })
			),
			slideObj.contactFormSlide && React.createElement(ContactFormSlide, { formCleared: this.contactFormCleared.bind(this), formSubmitted: this.contactFormSubmitted.bind(this) }),
			React.createElement(
				'div',
				{ className: centerTextClasses, style: centerTextStyles },
				slideObj.centerImage && React.createElement('img', { style: slideObj.centerImageStyles, src: slideObj.centerImage }),
				React.createElement('h1', { dangerouslySetInnerHTML: { __html: slideObj.center } }),
				slideObj.contactButton && React.createElement(
					'div',
					{ className: 'btn contactButton', onClick: this.scrollToContactForm.bind(this) },
					'CONTACT'
				)
			),
			React.createElement(
				'div',
				{ className: centerBottomClasses },
				slideObj.isLandingPage && React.createElement(
					'div',
					{ className: 'musicplayer_container center_layout' },
					React.createElement(
						'div',
						{ className: 'musicplayer centered_content' },
						React.createElement(
							'div',
							{ className: landing_page_sound_player_classes },
							React.createElement(
								'div',
								{ className: 'title' },
								'SOUND EXPERIENCE'
							),
							React.createElement(LandingPageMusicPlayer, { animationEnded: this.landingPageAnimationEnded, nextSlide: this.scrollToNextSlide, muteMusic: this.musicMute, playMusic: this.musicPlay, isPlaying: this.props.isPlaying })
						)
					)
				),
				slideObj.centerBottom && slideObj.centerBottom.line1 && React.createElement('h1', { dangerouslySetInnerHTML: { __html: slideObj.centerBottom.line1 } }),
				slideObj.centerBottom && slideObj.centerBottom.line2 && React.createElement('h1', { dangerouslySetInnerHTML: { __html: slideObj.centerBottom.line2 } }),
				slideObj.hasDownArrow && React.createElement('img', { onClick: this.scrollToNextSlide.bind(this), className: 'downArrow', src: '/assets/images/downarrow.svg' })
			),
			slideObj.mobileHasDifferentContent && slideObj.mobileContent.left && React.createElement(
				'div',
				{ className: "centerBottom mobile-only mobile-content-left " + (isCurrent && slideObj.videoMobileStartPosition == 'left' ? ' animate' : '') },
				React.createElement('h1', { style: slideObj.mobileContent.left.centerBottom.lineStyles, className: 'line', dangerouslySetInnerHTML: { __html: slideObj.mobileContent.left.centerBottom.line1 } })
			),
			slideObj.mobileHasDifferentContent && slideObj.mobileContent.center && React.createElement(
				'div',
				{ className: "centerBottom mobile-only mobile-content-center " + (isCurrent && slideObj.videoMobileStartPosition == 'center' ? ' animate' : '') },
				React.createElement('h1', { style: slideObj.mobileContent.center.centerBottom.lineStyles, className: 'line', dangerouslySetInnerHTML: { __html: slideObj.mobileContent.center.centerBottom.line1 } }),
				React.createElement('h1', { style: slideObj.mobileContent.center.centerBottom.lineStyles, className: 'line', dangerouslySetInnerHTML: { __html: slideObj.mobileContent.center.centerBottom.line2 } })
			)
		);
	}
}

module.exports = Slide;

},{"./contactformslide.jsx":2,"./header.jsx":3,"./landingpagemusicplayer.jsx":4,"./musicplayer.jsx":7}],10:[function(require,module,exports){
'use strict';

const SLIDES = require('./assets/page.js');
const Slide = require('./assets/slide.jsx');
const MusicPlayer = require('./assets/musicplayer.jsx');
const modules = require('./assets/modules.jsx');
const Header = require('./assets/header.jsx');
const MobileMenu = require('./assets/mobilemenu.jsx');

class SplashPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: SLIDES,
			slidesViewed: [0],
			transitiongState: 0, // 0 for false -1 for up 1 for down
			currIdx: 0,
			previousScrollVal: 0,
			peakScrollVal: 0,
			readyForScroll: 1,
			browser: '',
			operating_sys: '',
			touchState: 0, //0 for end, 1 for start, 2 for move
			touchDirection: null,
			touchStartCoordinate: {
				x: null,
				y: null
			},

			isPlaying: false,
			audioPlayer: new Audio('./assets/sounds/SOUND-GENERAL_MUSIC.mp3')
		};
		this.lastSlide = this.lastSlide.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.handleTouchStart = this.handleTouchStart.bind(this);

		this.throttleOnScroll = _.throttle(this.throttleOnScroll.bind(this), 100, { leading: true });
		// this.debounceOnScroll = _.throttle(this.debounceOnScroll.bind(this), 3500, {leading: true, trailing:true});


		this.musicMute = this.musicMute.bind(this);
		this.musicPlay = this.musicPlay.bind(this);
		this.musicToggle = this.musicToggle.bind(this);

		/*
   * Browser wheel event inconsistencies
   * 
   * Chrome - outputs many consecutive events that start with deltaY of 1/-1 and can 
   * go into the hundreds depending on how quickly you tried to scroll. 
   * Even the smallest consistent scroll can output multiple events of deltaY = 1/-1
   * A new deltaY event can be created every hundreth of a second. A single scroll can output
   * hundreds of deltaY events.
   * 
   * Safari - usually only outputs a single wheel event whether the scroll is long and slow or big and quick
   * The deltaY will be 1 or -1. In some cases when the scroll is very quick, deltaY events are created in a manner similar to Chrome
   * 
   * Firefox on Mac is similar to Chrome
   * 
   * Firefox on Windows is a mix of both Chrome's and Safari's style
   * With small quick scrolls, only a single event is output
   * With long slow scrolls, a new deltaY event is created about every second
   * With quick big scrolls, many events are created from deltaY of 3 to about 30, 
   * sometimes every few ms, but it doesnt create nearly as many events as Chrome. A single scroll can output
   * dozens of deltaY events
   *
  */
		let browser;
		const user_agent = navigator.userAgent.toLowerCase();
		if (user_agent.indexOf('windows') != -1) {
			this.state.operating_sys = 'windows';
		}
		if (user_agent.indexOf('safari') != -1) {
			if (user_agent.indexOf('chrome') > -1) {
				browser = 'chrome';
			} else {
				browser = 'safari';
			}
		} else if (user_agent.indexOf('firefox') != -1) {
			browser = 'firefox';
		}
		this.state.browser = browser;
	}
	// debounceOnScroll() {
	// 	//very long scrolls last 3.5 seconds, should be safe to zero out the scroll at that point
	// 	//this would create a more responsive experience since a deltaY of 1 would then trigger a slide

	// 	this.setState({previousScrollVal: 0});
	// }

	musicMute(evt) {
		this.setState({ isPlaying: false });
	}
	musicPlay(evt) {
		this.setState({ isPlaying: true });
	}
	musicToggle() {
		this.setState({ isPlaying: !this.state.isPlaying });
	}
	scrollSlide(deltaY) {
		const isScrollingDown = deltaY > 0;
		if (isScrollingDown) {
			this.nextSlide();
		} else {
			this.prevSlide();
		}
	}
	throttleOnScroll(deltaY) {
		if (Math.abs(deltaY) >= 1 && this.state.readyForScroll) {
			if (Math.abs(deltaY) > Math.abs(this.state.previousScrollVal)) {
				this.scrollSlide(deltaY);
				this.setState({ peakScrollVal: deltaY });
				this.setState({ readyForScroll: null });
			}
		} else {
			if (Math.abs(this.state.peakScrollVal) / 2 >= Math.abs(deltaY)) {
				this.setState({ readyForScroll: true });
			} else if (Math.abs(deltaY) > Math.abs(this.state.peakScrollVal)) {
				this.setState({ peakScrollVal: deltaY });
			}
		}

		this.setState({ previousScrollVal: deltaY });
	}
	handleScrollEvent(evt) {
		const deltaY = evt.deltaY;
		// this.throttleOnScroll(deltaY);
		// this.debounceOnScroll(deltaY);
		return;
		const isScrollingDown = deltaY > 0;
		if (isScrollingDown) {
			this.nextSlide();
		} else {
			this.prevSlide();
		}
	}
	handleWheelEvent(evt) {
		const deltaY = evt.deltaY;
		const browserWithSingleScrollEvent = this.state.browser == 'safari' || this.state.browser == 'firefox' && this.state.operating_sys == 'windows';
		if (browserWithSingleScrollEvent) {
			this.scrollSlide(deltaY);
		} else {
			this.throttleOnScroll(deltaY);
		}
		// this.debounceOnScroll(deltaY);
		return;
		const isScrollingDown = deltaY > 0;
		if (isScrollingDown) {
			this.nextSlide();
		} else {
			this.prevSlide();
		}
	}
	watchForEventEnd() {
		this.setState({ transitiongState: 0 });
	}
	isTransitioning() {
		return this.state.transitiongState != 0 || this.state.touchState == 2;
	}
	addIdxToViewedSlides(idx) {
		if (this.state.slidesViewed.includes(idx)) return;

		let slidesViewedArray = this.state.slidesViewed.concat(idx);
		this.setState({ slidesViewed: slidesViewedArray });
	}
	nextSlide() {
		if (this.isTransitioning()) {
			return;
		}
		const newIdx = this.state.currIdx + 1;
		if (newIdx >= SLIDES.length) {
			return;
		}
		this.setState({
			transitiongState: 1,
			currIdx: newIdx
		});

		this.addIdxToViewedSlides(newIdx);
	}
	prevSlide() {
		if (this.isTransitioning()) {
			return;
		}
		const positionIsNotAtTopOfSlide = document.querySelector('.activeSlide').scrollTop != 0;
		if (positionIsNotAtTopOfSlide) {
			return;
		}
		const newIdx = this.state.currIdx - 1;
		if (newIdx < 0) {
			return;
		}
		this.setState({
			transitiongState: -1,
			currIdx: newIdx
		});
		this.addIdxToViewedSlides(newIdx);
	}
	lastSlide() {
		const newIdx = this.state.slides.length - 1;
		const alreadyOnLastSlide = this.state.currIdx == newIdx;

		if (this.isTransitioning() || alreadyOnLastSlide) {
			return;
		}
		if (newIdx < 0) {
			return;
		}
		this.setState({
			transitiongState: 1,
			currIdx: newIdx
		});
		this.addIdxToViewedSlides(newIdx);
	}
	componentDidMount() {
		$('.how_you_heard').select2({
			placeholder: "How did you hear of us?*",
			width: 'resolve'
		});
		window.addEventListener('keydown', event => {
			if (!event.target.classList.contains('input')) {
				if (event.code == "ArrowUp") this.prevSlide();else if (event.code == "ArrowDown") this.nextSlide();else if (event.code == "ArrowLeft") this.prevSlide();else if (event.code == "ArrowRight") this.nextSlide();
			}
		});
	}
	componentDidUpdate() {
		const that = this;
		return;
		this.refs.inner.addEventListener('transitionend', evt => {
			that.setState({
				transitiongState: 0,
				currIdx: this.state.currIdx + delta
			});
		}, false);
	}

	handleTouchStart(evt) {
		const coordinateX = evt.touches[0].clientX;
		const coordinateY = evt.touches[0].clientY;
		const coordinateObj = {
			x: coordinateX,
			y: coordinateY
		};
		this.setState({
			touchState: 1,
			touchStartCoordinate: coordinateObj
		});
	}
	handleTouchMove(evt) {
		if (this.state.touchState != 1) return;
		const coordinateX = evt.touches[0].clientX;
		const coordinateY = evt.touches[0].clientY;
		const horizontalDirection = this.state.touchStartCoordinate.x > coordinateX ? 'right' : 'left';
		const verticalDirection = this.state.touchStartCoordinate.y > coordinateY ? 'down' : 'up';
		const horizontalDifference = Math.abs(this.state.touchStartCoordinate.x - coordinateX);
		const verticalDifference = Math.abs(this.state.touchStartCoordinate.y - coordinateY);

		let mainTouchDirection;
		if (verticalDifference > horizontalDifference) {
			mainTouchDirection = verticalDirection;
		} else {
			mainTouchDirection = horizontalDirection;
		}

		this.setState({
			touchState: 2,
			touchDirection: mainTouchDirection
		});
		if (mainTouchDirection == 'up') {} else if (mainTouchDirection == 'down') {
			this.nextSlide();
		}
		switch (mainTouchDirection) {
			case 'up':
				this.prevSlide();
				break;
			case 'down':
				this.nextSlide();
				break;
			case 'left':
				this.slideHorizontal('left');
				break;
			case 'right':
				this.slideHorizontal('right');
				break;
		}
	}
	handleTouchEnd() {
		this.setState({
			touchState: 0
		});
	}
	slideHorizontal(direction) {
		const key = this.state.currIdx;
		const mobileHorizontalVideoSlideEnabled = this.state.slides[key].mobileHorizontalVideoSlideEnabled;
		if (!mobileHorizontalVideoSlideEnabled) return;

		const videoMobileStartPosition = this.state.slides[key].videoMobileStartPosition;
		let newVideoMobileStartPosition;

		if (direction == 'right') {
			if (videoMobileStartPosition == 'left') newVideoMobileStartPosition = 'center';else if (videoMobileStartPosition == 'center') newVideoMobileStartPosition = 'right';else return;
		} else {
			if (videoMobileStartPosition == 'right') newVideoMobileStartPosition = 'center';else if (videoMobileStartPosition == 'center') newVideoMobileStartPosition = 'left';else return;
		}

		const slidesStateCopy = this.state.slides;
		slidesStateCopy[key].videoMobileStartPosition = newVideoMobileStartPosition;
		this.setState({ slides: slidesStateCopy });
	}
	contactFormSubmitted() {
		this.setState({ formSubmitted: true });
	}
	contactFormCleared() {
		this.setState({ formSubmitted: null });
	}

	render() {
		if (this.state.isPlaying) {
			this.state.audioPlayer.play();
		} else {
			this.state.audioPlayer.pause();
		}

		const $slides = this.state.slides.map((slide, idx) => React.createElement(Slide, { formCleared: this.contactFormCleared.bind(this), formSubmitted: this.contactFormSubmitted.bind(this), currIdx: this.state.currIdx, playMusic: this.musicPlay, stopMusic: this.musicMute, slideViewed: this.state.slidesViewed.includes(idx), goToNextSlide: this.nextSlide, scrollToLastSlide: this.lastSlide, key: idx, obj: slide, isCurrent: idx == this.state.currIdx, isPlaying: this.state.isPlaying }));
		const innerStyle = {
			transform: 'translateY(-' + this.state.currIdx * 100 + 'vh)'
		};

		const thisSlideState = this.state.slides[this.state.currIdx];
		const thisSlideSoundEffect = thisSlideState.soundEffect;
		const addCornerLogo = thisSlideState.addCornerLogo;
		const darkCornerLogo = thisSlideState.addDarkCornerLogo;
		const animateCornerLogoOnStart = thisSlideState.animateCornerLogoOnStart;
		const lastSlideIdx = this.state.slides.length - 1;
		const lastSlideViewed = this.state.slidesViewed.includes(lastSlideIdx);

		let headerOptions = {
			addCornerLogo: true,
			addDarkCornerLogo: true,
			fixedHeader: true
		};

		if (this.state.currIdx == lastSlideIdx) {
			headerOptions.animateCornerLogoOnStart = true;
		}
		let slides_inner_classes = "slides_inner slide_idx_" + this.state.currIdx;

		let pageClasses = this.state.formSubmitted ? 'formSubmitted' : '';
		return React.createElement(
			'div',
			{ id: 'page', className: pageClasses },
			React.createElement(
				'div',
				{ className: 'submittedFormOverlay mobile-only' },
				React.createElement(
					'div',
					{ className: 'text' },
					'THANK YOU!'
				),
				React.createElement(
					'div',
					{ className: 'closeBtn', onClick: this.contactFormCleared.bind(this) },
					'X'
				)
			),
			React.createElement(
				'div',
				{ className: 'slides_wrapper', onTouchStart: this.handleTouchStart.bind(this), onTouchMove: this.handleTouchMove.bind(this), onTouchEnd: this.handleTouchEnd.bind(this), onWheel: this.handleWheelEvent.bind(this), onScroll: this.handleScrollEvent.bind(this) },
				React.createElement(Header, { options: headerOptions }),
				React.createElement(
					'div',
					{
						ref: 'inner',
						className: slides_inner_classes,
						style: innerStyle,
						onTransitionEnd: this.watchForEventEnd.bind(this) },
					$slides
				),
				React.createElement(MusicPlayer, { toggleMusicPlayer: this.musicToggle, soundEffect: thisSlideSoundEffect, darkMode: darkCornerLogo, goToNextSlide: this.nextSlide, scrollToLastSlide: this.lastSlide, isFirstSlide: this.state.currIdx === 0, currIdx: this.state.currIdx, isPlaying: this.state.isPlaying }),
				React.createElement(MobileMenu, { currIdx: this.state.currIdx, scrollToLastSlide: this.lastSlide, isPlaying: this.state.isPlaying, toggleMusic: this.musicToggle })
			)
		);
	}
}

let domContainer = document.querySelector('#container');
ReactDOM.render(React.createElement(SplashPage, null), domContainer);

},{"./assets/header.jsx":3,"./assets/mobilemenu.jsx":5,"./assets/modules.jsx":6,"./assets/musicplayer.jsx":7,"./assets/page.js":8,"./assets/slide.jsx":9}]},{},[10]);
