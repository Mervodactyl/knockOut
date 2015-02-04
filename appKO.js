

function viewModel() {
  var self = this; // this refers to VM.dayofweek, this is a single function
  self.dayOfWeek = ko.observable('Friday');
  self.activity = ko.observable('working like the dog you are');

  self.day = ko.observable('24');
  self.month = ko.observable('02');
  self.year = ko.observable('2012');

  self.fullDate = ko.computed(function() {
   return self.day() + "/" + self.month() + "/" + self.year();
  });

  self.daysOfWeek = ko.observableArray([
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ]);
  alert("The week has " + self.daysOfWeek().length + " days");

};

ko.applyBindings(new viewModel());
