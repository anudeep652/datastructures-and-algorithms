class myNode {
  elem;
  next;
  constructor(elem, next = null) {
    this.elem = elem;
    this.next = null;
  }
}

class linkedList {
  head = null;
  length = 0;

  //append an element to last
  append(elem) {
    let curr;

    let node = new myNode(elem);

    //if the linked list is empty i.e head is null, our new node is the head
    if (this.head === null) {
      this.head = node;
    }
    // if the linked list has atleast one element iterate till the last node and append to it
    else {
      curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }

  //removing an element at particular index
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("please enter a valid index");
    }
    let current = this.head;
    let prev;

    if (index === 0) {
      this.head = current?.next;
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current?.next;
        // eg 0 1 2 3 4 is our linked list
        // 2 -> given index
        // 0 -> head

        // loop iteration
        // i = 0 -> prev = current i.e 0 ; current = current.next i.e 1
        // i = 1 -> prev = current i.e 1 ; current = current.next i.e 2
      }
      //  prev -> 1
      // current -> 2
      prev.next = current?.next;
      //  prev.next = current.next i.e 3
      //   final linked list is 0 1 3 4
      this.length--;
    }
  }
  insertAt(elem, index) {
    let node = new myNode(elem);
    let current = this.head;
    let prev;

    //validating given index
    if (index < 0 || index >= this.length) {
      throw new Error("please enter a valid index");
    }

    //if index is 0 set our new node to head and old node to new node's next
    if (index === 0) {
      node.next = current;
      this.head = node;
    }
    //looping until we find our desired index position
    else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current?.next;
        // eg 0 1 2 3 4 is our linked list and 7 is our elem
        // 2 -> given index
        // 0 -> head

        // loop iteration
        // i = 0 -> prev = current i.e 0 ; current = current.next i.e 1
        // i = 1 -> prev = current i.e 1 ; current = current.next i.e 2
      }
      // node.next = 2
      //  prev.next  = node
      node.next = current;
      prev.next = node;

      //   our linked list is 0 1 7 2 3 4
    }
    this.length++;
  }
}

const ll = new linkedList();
ll.append(0);
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);

ll.removeAt(2); // 0 1 3 4 length -> 4
ll.insertAt(2, 2); // 0 1 2 3 4 length -> 5
console.log(ll);
