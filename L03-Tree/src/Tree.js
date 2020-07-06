var Tree;
(function (Tree_1) {
    var Tree = /** @class */ (function () {
        function Tree() {
        }
        Tree.prototype.createNode = function (_value) {
            return new Tree_1.TreeNode(_value);
        };
        return Tree;
    }());
    Tree_1.Tree = Tree;
})(Tree || (Tree = {}));
