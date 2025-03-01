var front = -1;
var rear = -1;
var enqueueCount = 0;
var dequeueCount = 0;
var emptyCount = 0;

var docWrapper = document.querySelector('.wrapper');

var enqueueModal = document.getElementById("enqueueModal");
var dequeueModal = document.getElementById("dequeueModal");
var emptyModal = document.getElementById("emptyModal");

var enqueue_algo = `ENQUEUE(QUEUE, REAR, ITEM) <br/><br/>
Algorithm to enqueue an item into queue.<br/><br/>
1) IF REAR = MAX then<br/>
Print "Queue is full";<br/>
Exit;<br/>
2) Otherwise<br/>
REAR: = REAR + 1;        /*increment REAR*/<br/>
QUEUE(REAR):= ITEM;<br/>
3) End of IF<br/>
4) Exit`;

var dequeue_algo = `DEQUEUE(QUEUE, FRONT, ITEM)<br/><br/>
Algorithm to dequeue an element from queue.<br/><br/>
1) IF FRONT = REAR then<br/>
    Print "Queue is empty";<br/>
    Exit;<br/>
2) Otherwise<br/>
    FRONT:= FRONT + 1;<br/>
    ITEM: = QUEUE(FRONT);<br/>
3) End of IF<br/>
4) Exit<br/>`;

var isempty_algo = `IS_EMPTY(QUEUE, FRONT, REAR, STATUS) <br/>
Algorithm to check queue is empty or not.<br/>
STATUS contains the result status.<br/>
1) IF FRONT = REAR then<br/>
    STATUS:=true;<br/>
2) Otherwise<br/>
    STATUS:=false;<br/>
3) End of IF<br/>
4) Exit<br/>`;

var queue = [];
function enqueue() {
    document.getElementById("current_algo").innerHTML = enqueue_algo;
    if (document.getElementById("enqueue-item").value) {
        if (rear == 8) {
            alert("Overflow: Queue full");
        } else {
            if (front == -1) front = 0; // First element
            rear++;
            enqueueCount++;
            queue[rear] = document.getElementById("enqueue-item").value;
            document.getElementById("pointer").innerHTML = rear;
            document.getElementById("pushed").innerHTML = queue[rear];
            document.getElementById("top_element").innerHTML = queue[front];
            document.getElementById("enqueue-item").value = "";
            setTimeout(function () { callEnqueueBox(); }, 2000);
        }
    } else {
        alert("Input cannot be blank");
    }
}

function dequeue() {
    document.getElementById("current_algo").innerHTML = dequeue_algo;
    if (front == -1 || front > rear) {
        alert("Underflow: Queue is empty");
        front = -1;
        rear = -1;
    } else {
        document.getElementById("dequeued").innerHTML = queue[front];
        front++;
        dequeueCount++;
        if (front > rear) {
            front = -1;
            rear = -1; // Reset queue
        }
        document.getElementById("pointer").innerHTML = rear;
        if (front != -1) {
            document.getElementById("top_element").innerHTML = queue[front];
        } else {
            document.getElementById("top_element").innerHTML = "";
        }
    }
}

function isEmpty() {
    emptyCount++;
    document.getElementById("current_algo").innerHTML = isempty_algo;
    if (front == -1 || front > rear) {
        alert("Yes, the queue is empty! You can ENQUEUE elements into it.");
    } else {
        alert("No, the queue is not empty. It contains items.");
    }
}

function peek() {
    if (front != -1 && front <= rear) {
        alert("Element at Front is: " + queue[front]);
    } else {
        alert("Queue is empty.");
    }
}

// Modal handling for enqueue questions
function callEnqueueBox() {
    if (enqueueCount == 3) {
        enqueueModal.style.display = "block";
        docWrapper.classList.add('blur');
        // Add event listeners for options
        document.getElementById('option-a').onclick = function () { this.classList.add('wrong'); };
        document.getElementById('option-b').onclick = function () { this.classList.add('wrong'); };
        document.getElementById('option-c').onclick = function () { this.classList.add('wrong'); };
        document.getElementById('option-d').onclick = function () {
            this.classList.add('correct');
            closeEnqueue.style.visibility = "visible";
            enqueueCount++;
        };
        document.getElementsByClassName("close-enqueue")[0].onclick = function () {
            enqueueModal.style.display = "none";
            docWrapper.classList.remove('blur');
        };
    }
}

// Modal handling for dequeue questions
function callDequeueBox() {
    if (dequeueCount == 3) {
        dequeueModal.style.display = "block";
        docWrapper.classList.add('blur');
        // Add event listeners for options
        document.getElementById('pop-a').onclick = function () { this.classList.add('wrong'); };
        document.getElementById('pop-b').onclick = function () {
            this.classList.add('correct');
            closeDequeue.style.visibility = "visible";
            dequeueCount++;
        };
        document.getElementsByClassName("close-dequeue")[0].onclick = function () {
            dequeueModal.style.display = "none";
            docWrapper.classList.remove('blur');
        };
    }
}

// Modal handling for empty questions
function callEmptyBox() {
    if (emptyCount == 1) {
        emptyModal.style.display = "block";
        docWrapper.classList.add('blur');
        // Add event listeners for options
        document.getElementById('empty-a').onclick = function () { this.classList.add('wrong'); };
        document.getElementById('empty-b').onclick = function () {
            this.classList.add('correct');
            closeEmpty.style.visibility = "visible";
            emptyCount++;
        };
        document.getElementsByClassName("close-empty")[0].onclick = function () {
            emptyModal.style.display = "none";
            docWrapper.classList.remove('blur');
        };
    }
}