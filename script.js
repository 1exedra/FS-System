function calculateScore() {
    const fortitude = parseFloat(document.getElementById('fortitude').value) || 0;
    const vitality = parseFloat(document.getElementById('vitality').value) || 0;
    const chronometry = parseFloat(document.getElementById('chronometry').value) || 0;
    const accuracy = parseFloat(document.getElementById('accuracy').value) || 0;
    
    const questElements = document.querySelectorAll('input[name="quest"]:checked');
    let questScore = 0;
    questElements.forEach(element => {
        questScore += parseFloat(element.value);
    });

    const fortitudeScore = fortitude * 0.30;
    const vitalityScore = vitality * 0.15;
    const chronometryScore = chronometry * 0.10;
    const accuracyScore = accuracy * 0.20;
    const totalQuestScore = questScore; 

    const totalScore = fortitudeScore + vitalityScore + chronometryScore + accuracyScore + totalQuestScore;

    let tier;
    if (totalScore >= 90) {
        tier = 'S tier';
    } else if (totalScore >= 80) {
        tier = 'A tier';
    } else if (totalScore >= 70) {
        tier = 'B tier';
    } else if (totalScore >= 60) {
        tier = 'C tier';
    } else if (totalScore >= 50) {
        tier = 'E tier';
    } else {
        tier = 'F tier';
    }

    document.getElementById('result').textContent = `Total Score: ${totalScore.toFixed(2)}%`;
    document.getElementById('tier').textContent = `Tier: ${tier}`;
}
