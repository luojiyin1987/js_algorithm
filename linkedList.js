class Node{
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }

    findByValue(item) {
        let currentNode = this.head.next;
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next;
        }
        console.log(currentNode);
        return currentNode === null ? -1 : currentNode
    }

    findByIndex(index){
        let currentNode = this.head.next;
        let pos = 0;
        while(currentNode !== null && pos !== index){
            currentNode = currentNode.next;
            pos++;
        }
        console.log(currentNode);
        return currentNode === null ? -1 : currentNode;
    }

    append(newElement) {
        const newNode = new Node(newElement);
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }

    insert(newElement, element) {
        const currentNode = this.findByValue(element);
        if (currentNode === -1) {
            console.log("not find");
            return;
        }
        const newNode = new Node(newElement);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    findPrev(item) {
        let currentNode = this.head;
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        if (currentNode.next === null) {
            return -1;
        }
        return currentNode;
    }

    remove(item) {
        const prevNode = this.findPrev(item);
        if (prevNode === -1) {
            console.log('no finded');
            return;
        }
        prevNode.next = prevNode.next.next
    }

    display() {
        let currentNode = this.head.next;
        while (currentNode !== null) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }
}

const  LList = new  LinkedList();
LList.append('chen');
LList.append('curry');
LList.append('sang');
LList.append('zhao');
console.log('------insert item----------');
LList.insert('qian', 'chen');
LList.insert('zhou', 'zhao');
LList.display();

console.log('-------remove item--------------');
LList.remove('curry');
LList.display();

console.log('----------find by item---------------------');
LList.findByValue('chen');

console.log('-----------find by index------------------------------');
LList.findByIndex(2);

console.log('------------------------------------------');
LList.insert('head', 'sang');
LList.display();
LList.findPrev('head');
LList.remove('head');
LList.display();


