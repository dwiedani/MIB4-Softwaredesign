namespace Tree {
    export class Tree<T>{
        public createNode(_value: T): TreeNode<T> {
            return new TreeNode<T>(_value);
        }
    }
}