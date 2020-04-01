const {BinarySearchTree, Node} = require("./BinarySearchTree")

describe("BinarySearchTree", () => {
  test("is a function", () => {
    expect(typeof BinarySearchTree).toBe("function")
  })
  test("can be built", () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(10);
    tree.root.right = new Node(15);
    tree.root.left = new Node(7);
    tree.root.left.right = new Node(9);
    expect(tree.root.left.right.value).toBe(9)
  })
  test("insert", () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(10);
    tree.root.right = new Node(15);
    tree.root.left = new Node(7);
    tree.root.left.right = new Node(9);
    expect(tree.insert(8)).toBe(tree)
    expect(tree.root.left.right.left.value).toBe(8)
  })
  test("find", () => {
    const tree = new BinarySearchTree();
    tree.root = new Node(10);
    tree.root.right = new Node(15);
    tree.root.left = new Node(7);
    tree.root.left.right = new Node(9);
    expect(tree.find(9)).toBe(true)
    expect(tree.find(8)).toBe(false)
  })
})
