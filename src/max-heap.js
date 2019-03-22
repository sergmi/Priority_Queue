const Node = require('./node');


class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		
	}

	detachRoot() {
		let value=this.root;
		this.root=null;
		return value;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if(!this.root){return true;}
		else{return false;}
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
					if(!this.root){
						this.root=node;
						this.parentNodes[0]=node;
					}
					else if(!this.root.left){
						this.root.left=node;
						this.parentNodes[1]=node;
					}
					else if(!this.root.right){
						this.root.right=node;
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=node;
					}
					else if(!this.root.left.left){
						this.root.left.left=node;
						this.parentNodes[2]=node;
					}
					else if(!this.root.left.right){
						this.root.left.right=node;
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=this.parentNodes[2];
						this.parentNodes[2]=node;
					}
					else if(!this.root.right.left){
						this.root.right.left=node;
						this.parentNodes[3]=node;
					}
					else if(!this.root.right.right){
						this.root.right.right=node;
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=this.parentNodes[2];
						this.parentNodes[2]=this.parentNodes[3];
						this.parentNodes[3]=node;
					} 
	}

	shiftNodeUp(node) {
					let value, item;
					value = this.root;

					if(value===node){
						item=value;					
					}
					if(value){
						if(value.left===node){							
							value.left.swapWithParent();
							this.root=value.parent;							
						}
						if(value.right===node){							
							value.right.swapWithParent();
							this.root=value.parent;							
						}
					}

				if(value){
					if(value.left){
						if(value.left.left===node){
							value.left.left.swapWithParent();
							item=value.left;						
						}
						if(value.left.right===node){
							value.left.right.swapWithParent();
							item=value.left;
						}
					}
					if(value.right){
						if(value.right.left===node){
							value.right.left.swapWithParent();
							item=value.right;
						}
						if(value.right.right===node){
							value.right.right.swapWithParent();
							item=value.right;
						}
					}
				}
				if(this.root!==node){
					this.shiftNodeUp(item);					
				}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;