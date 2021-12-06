// model

const model = {
    points: 0,
    pointsPerClick: 1,
    smileyIndex: 0,
    juksing: "",
    leaderBoard: [],
    name: "",
}


// controller

function submitScore() {
    model.leaderBoard.push({
        points: model.points,
        name: model.name,
        juksing: model.juksing,
        pointsPerClick: model.pointsPerClick,
    })
    updateView();
}

function doClick() {
    model.points += model.pointsPerClick;
    model.smileyIndex = getNextSmileyIndex(model.smileyIndex);
    updateView();
}

function buyUpgrade(upgradeCost) {
    if (model.points < upgradeCost) return;
    model.points -= upgradeCost;
    model.pointsPerClick++;
    updateView();
}
function buyHundred(upgradeCost) {
    if (model.points < upgradeCost) return;
    model.points -= upgradeCost;
    model.pointsPerClick += 10;
    updateView();
}

function cheat() {
    model.pointsPerClick *= 10;
    model.points *= 10;
    model.juksing = 1;
    updateView();
}
function reset() {
    model.pointsPerClick = 1;
    model.points = 0;
    model.juksing = "";
    updateView();
}
function scoreOutput() {
    let output = "";
    for (let i = 0; i < model.leaderBoard.length; i++) {
        output += `<tr>` +
        `<td>${model.leaderBoard[i].name}</td>` +
        `<td style='text-align: right;'>${model.leaderBoard[i].points}</td>` +
        `<td style='text-align: right;'>${model.leaderBoard[i].pointsPerClick}</td>` +
        `<td style='text-align: right;'>${(model.leaderBoard[i].juksing==0)?'Nei': 'Juksepave!'}</td>` +
        `</tr>`
        
    } return output;
}

// hjelpefunksjoner

function getSmiley(aSmileyIndex) {
    if (model.juksing != "") return '😤';
    if (aSmileyIndex == 0) return '😀';
    if (aSmileyIndex == 1) return '😁';
    return '';
}

function getNextSmileyIndex(aSmileyIndex) {
    const maxSmileyIndex = 1;
    aSmileyIndex++;
    if (aSmileyIndex > maxSmileyIndex) {
        aSmileyIndex = 0;
    }
    return aSmileyIndex;
}