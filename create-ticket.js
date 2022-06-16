cap = {
  parent: null,
  container: null,
  createTicketGrid: null,
  createTicketGridData: []
  //static options for the gridview this way if you open it up again, you dont get old variables. 

}

//now make your method and event properties within your namespace
cap.methods = {
  pageLoad: async Parent => {
    try {
      //parent variable is what control we shall use as our wrapper for our container
      cap.parent = $(Parent)
      //define our container and add it to the parent
      cap.container = $('<div>').appendTo(cap.parent)
      //load employee grid
      await cap.methods.showCreateTicketGridView();
      return;
    } catch (err) {
      cap.events.onError(err)
      
    }
  },
  showCreateTicketGridView: async () => {
    try {
      await cap.methods.hideContainer();

      //remove old if already exists
      if (cap.createTicketGrid !== null) {
        cap.createTicketGrid.dispose();
        cap.createTicketGrid.element().remove();
      }
      cap.methods.emptyContainer();
       //render a new gridview and assign the instance to the variable
      cap.createTicketGrid =
        $('<div>')

          .appendTo(cap.container)
          .dxDataGrid(
        
            {
              grouping: {
                contextMenuEnabled: true
              },
              groupPanel: {
                visible: true,
                allowColumnDragging: true,
              },
              searchPanel: {
                visible: true,
                width: 240,
                placeholder: "Search"
              },
              export: {
                enabled: true
              },
             
           
                columnHidingEnabled: true,
                editing: {
                /*editRowKey:'inx',*/
                allowExporting: false,
                allowAdding: true,
                mode: 'popup',
                allowUpdating: true,
                export: true,
                allowDeleting: true,
                useIcons: true,
                allowColumnResizing: true,
                showBorders: true,
                showDropDownButton: true,
                filterRow: {
                  visible: true
                },
                
                function() {
                  $("#emailButton").dxButton({
                    icon: "email",
                    text: "Contact",
                    onClick: function () {
                      "parent.location='mailto:vmcguire@unitedlocating.com'"
                    },
                  });
                },
              },
             
              columnResizingMode: 'nextColumn',
              columnChooser: {
                enabled: true,
              },
              columnMinWidth: 50,
              columnAutoWidth: true,
              showBorders: true,
              /*keyExpr:'inx',*/
              scrolling: {
                enabled: false
              },
              pager: {
                visible: true,
                allowedPageSizes: [5, 20, 50, 100, 'all'],
                showPageSizeSelector: true,
                showInfo: true,
                showNavigationButtons: true,
               
              },
           
              dataSource: $('exampleTicket.json'),
                

                columns: [
                
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
                },


                
              ]
            },
          
          ).dxDataGrid('instance')
      await cap.methods.showContainer();
      return;
    }
    catch (err) {
      cap.events.onError(err)
    }
  },

  //clear our container so we can do something else
  hideContainer: () => {
    return new Promise((resolve, reject) => {
      try {
        cap.container.animate({ opacity: 0 }, 800, () => {
          resolve()
        })
      } catch (err) {
        cap.events.onError(err)
        reject(err)
      }
    })
  },

  //clear all contents in our container
  emptyContainer: () => {
    try {
      cap.container.empty()
    } catch (err) {
      cap.events.onError(err)
      reject(err)
    }
  },
  //fade container back in
  showContainer: () => {
    return new Promise((resolve, reject) => {
      try {
        cap.container.animate({ opacity: 1 }, 800, () => {
          resolve()
        })
      } catch (err) {
        cap.events.onError(err)
        reject(err)
      }
    })
  },
  //inform the user of general information
  showMessage: message => {
    DevExpress.ui.notify(message, 'info', 3000)
  },
  
  
  //post something to the api
  post: (endpoint, data) => {
    return new Promise((resolve, reject) => {
      try {
        var settings = {
         
          "method": "POST",
          "data": data,
        };
       
        $.ajax(settings).done(function (response) {
          resolve('success');
        }).fail((err) => reject(err))

      } catch (err) {
        cap.events.onError(err);
        reject(err);
      }
    })
   
  },
  
}
 
cap.events = {


  //all errors will call this event.
  onError: err => {
    try {
      DevExpress.ui.notify(err.message, 'error', 2000)
      console.log(err);
    } catch (err) {
      console.log(err)
    }
  },
  //all success messages will call this event. if no msg, it will not show anything to the user
  onSuccess: (msg = null) => {
    if (msg === null) {
      console.log('success - hidden from user')
      return
    }
    DevExpress.ui.notify(msg, 'success', 3000)
    console.log(msg + '  success - shown to user')
  }
}

//to detect when the webpage has completely loaded, we use jquery load event like so:
$(() => {
  try {
    //html page has finished loading, so add our content and kick off our app.
    let parent = 'body';
    cap.methods.pageLoad(parent);
  } catch (err) {
    cap.events.onError(err)
  }
})



