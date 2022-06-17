function ShowCreateTicket() {
  if (typeof (_CreateTicketPopup) !== "undefined") {
    _CreateTicketPopup.show();
    return;
  }

  //No html, the following is appended to the body of the ui

  _CreateTicketPopup = $('<div>').appendTo('body')
   .dxPopup({
      title: 'Create Ticket',
      visible: true,
      width: 1500,
      height: 900,
      
//not working
      function() {
        scrollViewContainer.dxScrollView({
            useNative: false,
            showScrollbar: 'always' 
        });
    },
      contentTemplate: (container) => {
         _CreateTicketForm = $('<div>').appendTo(container)
          .dxForm({ 
           formData: {},
           items: [
              {
                "dataField": "ADDITIONALMEMBERS"
              },
              {
                "dataField": "ADDRESS"
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
          
          .dxForm('instance')
         }
       })
         /**/
      toolbarItems: [ {
      widget: "dxButton",
      toolbar:'bottom',
      
      location: "after",
      options: { 
          text: "Submit", 
          icon:'key',
          type: "success",
          onClick:(e)=>{ 
            attemptLogin()
            .then(()=>{
              document.location.href = 'index.html';
            })
            .catch((err)=>{
              console.log(err);
              DevExpress.ui.notify('invalid login attempt. please try again.','error',3000);
            })
           }
         },
      }]
    .dxPopup('instance')
}


$(() => {
ShowCreateTicket();
})
