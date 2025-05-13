// src/modules/linkedlist/LinkedList.js
import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;
    if (!current) return null;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.headNode;
    let count = 0;
    while (current) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      const popped = this.headNode;
      this.headNode = null;
      return popped;
    }

    let current = this.headNode;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }

    const popped = current.nextNode;
    current.nextNode = null;
    return popped;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.headNode;
    let str = '';
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return str + 'null';
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      console.error('Índice fuera de rango');
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex++;
    }

    newNode.nextNode = current;
    previous.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error('Índice fuera de rango');
      return;
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let current = this.headNode;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex++;
    }

    previous.nextNode = current.nextNode;
  }
}
