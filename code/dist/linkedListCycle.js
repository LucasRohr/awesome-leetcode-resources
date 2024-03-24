'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin
})

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''))

  main()
})

function readLine() {
  return inputString[currentLine++]
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData
    this.next = null
  }
}

const SinglyLinkedList = class {
  constructor() {
    this.head = null
    this.tail = null
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData)

    if (this.head == null) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
  }
}

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data))

    node = node.next

    if (node != null) {
      ws.write(sep)
    }
  }
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
var input = ''
process.stdin.on('data', function (chunk) {
  input += chunk
})
process.stdin.on('end', function () {
  // now we can read/parse input
})

function hasCycle(listHead) {
  const headCopy = listHead
  let hasCycle = 0

  while (listHead.next) {
    if (listHead.data == headCopy.data) {
      hasCycle = 1
      return
    }

    const nextCopy = listHead.next
    listHead = nextCopy
  }

  return hasCycle
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const tests = parseInt(readLine(), 10)

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const index = parseInt(readLine(), 10)

    const llistCount = parseInt(readLine(), 10)

    let llist = new SinglyLinkedList()

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10)
      llist.insertNode(llistItem)
    }

    let extra = new SinglyLinkedListNode(-1)
    let temp = llist.head

    for (let i = 0; i < llistCount; i++) {
      if (i == index) {
        extra = temp
      }

      if (i != llistCount - 1) {
        temp = temp.next
      }
    }

    temp.next = extra

    let result = hasCycle(llist.head)

    ws.write((result ? 1 : 0) + '\n')
  }

  ws.end()
}
