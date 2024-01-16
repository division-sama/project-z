class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
      this.parent = null;
    }
  
    addChild(childNode) {
      childNode.parent = this;
      this.children.push(childNode);
    }
  
    getParent() {
      return this.parent;
    }
  
    getChildren() {
      return this.children;
    }
  
    findNode(value) {
      if (this.value === value) {
        return this;
      }
  
      for (const child of this.children) {
        const found = child.findNode(value);
        if (found) {
          return found;
        }
      }
  
      return null;
    }

    printTree(depth = 0) {
        const indent = "  ".repeat(depth);
        console.log(indent + this.value);
    
        for (const child of this.children) {
          child.printTree(depth + 1);
        }
    }

    renderTreeAsHTML(depth = 0) {
      const indent = "&nbsp;&nbsp;".repeat(depth);
      const nodeElement = document.createElement("div");
      nodeElement.innerHTML = `${indent}${this.value}`;
      
      for (const child of this.children) {
        const childElement = child.renderTreeAsHTML(depth + 1);
        nodeElement.appendChild(childElement);
      }
      
      return nodeElement;
    }

    toJSON() {
        const childrenJSON = this.children.map(child => child.toJSON());
        return {
          value: this.value,
          children: childrenJSON,
        };
    }
}

const root = new TreeNode('root');

let men = new TreeNode('Men');

let Bottom = new TreeNode('Bottom');

let women = new TreeNode('Women');

root.addChild(men);
root.addChild(women);

women.addChild(Bottom);
men.addChild(Bottom);

root.printTree();