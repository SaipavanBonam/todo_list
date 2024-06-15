$(document).ready(function() {
 
  function addItem() {
    const itemText = $('#itemInput').val();
    if (itemText) {
      const listItem = $('<li></li>').text(itemText);
      const deleteButton = $('<span class="delete">X</span>').click(function() {
        $(this).parent().remove();
      });

      listItem.append(deleteButton);
      listItem.click(function() {
        $(this).toggleClass('completed');
      });

      $('#toDoList').append(listItem);
      $('#itemInput').val('');
    }
  }

  
  $('#addItem').click(addItem);


  $('#itemInput').keypress(function(e) {
    if (e.which == 13) {
      addItem();
    }
  });

 
  $('#toDoList').sortable();
});
