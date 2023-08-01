const tree = {
    a: 'im a string "a"',
    b: {
      b1: 'im a string "b1"',
      b2: 123,
      b3: {
        b31: 'im a string "b31"',
        b32: 123
      }
    },
    c: {
      c1: 'im a string "c1"',
      c2: 123,
      c3: {
        c31: 'im a string "b31"',
        c32: 123
      }
    }
};

/*
  implement - treeTraversal
  
  Print every primitive node and contents:
  
  expected output:
    a: im a string "a"
    b1: im a string "b1"
    b2: 123
    b31: im a string "b31"
    
  Depth first or breadth first 
*/


function test() {
  treeTraversal(tree);
}
