/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {

  //? Tags - Tree, BFS
  //! Companies - amazon, apple, bloomberg, facebook, linkedin, microsoft

  //** Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). 

  // tree is passed as parameter using a in-order traversal (left, root, right). most parts of this problems can be solved using a BFS approach.

  // BFS can be implemented using queue or recursion. in this case, we will use a queue. 

  const result: number[][] = [];
  const queue: TreeNode[] = [];
  if (root) queue.push(root);
  while (queue.length) {
    const level: number[] = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }

  return result;

};
// @lc code=end

