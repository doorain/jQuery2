$(document).ready(function(){

 setInterval(function updateClock ( )
      {
      var currentTime = new Date ( );
       var currentHours = currentTime.getHours ( );
       var currentMinutes = currentTime.getMinutes ( );
       var currentSeconds = currentTime.getSeconds ( );

       // Pad the minutes and seconds with leading zeros, if required
       currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
       currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

       // Choose either "AM" or "PM" as appropriate
       var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

       // Convert the hours component to 12-hour format if needed
       currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

       // Convert an hours component of "0" to "12"
       currentHours = ( currentHours == 0 ) ? 12 : currentHours;

       // Compose the string for display
       var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;


        $("#clock").html(currentTimeString);
     $("#amPm").html(timeOfDay);

  }, 1000);











 var advanceTask = function(task) {
   var modified = task.innerText.trim()
   for (var i = 0; i < listo.length; i++) {
     if (listo[i].task === modified) {
       if (listo[i].id === 'new') {
         listo[i].id = 'inProgress';
       } else if (listo[i].id === 'inProgress') {
         listo[i].id = 'archived';
       } else {
         listo.splice(i, 1);
       }
       break;
     }
   }
   task.remove();
 };

 $(document).on('click', '#item', function(e) {
     e.preventDefault();
   var task = this;
   advanceTask(task);
   this.id = 'inProgress';
   $('#currentList').append(this.outerHTML);
 });

 $(document).on('click', '#inProgress', function (e) {
   e.preventDefault();
   var task = this;
   task.id = "archived";
   var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
   advanceTask(task);
   $('#archivedList').append(changeIcon);
 });

 $(document).on('click', '#archived', function (e) {
   e.preventDefault();
   var task = this;
   advanceTask(task);
 });



$('#newTaskForm').hide();
 var listo = [];
 var Task = function(task){
   this.task = task;
   this.id = 'new'
 }
 var addTask = function(task) {
     if(task) {
         task = new Task(task);
         listo.push(task);
         $('#newItemInput').val('');

          $('#newList').append(
                         '<a href="#finish" class="" id="item">' +
                         '<li class="list-group-item">' +
                         '<h3>' + task.task + '</h3>' +
                         '<span class="arrow pull-right">' +
                         '<i class="glyphicon glyphicon-arrow-right">' +
                         '</span>' +
                         '</li>' +
                         '</a>'
                     );

     }
      $('#newTaskForm').slideToggle('fast', 'linear');

 };

 $('#saveNewItem').on('click', function (e) {
     e.preventDefault();
     var task = $('#newItemInput').val().trim();
     addTask(task);
 });
 $('#add-todo').on('click', function () {
     $('#newTaskForm').fadeToggle('fast', 'linear');
 });
 //closes form
 $('#cancel').on('click', function (e) {
     e.preventDefault();
     $('#newTaskForm').fadeToggle('fast', 'linear');
 });

})
