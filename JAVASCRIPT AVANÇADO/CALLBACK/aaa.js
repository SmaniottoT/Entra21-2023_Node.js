function myCallback(parameter) {
    console.log("Callback executed with parameter: " + parameter);
  }

  function performTask(data, callback) {
    console.log("Performing a task with data: " + data);
    // After completing the task, call the callback function
    callback('texto do myCallback');
  }

  performTask("texto do performTask", myCallback);
