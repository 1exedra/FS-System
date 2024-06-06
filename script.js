function calculateScore() {
    const fortitude = parseFloat(document.getElementById('fortitude').value) || 0;
    const vitality = parseFloat(document.getElementById('vitality').value) || 0;
    const chronometry = parseFloat(document.getElementById('chronometry').value) || 0;
    const efficiency = parseFloat(document.getElementById('efficiency').value) || 0;

    const questElements = document.querySelectorAll('input[name="quest"]:checked');
    let questScore = 0;
    questElements.forEach(element => {
        questScore += parseFloat(element.value);
    });

    const fortitudeScore = fortitude * 0.30;
    const vitalityScore = vitality * 0.15;
    const chronometryScore = chronometry * 0.10;
    const efficiencyScore = efficiency * 0.20;
    const totalQuestScore = questScore; 

    const totalScore = fortitudeScore + vitalityScore + chronometryScore + efficiencyScore + totalQuestScore;

    let tier;
    if (totalScore >= 90) {
        tier = 'S TIER';
    } else if (totalScore >= 80) {
        tier = 'A TIER';
    } else if (totalScore >= 70) {
        tier = 'B TIER';
    } else if (totalScore >= 60) {
        tier = 'C TIER';
    } else if (totalScore >= 50) {
        tier = 'E TIER';
    } else {
        tier = 'F TIER';
    }

    document.getElementById('result').textContent = `${totalScore.toFixed(2)}%`;
    document.getElementById('tier').textContent = `${tier}`;
}
