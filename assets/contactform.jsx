class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			mobilephone: '',
			how_you_heard: '',
			how_can_we_help: '',
			formSubmitted: '',
		}
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
	}

	handleSubmit() {
		console.log('A form was submitted: ');
		console.log(this.state);
		this.setState ({
			formSubmitted: true,
			first_name: '',
			last_name: '',
			email: '',
			mobilephone: '',
			how_you_heard: '',
			how_can_we_help: '',
		});
	}
	resetForm(){
		this.setState ({
			formSubmitted: null
		})
	}

	render() {
		let contactFormClasses = 'contactForm';
		if(this.state.formSubmitted){
			contactFormClasses += ' submitted'
		}

		return (
			<form className={contactFormClasses}>
				<div className="submittedFormOverlay">
					<div className="text">THANK YOU!</div>
					<div className="closeBtn" onClick={this.resetForm}>X</div>
				</div>
				<div className='headline'>FOR INFORMATION PLEASE FILL THE FORM BELOW</div>
				<div className="two-input-group">
					<div className="form-control">
						<label className="label">First Name*</label>
						<input className="input"
							name="first_name"
							type="text"
							value={this.state.first_name}
							onChange={this.handleInputChange} />
					</div>
					<div className="form-control">
						<label className="label">Last Name*</label>
						<input className="input"
							name="last_name"
							type="text"
							value={this.state.last_name}
							onChange={this.handleInputChange} />
					</div>
				</div>
				<div className="form-control">
					<label className="label">E-mail*</label>
					<input className="input"
						name="email"
						type="text"
						value={this.state.email}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-control">
					<label className="label">Mobile Phone Number*</label>
					<input className="input"
						name="mobilephone"
						type="text"
						value={this.state.mobilephone}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-control">
					<label className="label">How did you hear of us?*</label>
					<input className="input"
						name="how_you_heard"
						type="text"
						value={this.state.how_you_heard}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-control">
					<label className="label">How may we help you?*</label>
					<textarea className="input textarea" 
						name="how_can_we_help"
						type="text"
						value={this.state.how_can_we_help}
						onChange={this.handleInputChange}/>
				</div>
				<div className="fine-print">NOTE: By filling out this contact form, I give you my permission to contact me via email, cell phone, or text until I opt out of any such communications.</div>
				<img className='rightArrow' src='/assets/images/rightArrow.svg' onClick={this.handleSubmit} />
			</form>
		);
	}
}

module.exports = ContactForm;