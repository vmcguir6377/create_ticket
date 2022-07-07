function ShowCreateTicket() {
 
const formView   = $('<div />');

  //No html, the following is appended to the body of the ui**

  //Initializing

  _CreateTicketPopup = $('<div>').appendTo('body')
  .dxPopup({
    title: 'Create Ticket',
    visible: true,
    //use percent based page parameters to support multiple window sizes
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
              message: ' Address is required',
            }], 
          },
          {
            "dataField": "ALTPHONE",
            validationRules: [{
              type: 'required',
              message: ' Alt phone is required',
     
          }],
        },
          {
            "dataField": "CALLER",
            validationRules: [{
              type: 'required',
              message: ' Caller is required',
            },{
              type: "pattern",
              pattern: "^[a-zA-Z]+$",
              message: "The name should not contain digits"
          }] 
          },
          {
            "dataField": "CALLERPHONE",
            validationRules: [{
              type: 'required',
              message: ' Caller phone is required',
            }], 
          },
          {
            "dataField": "CITY",
            validationRules: [{
              type: 'required',
              message: 'City is required',
            },
          ], 
          },
          {
            "dataField": "COMPANY",
            validationRules: [{
              type: 'required',
              message: 'Company is required',
            }], 
          },
          {
            "dataField": "COMPANYADDRESS",
            validationRules: [{
              type: 'required',
              message: 'Company address is required',
            }], 
          },
          {
            "dataField": "CONTACT",
            validationRules: [{
              type: 'required',
              message: 'Contact is required',
            }], 
          },
          {
            "dataField": "CONTACTFAX",
            validationRules: [{
              type: 'required',
              message: 'Contact fax is required',
            }], 
          },
          {
            "dataField": "CONTACTPHONE",
            validationRules: [{
              type: 'required',
              message: 'Contact phone is required',
            }], 
          },
          {
            "dataField": "COUNTY",
            validationRules: [{
              type: 'required',
              message: 'County is required',
            }], 
          },
          {
            "dataField": "DURATION",
            validationRules: [{
              type: 'required',
              message: 'Duration is required',
            }], 
          },
          {
            "dataField": "EMAILADDRESS",
            validationRules: [{
              type: 'required',
              message: 'Duration is required',
            }], 
          },
          {
            "dataField": "EMAIL",
            validationRules: [{
              type: 'required',
              message: 'Email is required',
            }], 
          },
          {
          "dataField": "EXPLOSIVES",
          validationRules: [{
            type: 'required',
            message: 'Response is required',
          }], 
          },
          {
            "dataField": "XLOC",
            validationRules: [{
              type: 'required',
              message: 'XLOC is required',
            }], 
          },
          {
            "dataField": "YLOC",
            validationRules: [{
              type: 'required',
              message: 'YLOC is required',
            }], 
          },
          {
            "dataField": "LOCATIONOFWORK",
            validationRules: [{
              type: 'required',
              message: 'Location is required',
            }], 
          },
          {
            "dataField": "MAPREF",
            validationRules: [{
              type: 'required',
              message: 'MapRef is required',
            }], 
          },
          {
            "dataField": "NEARESTINTERSECTINGSTREET",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "CreatedBy",
            validationRules: [{
              type: 'required',
              message: 'Create by is required',
            }], 
          },
          {
            "dataField": "PRIORITY",
            validationRules: [{
              type: 'required',
              message: 'Priority is required',
            }], 
          },
          {
            "dataField": "ROW",
            validationRules: [{
              type: 'required',
              message: 'Row is required',
            }], 
          },
          {
            "dataField": "SENDTO",
            validationRules: [{
              type: 'required',
              message: 'Send to is required',
            }], 
          },
          {
            "dataField": "SEQUENCENUMBER",
            validationRules: [{
              type: 'required',
              message: 'Sequence no. is required',
            }], 
          },
          {
            "dataField": "STATE",
            validationRules: [{
              type: 'required',
              message: 'State is required',
            }], 
          },
          {
            "dataField": "STREET",
            validationRules: [{
              type: 'required',
              message: 'Street is required',
            }], 
          },
          {
            "dataField": "OC_TICKETNUMBER",
            validationRules: [{
              type: 'required',
              message: 'Ticket no. is required',
            }], 
          },
          {
            "dataField": "TRANSMITDATE",
            validationRules: [{
              type: 'required',
              message: 'Transmit date is required',
            }], 
          },
          {
            "dataField": "TRANSMITOP",
            validationRules: [{
              type: 'required',
              message: 'Transmit to is required',
            }], 
          },
          {
            "dataField": "TRANSMITTIME",
            validationRules: [{
              type: 'required',
              message: 'Transmit time is required',
            }], 
          },
          {
            "dataField": "TUNNELBORE",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "TYPEOFWORK",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "UPDATEOF",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "WORKBEINGDONEFOR",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "DUEDATE",
            validationRules: [{
              type: 'required',
              message: 'Date is required',
            }], 
          },
          {
            "dataField": "DUETIME",
            validationRules: [{
              type: 'required',
              message: 'Time is required',
            }], 
          },
          {
            "dataField": "RECEIVEDDATE",
            validationRules: [{
              type: 'required',
              message: 'Date is required',
            }], 
          },
          {
            "dataField": "RECEIVEDTIME",
            validationRules: [{
              type: 'required',
              message: 'Time is required',
            }], 
          },
          {
            "dataField": "REMARKS",
            validationRules: [{
              type: 'required',
              message: 'Notes are required',
            }], 
          },
          {
            "dataField": "TWP",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "RNG",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "ASR_PARSER",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "PARSER_NAME",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "OCC_TICKET_IDENTIFIER",
            validationRules: [{
              type: 'required',
              message: 'Field is required',
            }], 
          },
          {
            "dataField": "OCC_TICKET_VERSION",
            validationRules: [{
              type: 'required',
              message: 'Version is required',
            }], 
          },
          {
            "dataField": "ZIP",
            validationRules: [{
              type: 'required',
              message: 'Zip is required',
            }], 
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

      //append dev extreme scrollView to outer container
      container.append(scrollView);
    },

    //adding buttons
    toolbarItems: [ {
      widget: "dxButton",
      toolbar:'bottom',
      location: "after",
      options: { 
          text: "Submit", 
          icon:'key',
          type: "success",
          useSubmitBehavior: true,
          onClick:(e)=>{
            //print form data to console for now
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
            //reset form to empty by doing a function callback here
            ShowCreateTicket();
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

  