class Node{
    constructor(data){
      this.data = data
      this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        // a Linked List starts with a "head" property intialized as null
        this.head = head
    }
    appendNode(node){
      // creates a new node with the given data and adds it to back of the list

    let node1 = new Node(1)
    let node2 = new Node(2)

    this.head = node1
    node1.next = node2
    // this.head = node2
    return this.head


    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        // let node1 = new Node(data)
        //
        // node1.protoype.insert = function(data, index){
        // if (index === 0) {
        //   this.head = new Node(2, this.head)
        //   return
        // }}

        let node4 = new Node(data)
        this.head = node4
        return this.head


    }
    pop(){
        // removes the last node from the list and returns it
        // list.pop()
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

// let list1 = new LinkedList()
// list1.appendNode(list1.head = "A")
// list1.appendNode(data: "B")
// console.log("list", list1)
//
// let node1 = new Node(2)
// let node2 = new Node(5)
// let node3 = new Node(3)
// node1.next = node2
// node2.next = node3
//
// let list = new LinkedList(node2)
// list.appendNode(node1)
//
// console.log("LIST", list)
//
// // console.log(list.head.next.data)


module.exports = {
    Node,
    LinkedList
}
