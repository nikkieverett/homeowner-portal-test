import React, { Component } from 'react';

class ContractorDetails extends React.Component {
  constructor(props) {
		super(props);
		this.state = emptyContractor;

		this.appointmentTimeChange = this.appointmentTimeChange.bind(this);
		this.appointmentTimeBlur = this.appointmentTimeBlur.bind(this);
		this.appointmentHourChange = this.appointmentHourChange.bind(this);
		this.appointmentHourBlur = this.appointmentHourBlur.bind(this);
		this.appointmentMinuteChange = this.appointmentMinuteChange.bind(this);
		this.appointmentMinuteBlur = this.appointmentMinuteBlur.bind(this);
		this.appointmentAmPmChange = this.appointmentAmPmChange.bind(this);
		this.appointmentAmPmBlur = this.appointmentAmPmBlur.bind(this);
		this.pricingChange = this.pricingChange.bind(this);
		this.pricingBlur = this.pricingBlur.bind(this);
		this.numberOnlyKeyPress = this.numberOnlyKeyPress.bind(this);
		this.daysClickHandler = this.daysClickHandler.bind(this);
		this.isContactedChange = this.isContactedChange.bind(this);
		this.experienceRatingChange = this.experienceRatingChange.bind(this);
		this.notesChange = this.notesChange.bind(this);
		this.notesBlur = this.notesBlur.bind(this);
		this.messageChange = this.messageChange.bind(this);
		this.messageBlur = this.messageBlur.bind(this);
		this.estimatedStartDateChange = this.estimatedStartDateChange.bind(this);
		this.estimatedEndDateChange = this.estimatedEndDateChange.bind(this);
		this.startPromtpEdit = this.startPromtpEdit.bind(this);

		this.listenForContractorsLoad();
	}

  /**
 * Get value or param in URL, based on key name
 * @param {number} name - name of param
 */
  function getURLParameter(name) {
  	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  }

  const emptyContractor = {
  	externalMatchId: 0,
  	contractorId: 0,
  	name: '...',
  	email: '',
  	phone: '',
  	totalQuoteAmount: '',
  	appointmentTime: '',
  	appointmentHour: 0,
  	appointmentMinute: 0,
  	appointmentAmPm: 'pm',
  	estimatedTimelineMinutes: 0,
  	estimatedTimelineDisplayUnit: 0,
  	estimatedTimelineDays: 0,
  	experienceRating: 0,
  	notes: '',
  	isContacted: null,
  	isHired: null,
  	contactedValue: ''
  };


  render() {

    return (
      <div className="contractor-details">
        Contractor Details
      </div>
    );
  }
}

export default ContractorDetails;
