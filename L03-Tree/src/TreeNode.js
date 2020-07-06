var Tree;
(function (Tree) {
    var TreeNode = /** @class */ (function () {
        function TreeNode(_value) {
            this.value = _value;
            this.parent = null;
            this.children = [];
        }
        TreeNode.prototype.appendChild = function (_child) {
            _child.parent = this;
            this.children.push(_child);
        };
        TreeNode.prototype.removeChild = function (_child) {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i] === _child)
                    this.children.splice(i, 1);
            }
        };
        TreeNode.prototype.printTree = function (_depth) {
            if (_depth === void 0) { _depth = 0; }
            var treeAsString = this.value + "\n";
            var depthAsString = "";
            for (var i = 0; i < _depth; i++)
                depthAsString += "*";
            treeAsString = "" + depthAsString + treeAsString;
            _depth++;
            for (var i = 0; i < this.children.length; i++) {
                treeAsString += "" + this.children[i].printTree(_depth);
            }
            return treeAsString;
        };
        return TreeNode;
    }());
    Tree.TreeNode = TreeNode;
})(Tree || (Tree = {}));
