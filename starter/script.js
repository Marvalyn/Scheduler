//Assition of current date

var today = moment();
$("#currentDay").text(today.format("dddd, Do MMM YYYY"));

//Addition of time blocks from 9-5 in html
//each block has 3 columns for time, content and save button
//add time blocks as text area with class off time-block

//add a save button with class of saveBtn
var textField = $(".input-group");
var saveBtn = $('<button class="saveBtn"><i class="fas fa-save"></i></button>');
// textField.append('<button class="saveBtn"><i class="fas fa-save"></i></button>');
textField.append(saveBtn);
//code below will be useful when coding save  button 
// function handleFormSubmit(event) {
//     event.preventDefault();
  
//     var shoppingItem = $('input[name="shopping-input"]').val();
  
//     if (!shoppingItem) {
//       console.log('No shopping item filled out in form!');
//       return;
//     }
  
//     var shoppingListItemEl = $(
//       '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//     );
//     shoppingListItemEl.text(shoppingItem);
  
//     // add delete button to remove shopping list item
//     shoppingListItemEl.append(
//       '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//     );
  
//     // print to the page
//     shoppingListEl.append(shoppingListItemEl);
  
//     // clear the form input element
//     $('input[name="shopping-input"]').val('');
//   }

//add get & set JSON to add info to client side storage so info stays when page is refreshed

//add colour coding for time block

