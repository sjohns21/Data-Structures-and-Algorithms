const DoublyLinkedList = require("./DoublyLinkedList")

test("push", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")
  expect(list.head.val).toBe("a")
  expect(list.head.next.prev.val).toBe("a")
  expect(list.head.next.val).toBe("b")
  expect(list.tail.val).toBe("c")
  expect(list.length).toBe(3)
})

test("pop", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")
  expect(list.pop().val).toBe("c")
  expect(list.tail.val).toBe("b")
  expect(list.length).toBe(2)
  expect(list.pop().prev).toBe(null)
  expect(list.head.val).toBe("a")
  expect(list.tail.val).toBe("a")
  expect(list.pop().val).toBe("a")
  expect(list.length).toBe(0)
  expect(list.head).toBe(null)
  expect(list.tail).toBe(null)
  expect(list.pop()).toBe(undefined)
})

test("shift", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")

  expect(list.shift().val).toBe("a")
  expect(list.head.val).toBe("b")
  expect(list.length).toBe(2)
  expect(list.shift().next).toBe(null)
  expect(list.head.val).toBe("c")
  expect(list.tail.val).toBe("c")
  expect(list.shift().val).toBe("c")
  expect(list.length).toBe(0)
  expect(list.head).toBe(null)
  expect(list.tail).toBe(null)
  expect(list.shift()).toBe(undefined)
})

test("unshift", () => {
  const list = new DoublyLinkedList()
  expect(list.unshift("c")).toBe(list)
  expect(list.length).toBe(1)
  expect(list.unshift("b")).toBe(list)
  expect(list.head.val).toBe("b")
  expect(list.tail.val).toBe("c")
  list.unshift("a")
  expect(list.head.next.val).toBe("b")
  expect(list.head.next.prev.val).toBe("a")
  expect(list.tail.prev.val).toBe("b")
  expect(list.tail.prev.next.val).toBe("c")
  expect(list.length).toBe(3)
})

test("get", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")

  expect(list.get(-1)).toBe(null)
  expect(list.get(0).val).toBe("a")
  expect(list.get(1).val).toBe("b")
  expect(list.get(2).val).toBe("c")
  expect(list.get(3)).toBe(null)
})

test("set", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")

  expect(list.set(-1, "Z")).toBe(false)
  expect(list.set(0, "A")).toBe(true)
  expect(list.head.val).toBe("A")
  expect(list.set(1, "B")).toBe(true)
  expect(list.get(1).val).toBe("B")
  expect(list.set(2, "C")).toBe(true)
  expect(list.tail.val).toBe("C")
  expect(list.set(3, "Z")).toBe(false)
})

test("insert", () => {
  const list = new DoublyLinkedList()
  expect(list.insert(-1, 'z')).toBe(false)
  expect(list.insert(0, 'a')).toBe(true)
  expect(list.head.val).toBe('a')
  expect(list.insert(1, 'c')).toBe(true)
  expect(list.head.next.val).toBe('c')
  expect(list.insert(1, 'b')).toBe(true)
  expect(list.get(2).val).toBe('c')
  expect(list.get(1).val).toBe('b')
  expect(list.length).toBe(3)
  expect(list.insert(10, 'z')).toBe(false)
})

test("remove", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")

  expect(list.remove(-1)).toBe(undefined)
  const b = list.remove(1)
  expect(b.val).toBe('b')
  expect(b.next).toBe(null)
  expect(b.prev).toBe(null)
  expect(list.length).toBe(2)
  expect(list.remove(1).val).toBe("c")
  expect(list.tail.val).toBe("a")
  expect(list.remove(0).val).toBe("a")
  expect(list.remove(0)).toBe(undefined)
})

test("reverse list of length 4", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")
  list.push("d")

  list.reverse()
  expect(list.get(0).val).toBe("d")
  expect(list.get(1).val).toBe("c")
  expect(list.get(2).val).toBe("b")
  expect(list.get(3).val).toBe("a")
  expect(list.head.val).toBe("d")
  expect(list.tail.val).toBe("a")
})
test("reverse list of length 3", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")
  list.push("c")

  list.reverse()
  expect(list.get(0).val).toBe("c")
  expect(list.get(1).val).toBe("b")
  expect(list.get(2).val).toBe("a")
  expect(list.head.val).toBe("c")
  expect(list.tail.val).toBe("a")
})
test("reverse list of length 2", () => {
  const list = new DoublyLinkedList()
  list.push("a")
  list.push("b")

  list.reverse()
  expect(list.get(0).val).toBe("b")
  expect(list.get(1).val).toBe("a")
  expect(list.head.val).toBe("b")
  expect(list.tail.val).toBe("a")
})
test("reverse list of length 1", () => {
  const list = new DoublyLinkedList()
  list.push("a")

  list.reverse()
  expect(list.get(0).val).toBe("a")
  expect(list.head.val).toBe("a")
  expect(list.tail.val).toBe("a")
})
test("reverse list of length 0", () => {
  const list = new DoublyLinkedList()

  list.reverse()
  expect(list.head).toBe(null)
  expect(list.tail).toBe(null)
})
