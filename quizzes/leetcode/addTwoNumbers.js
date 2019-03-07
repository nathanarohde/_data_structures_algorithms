// 1563 test cases
// Runtime 164 ms - fastest 112ms
// Time bottom 12%
// Memory 38 MB v 40.5 MB
// Bottom 7%

// Fasts solution appear to use arrays and fewer while loops.

var addTwoNumbers = function(l1, l2) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let carry = 0;

    function addLists( v1, v2 ){
        let sum = 0;
        if ( (v1 + v2 + carry) < 10 ){
            sum = v1 + v2 + carry;
            carry = 0;
        } else {
            sum = (v1 + v2 + carry) % 10;
            carry = 1;
        }

        return sum;
    };

    let node = new ListNode(addLists(l1.val, l2.val));
    let currentNode = node;

    while ( l1.next && l2.next ) {
        currentNode.next = new ListNode(addLists(l1.next.val, l2.next.val));
        currentNode = currentNode.next;
        l1 = l1.next;
        l2 = l2.next;
    };

    while ( l1.next ){
        let val = carry + l1.next.val;
        if( val < 10 ){
            currentNode.next = new ListNode(val);
            currentNode = currentNode.next;
            carry = 0;
        } else {
            //At this point 9 is the only scenario to worry about;
            currentNode.next = new ListNode(0);
            currentNode = currentNode.next;
            carry = 1;
        }
        l1 = l1.next;
    }

    while ( l2.next ){
        let val = carry + l2.next.val;
        if( val < 10 ){
            currentNode.next = new ListNode(val);
            currentNode = currentNode.next;
            carry = 0;
        } else {
            //At this point 9 is the only scenario to worry about;
            currentNode.next = new ListNode(0);
            currentNode = currentNode.next;
            carry = 1;
        }
        l2 = l2.next;
    }

    if (carry === 1){
        currentNode.next = new ListNode(1);
    }

    return node;
};

//Runtime: 128ms faster 68.33%
//Memory 38.7MB less than 28.74%
var addTwoNumbers = function(l1, l2) {
  // because objects and functions are the same thing this recursive creates a function rather than building an object.
  // instead of using a seperate variable to carry pass the leftover with the next class
  const sum = (list1, list2, value = 0) => {
    //If no content stop recursion
    if (!list1 && !list2 && value == 0) return null;
    //If l1/l2 present add
    if (list1) value += list1.val;
    if (list2) value += list2.val;
    //Creates next variable here: If list1 proceed to list.next otherwise pass same value?  Why doesn't this return return an undefined error?
    //ParseInt rounds value to whole number either 0 or 1.
    const next = sum(list1 ? list1.next: list1, list2 ? list2.next : list2, parseInt(value/10) );
    //Remainder determination made in previous line of code
    // If > 9 modify and pass value, otherwise just pass value
    //pass next
    return {val: value > 9 ? value - 10: value, next};
  };
  return sum(l1, l2);
}
