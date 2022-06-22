function ShowCreateTicket() {
  // if (typeof (_CreateTicketPopup) !== "undefined") {
  //   _CreateTicketPopup.show();
  //   return;
  // }

  const formView   = $('<div />');

  //No html, the following is appended to the body of the ui

  _CreateTicketPopup = $('<div>').appendTo('body')
  .dxPopup({
    title: 'Create Ticket',
    visible: true,
    //use precent baseed width to support multiple window sizes
    width: '100%',
    height: '100%',
    contentTemplate: (container) => {

      //Create jquery elements
      const scrollView = $('<div />');

      //'turn' form view into dev extreme form
      formView.dxForm({ 
        formData: {},
        items: [
          {
            dataField: "ADDITIONALMEMBERS",
            validationRules: [{
              type: 'required',
              message: 'This field is required',
            }], 
          },
          {
            "dataField": "ADDRESS",
            validationRules: [{
              type: 'required',
              message: 'Address is required',
            }], 
          },
          {
            "dataField": "ALTPHONE"
          },
          {
            "dataField": "CALLER"
          },
          {
            "dataField": "CALLERPHONE"
          },
          {
            "dataField": "CITY"
          },
          {
            "dataField": "COMPANY"
          },
          {
            "dataField": "COMPANYADDRESS"
          },
          {
            "dataField": "CONTACT"
          },
          {
            "dataField": "CONTACTFAX"
          },
          {
            "dataField": "CONTACTPHONE"
          },
          {
            "dataField": "COUNTY"
          },
          {
            "dataField": "DURATION"
          },
          {
            "dataField": "EMAILADDRESS"
          },
          {
            "dataField": "EMAIL"
          },
          {
          "dataField": "EXPLOSIVES"
          },
          {
            "dataField": "XLOC"
          },
          {
            "dataField": "YLOC"
          },
          {
            "dataField": "LOCATIONOFWORK"
          },
          {
            "dataField": "MAPREF"
          },
          {
            "dataField": "NEARESTINTERSECTINGSTREET"
          },
          {
            "dataField": "CreatedBy"
          },
          {
            "dataField": "PRIORITY"
          },
          {
            "dataField": "ROW"
          },
          {
            "dataField": "SENDTO"
          },
          {
            "dataField": "SEQUENCENUMBER"
          },
          {
            "dataField": "STATE"
          },
          {
            "dataField": "STREET"
          },
          {
            "dataField": "OC_TICKETNUMBER"
          },
          {
            "dataField": "TRANSMITDATE"
          },
          {
            "dataField": "TRANSMITOP"
          },
          {
            "dataField": "TRANSMITTIME"
          },
          {
            "dataField": "TUNNELBORE"
          },
          {
            "dataField": "TYPEOFWORK"
          },
          {
            "dataField": "UPDATEOF"
          },
          {
            "dataField": "WORKBEINGDONEFOR"
          },
          {
            "dataField": "DUEDATE"
          },
          {
            "dataField": "DUETIME"
          },
          {
            "dataField": "RECEIVEDDATE"
          },
          {
            "dataField": "RECEIVEDTIME"
          },
          {
            "dataField": "REMARKS"
          },
          {
            "dataField": "TWP"
          },
          {
            "dataField": "RNG"
          },
          {
            "dataField": "ASR_PARSER"
          },
          {
            "dataField": "PARSER_NAME"
          },
          {
            "dataField": "OCC_TICKET_IDENTIFIER"
          },
          {
            "dataField": "OCC_TICKET_VERSION"
          },
          {
            "dataField": "ZIP"
          }
        ]
      })

      //append dev extreme form to jquery scroll view
      scrollView.append(formView);

      //'turn' scroll view into dev extreme scrollview
      scrollView.dxScrollView({
        width: '100%',
        height: '100%',
      })

      //append dev extreme scrollView to outter container
      container.append(scrollView);
    },
    toolbarItems: [ {
      widget: "dxButton",
      toolbar:'bottom',
      location: "after",
      options: { 
          text: "Submit", 
          icon:'key',
          type: "success",
          onClick:(e)=>{
            //print form data

            if(formView.dxForm('instance').validate()){
              console.log(formView.dxForm('instance').option('formData'));

            }

          }
        },
    },
    {
      widget: "dxButton",
      toolbar:'bottom',
      location: "after",
      options: { 
          text: "Cancel", 
          icon:'clear',
          type: "danger",
          onClick:(e)=>{
            console.log("Submission cancelled")
          }
      },
    }
  ]
  })
}

$(() => {
  ShowCreateTicket();
})

  