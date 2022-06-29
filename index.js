function superbowlWin(superbowl) {
    let win = superbowl.find(superbowl => superbowl.result === "W")
    return win ? win.year : undefined
}
console.log(superbowlWin)