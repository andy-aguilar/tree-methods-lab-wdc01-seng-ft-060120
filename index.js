function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(currentNode, newNode){
    let there = false
    if(newNode.data === currentNode.data){
        return true
    }
    else if(newNode.data < currentNode.data){
        if(!currentNode.left){
            currentNode.left = newNode
            return false
        }
        there = findOrAdd(currentNode.left, newNode)
    }
    else{
        if(!currentNode.right){
            currentNode.right = newNode
            return false
        }
        there = findOrAdd(currentNode.right, newNode)
    }
    return there
}

function max(currentNode){
    let maxNode
    if(!currentNode.right){
        maxNode=currentNode
        return maxNode
    }
    maxNode = max(currentNode.right)
    return maxNode
}

function min(currentNode){
    let minNode
    if(!currentNode.left){
        minNode = currentNode
        return minNode
    }
    minNode = min(currentNode.left)
    return minNode
}