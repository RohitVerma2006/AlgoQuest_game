export const libraryTopics = [
  {
    id: 'arrays',
    title: 'Arrays',
    definition: 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together, making it easier to calculate the position of each element by simply adding an offset to a base value.',
    analogy: 'Think of an array like a row of mailboxes or an egg carton. Each slot has a specific number (index), and you can instantly go to mailbox #4 to get what is inside.',
    uses: [
      'Storing sequential data (like a list of high scores)',
      'Implementing other data structures like Stacks and Queues',
      'Lookup tables and matrices in math/graphics'
    ],
    advantages: [
      'Fast, O(1) access time if you know the index',
      'Memory efficient (no extra pointers needed)'
    ],
    disadvantages: [
      'Fixed size in many languages (like C/C++)',
      'Inserting or deleting elements in the middle is slow (O(n)) because you have to shift other elements'
    ],
    visualType: 'array',
    code: {
      javascript: `// Initialize an array\nlet arr = [10, 20, 30, 40, 50];\n\n// Access element at index 2\nconsole.log(arr[2]); // Outputs 30`,
      c: `// Initialize an array\nint arr[5] = {10, 20, 30, 40, 50};\n\n// Access element at index 2\nprintf("%d", arr[2]); // Outputs 30`,
      cpp: `// Initialize a dynamic array (vector)\n#include <vector>\n#include <iostream>\n\nstd::vector<int> arr = {10, 20, 30, 40, 50};\nstd::cout << arr[2]; // Outputs 30`,
      python: `# Initialize a list (array)\narr = [10, 20, 30, 40, 50]\n\n# Access element at index 2\nprint(arr[2]) # Outputs 30`
    }
  },
  {
    id: 'strings',
    title: 'Strings',
    definition: 'A string is traditionally a sequence of characters, either as a literal constant or as some kind of variable. In many languages, strings are implemented as arrays of characters.',
    analogy: 'Imagine a pearl necklace. The necklace is the string, and each individual pearl is a character. You can read the necklace from left to right, pearl by pearl.',
    uses: [
      'Storing text data (names, passwords, documents)',
      'Data serialization (like JSON or XML)',
      'DNA sequence analysis in bioinformatics'
    ],
    advantages: [
      'Easy to read and manipulate text',
      'Rich set of built-in standard library functions in most languages'
    ],
    disadvantages: [
      'Immutable in many languages (like Java, Python, JS), meaning every modification creates a new string in memory',
      'String matching and manipulation can be slow if not optimized'
    ],
    visualType: 'string',
    code: {
      javascript: `let str = "Hello";\nconsole.log(str.charAt(1)); // 'e'\nconsole.log(str.length); // 5`,
      c: `char str[] = "Hello";\nprintf("%c", str[1]); // 'e'\nprintf("%lu", strlen(str)); // 5`,
      cpp: `#include <string>\nstd::string str = "Hello";\nstd::cout << str[1]; // 'e'\nstd::cout << str.length(); // 5`,
      python: `s = "Hello"\nprint(s[1]) # 'e'\nprint(len(s)) # 5`
    }
  },
  {
    id: 'recursion',
    title: 'Recursion',
    definition: 'Recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem. In programming, it occurs when a function calls itself.',
    analogy: 'Think of Russian nesting dolls. You open one doll to find a smaller one inside, and you keep opening them until you reach the smallest, solid doll (the base case). Then you put them all back together.',
    uses: [
      'Tree and Graph traversals (DFS)',
      'Divide and Conquer algorithms (Merge Sort, Quick Sort)',
      'Solving puzzles like Tower of Hanoi or generating permutations'
    ],
    advantages: [
      'Makes code cleaner and easier to write for complex problems',
      'Reduces the need for complex loops and state tracking'
    ],
    disadvantages: [
      'Uses more memory (Call Stack overhead)',
      'Can lead to Stack Overflow if the base case is missing or unreachable',
      'Often slower than iterative solutions due to function call overhead'
    ],
    visualType: 'recursion',
    code: {
      javascript: `function factorial(n) {\n  // Base case\n  if (n <= 1) return 1;\n  // Recursive call\n  return n * factorial(n - 1);\n}`,
      c: `int factorial(int n) {\n  // Base case\n  if (n <= 1) return 1;\n  // Recursive call\n  return n * factorial(n - 1);\n}`,
      cpp: `int factorial(int n) {\n  // Base case\n  if (n <= 1) return 1;\n  // Recursive call\n  return n * factorial(n - 1);\n}`,
      python: `def factorial(n):\n  # Base case\n  if n <= 1:\n    return 1\n  # Recursive call\n  return n * factorial(n - 1)`
    }
  },
  {
    id: 'functions',
    title: 'Functions',
    definition: 'A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.',
    analogy: 'A function is like a vending machine. You give it an input (coins and a selection), it performs a specific process internally, and it gives you an output (a snack).',
    uses: [
      'Breaking down large programs into smaller, manageable pieces',
      'Code reusability (Write Once, Use Anywhere)',
      'Information hiding and abstraction'
    ],
    advantages: [
      'Avoids code duplication (DRY principle)',
      'Improves readability and maintainability',
      'Easier to test and debug isolated blocks of code'
    ],
    disadvantages: [
      'Slight performance overhead due to context switching and stack frame allocation (though modern compilers optimize this)'
    ],
    visualType: 'function',
    code: {
      javascript: `function add(a, b) {\n  return a + b;\n}\n\nlet result = add(5, 3);`,
      c: `int add(int a, int b) {\n  return a + b;\n}\n\nint result = add(5, 3);`,
      cpp: `int add(int a, int b) {\n  return a + b;\n}\n\nint result = add(5, 3);`,
      python: `def add(a, b):\n  return a + b\n\nresult = add(5, 3)`
    }
  },
  {
    id: 'linkedlist',
    title: 'Linked List',
    definition: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element (node) contains data and a reference (link/pointer) to the next node in the sequence.',
    analogy: 'Think of a treasure hunt. You find the first clue, which contains some information (data) and tells you exactly where to find the next clue (pointer). You follow them one by one until there are no more clues.',
    uses: [
      'Implementing Stacks and Queues',
      'Dynamic memory allocation',
      'Navigation systems (Next/Previous buttons in browsers using Doubly Linked Lists)'
    ],
    advantages: [
      'Dynamic size (can grow and shrink easily)',
      'Fast insertions and deletions (O(1)) if you have the pointer to the node'
    ],
    disadvantages: [
      'No random access (cannot do arr[3], must traverse from the start)',
      'Extra memory required to store pointers'
    ],
    visualType: 'linkedlist',
    code: {
      javascript: `class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\nlet head = new Node(1);\nhead.next = new Node(2);`,
      c: `struct Node {\n  int data;\n  struct Node* next;\n};\nstruct Node* head = malloc(sizeof(struct Node));\nhead->data = 1;\nhead->next = NULL;`,
      cpp: `struct Node {\n  int data;\n  Node* next;\n  Node(int d) : data(d), next(nullptr) {}\n};\nNode* head = new Node(1);\nhead->next = new Node(2);`,
      python: `class Node:\n  def __init__(self, data):\n    self.data = data\n    self.next = None\n\nhead = Node(1)\nhead.next = Node(2)`
    }
  },
  {
    id: 'stack',
    title: 'Stack',
    definition: 'A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. The last element added to the stack will be the first one to be removed.',
    analogy: 'Imagine a stack of plates at a buffet. You can only add a new plate to the top, and when you need a plate, you take the one from the top. You cannot easily pull a plate from the bottom.',
    uses: [
      'Undo/Redo features in text editors',
      'Browser history (Back button)',
      'Call Stack in programming languages (managing function calls)',
      'Expression evaluation and syntax parsing'
    ],
    advantages: [
      'Very fast O(1) operations for adding (push) and removing (pop)',
      'Easy to implement using arrays or linked lists'
    ],
    disadvantages: [
      'Lack of random access (can only access the top element)',
      'Can lead to Stack Overflow if it grows beyond memory limits'
    ],
    visualType: 'stack',
    code: {
      javascript: `let stack = [];\nstack.push(1); // Add to top\nstack.push(2);\nlet top = stack.pop(); // Removes and returns 2`,
      c: `// Assuming a pre-defined array 'stack' and 'top' index\nvoid push(int val) { stack[++top] = val; }\nint pop() { return stack[top--]; }`,
      cpp: `#include <stack>\nstd::stack<int> s;\ns.push(1);\ns.push(2);\ns.pop(); // Removes 2`,
      python: `stack = []\nstack.append(1) # Push\nstack.append(2)\ntop = stack.pop() # Removes 2`
    }
  },
  {
    id: 'queue',
    title: 'Queue',
    definition: 'A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. The first element added to the queue will be the first one to be removed.',
    analogy: 'Think of a line of people waiting at a ticket counter. The first person to get in line is the first person to get a ticket and leave. New people join at the back of the line.',
    uses: [
      'Task scheduling in operating systems (CPU scheduling)',
      'Handling asynchronous requests (like a web server handling traffic)',
      'Print spooling (managing documents sent to a printer)',
      'Breadth-First Search (BFS) in graphs'
    ],
    advantages: [
      'Maintains the order of data (fairness)',
      'Fast O(1) operations for enqueue (add) and dequeue (remove) when implemented correctly'
    ],
    disadvantages: [
      'Lack of random access',
      'In a simple array-based queue, removing elements from the front can be slow (O(n)) unless implemented as a circular queue'
    ],
    visualType: 'queue',
    code: {
      javascript: `let queue = [];\nqueue.push(1); // Enqueue\nqueue.push(2);\nlet front = queue.shift(); // Dequeue (removes 1)`,
      c: `// Assuming array 'q', 'front', and 'rear' indices\nvoid enqueue(int val) { q[++rear] = val; }\nint dequeue() { return q[front++]; }`,
      cpp: `#include <queue>\nstd::queue<int> q;\nq.push(1);\nq.push(2);\nq.pop(); // Removes 1`,
      python: `from collections import deque\nq = deque()\nq.append(1) # Enqueue\nq.append(2)\nfront = q.popleft() # Dequeue 1`
    }
  },
  {
    id: 'tree',
    title: 'Tree',
    definition: 'A Tree is a hierarchical, non-linear data structure consisting of nodes connected by edges. It has a root node, and every other node is connected by exactly one path from the root.',
    analogy: 'Think of an organizational chart in a company. The CEO is at the top (root). Below them are managers, and below managers are employees (leaves).',
    uses: [
      'Representing hierarchical data (File systems, DOM in HTML)',
      'Databases and search engines (B-Trees, Binary Search Trees)',
      'Decision making in AI (Decision Trees, Minimax algorithm)'
    ],
    advantages: [
      'Reflects structural relationships in the data',
      'Binary Search Trees allow fast O(log n) search, insertion, and deletion',
      'Flexible size'
    ],
    disadvantages: [
      'Complex to implement and manipulate compared to linear structures',
      'Can become unbalanced (like a linked list), degrading performance to O(n) unless self-balancing trees (AVL, Red-Black) are used'
    ],
    visualType: 'tree',
    code: {
      javascript: `class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\nlet root = new TreeNode(10);`,
      c: `struct Node {\n  int data;\n  struct Node *left, *right;\n};\n// Allocation and assignment omitted for brevity`,
      cpp: `struct Node {\n  int data;\n  Node *left, *right;\n  Node(int d) : data(d), left(nullptr), right(nullptr) {}\n};\nNode* root = new Node(10);`,
      python: `class TreeNode:\n  def __init__(self, val):\n    self.val = val\n    self.left = None\n    self.right = None\n\nroot = TreeNode(10)`
    }
  },
  {
    id: 'graph',
    title: 'Graph',
    definition: 'A Graph is a non-linear data structure consisting of vertices (nodes) and edges (lines connecting the nodes). Graphs can be directed (one-way) or undirected (two-way), and edges can have weights.',
    analogy: 'Think of a map of cities connected by highways. The cities are the vertices, and the highways are the edges. Some highways might be one-way (directed), and they all have different lengths (weights).',
    uses: [
      'Social networks (friends connecting to friends)',
      'Routing algorithms (Google Maps finding the shortest path)',
      'Recommendation engines (users and products)',
      'Network topology'
    ],
    advantages: [
      'Can model complex, real-world relationships perfectly',
      'Powerful algorithms exist for finding shortest paths (Dijkstra) and connectivity'
    ],
    disadvantages: [
      'Can be very memory intensive (especially dense graphs using adjacency matrices)',
      'Algorithms are often complex and computationally expensive (e.g., Traveling Salesperson Problem)'
    ],
    visualType: 'graph',
    code: {
      javascript: `// Adjacency List representation\nconst graph = {\n  'A': ['B', 'C'],\n  'B': ['A', 'D'],\n  'C': ['A'],\n  'D': ['B']\n};`,
      c: `// Adjacency Matrix representation\nint graph[4][4] = {\n  {0, 1, 1, 0}, // A\n  {1, 0, 0, 1}, // B\n  {1, 0, 0, 0}, // C\n  {0, 1, 0, 0}  // D\n};`,
      cpp: `#include <vector>\n#include <map>\nstd::map<char, std::vector<char>> graph;\ngraph['A'] = {'B', 'C'};\ngraph['B'] = {'A', 'D'};`,
      python: `# Adjacency List representation\ngraph = {\n  'A': ['B', 'C'],\n  'B': ['A', 'D'],\n  'C': ['A'],\n  'D': ['B']\n}`
    }
  }
];
