/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++
      return this;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return "no values present in list!";
    if (this.length === 1) {
      const returnVal = this.head;
      returnVal.next = null;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal.val;
    };
    if (this.length === 2) {
      const returnVal = this.tail;
      this.head.next = null;
      this.tail = this.head;
      this.length--;
      return returnVal.val;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    const oldTail = this.tail;
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    return oldTail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return "no values present in list!";
    
    let returnVal = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      returnVal.next = null;
      this.length--;
      return returnVal.val;
    }
    if (this.length === 2) {
      returnVal.next = null;
      this.head = this.tail;
      this.length--;
      return returnVal.val;
    }
    this.head = returnVal.next;
    returnVal.next = null;
    this.length--;
    return returnVal.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0) return "no items present in list!";
    if (0 > idx || idx > this.length - 1) return "index out of bounds";
    let count = 0;
    let current = this.head;

    while (current) {
      if (count === idx) return current.val;
      current = current.next;
      count++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length === 0) return "no items present in list!";
    if (0 > idx || idx > this.length - 1) return "index out of bounds";

    let count = 0;
    let current = this.head;
    while (current) {
      if (count === idx) {
        current.val = val;
        return this;
      };
      current = current.next;
      count++;
    };
  };

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length === 0) return this.push(val);
    if (idx > this.length - 1) return this.push(val);

    let current = this.head;
    let previous = null;
    let count = 0;

    while (true) {
      if (count === idx) break;
      previous = current;
      current = current.next;
      count++;
    }
    if (previous === null) return this.unshift(val);

    const node = new Node(val);
    previous.next = node;
    node.next = current;
    this.length++;
    return this;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0) return "no items present in list!";
    if (idx > this.length - 1) return "index out of bounds";

    let current = this.head;
    let previous = null;
    let count = 0;

    while (true) {
      if (count === idx) break;
      previous = current;
      current = current.next;
      count++;
    }
    if (previous === null) return this.shift();

    previous.next = current.next
    current.next = null;
    return current;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  };
};

const LL = new LinkedList([14,15,16,17,19,24]);
console.log(LL.average());
module.exports = LinkedList;
