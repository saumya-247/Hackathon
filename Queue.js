var counter = -1;
var counter_arr = 0;
var enqueueCount = 0;
var dequeueCount = 0;
var emptycount = 0;

// Getting document wrapper
var docWrapper = document.querySelector('.wrapper');

// Getting all modals
var enqueueModal = document.getElementById("enqueuemodal");
var dequeueModal = document.getElementById("dequeuemodal");
var emptyModal = document.getElementById("emptymodal");

// Getting close buttons for all Modals
var closeEnqueue = document.getElementsByClassName("close-enqueue")[0];
var closeDequeue = document.getElementsByClassName("close-dequeue")[0];
var closeEmpty = document.getElementsByClassName("close-empty")[0];

var enqueue_algo = `ENQUEUE(QUEUE, REAR, MAX, ITEM) <br/><br/>

Algorithm to enqueue an item into the queue.
<br/><br/>
1) IF REAR = MAX   then<br/>
Print "Queue is full";<br/>
Exit;<br/>
2) Otherwise<br/>
REAR: = REAR + 1;        /*increment REAR*/<br/>
QUEUE (REAR):= ITEM;<br/>
3) End of IF<br/>
4) Exit`;

var dequeue_algo = `
DEQUEUE(QUEUE, FRONT, REAR, ITEM)<br/><br/>

Algorithm to dequeue an element from the queue.<br/><br/>

1) IF FRONT = REAR then<br/>
    Print "Queue is empty";<br/>
    Exit;<br/>
2) Otherwise<br/>
    ITEM: = QUEUE (FRONT);<br/>
    FRONT: = FRONT + 1;<br/>
3) End of IF<br/>
4) Exit<br/>
`;

var isempty_algo = `
IS_EMPTY(QUEUE, FRONT, REAR, STATUS) <br/>
<br/>
    Algorithm to check if the queue is empty or not.<br/>
    STATUS contains the result status.<br/>
    <br/>
            
    1) IF FRONT = REAR then<br/>
        STATUS:=true;<br/>
    2) Otherwise<br/>
        STATUS:=false;<br/>
    3)  End of IF<br/>
    4)  Exit<br/>
`;

var arr = [];
function enqueue() {
  document.getElementById("current_algo").innerHTML = enqueue_algo;
  if (document.getElementById("enqueue-item").value) {

    // Triggering popup question
    if (enqueueCount == 1) {
      // Add any specific logic for the first enqueue
    }

    if (counter == 8) {
      alert("Overflow : Queue is full");
    } else {
      counter++;
      enqueueCount++;
      setTimeout(function () { callEnqueueBox(); }, 2000);
      document.getElementById("pointer").innerHTML = counter;

      arr.push(document.getElementById("enqueue-item").value);
      $("#queue").append('<div id="r' + counter + 1 + '" class="queue_box">  ' + document.getElementById("enqueue-item").value +
        " </div>"
      );
      document.getElementById("enqueued").innerHTML = document.getElementById(
        "enqueue-item"
      ).value;
      document.getElementById("front_element").innerHTML = arr[0];
      $("#array").append(
        '<div id="a' +
        counter +
        '" class="array_box">  ' +
        document.getElementById("enqueue-item").value +
        " </div>"
      );
      document.getElementById("enqueue-item").value = "";
      document.getElementById("dequeued").innerHTML = "";
    }
  } else {
    alert("Input cannot be blank ");
  }
}

function dequeue() {
  document.getElementById("current_algo").innerHTML = dequeue_algo;
  if (counter >= 0) {
    if (arr[0] == undefined) {
    } else {
      document.getElementById("dequeued").innerHTML = arr[0];
      document.getElementById("enqueued").innerHTML = "";
      arr.shift();
    }
    $("#r" + (counter_arr + 1)).remove();
    $("#a" + counter_arr).remove();

    counter--;
    counter_arr++;
    dequeueCount++;
    setTimeout(function () { callDequeueBox(); }, 2000);
    if (counter >= 0) {
      document.getElementById("front_element").innerHTML = arr[0];
    } else {
      document.getElementById("front_element").innerHTML = "";
    }

    document.getElementById("pointer").innerHTML = counter;
  } else {
    counter = -1;
    alert("Underflow : Element cannot be dequeued");
    document.getElementById("front_element").innerHTML = "";
    document.getElementById("pointer").innerHTML = counter;
  }
}

function ispeak() {
  if (arr[0] != undefined)
    alert("Element at Front is : " + arr[0]);
  else
    alert("Queue is empty.");
}

function isempty() {
  // Enabling the popup
  emptycount++;
  setTimeout(function () { callEmptyBox(); }, 6000);
  document.getElementById("current_algo").innerHTML = isempty_algo;
  if (counter < 0) {
    alert("Yes, the queue is empty! You can ENQUEUE elements into it.");
  } else {
    alert("No, the queue is not empty. It contains items.");
  }
}

// Rest of the code (modal handling, drag-and-drop, etc.) remains the same.