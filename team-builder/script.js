let players = JSON.parse(localStorage.getItem("players")) || [];
function addPlayer() {
    let e = document.getElementById("playerName").value,
        t = parseInt(document.getElementById("skillLevel").value);
    e && t >= 1 && t <= 10 && (players.push({ name: e, skill: t }), localStorage.setItem("players", JSON.stringify(players)), updatePlayerList());
}
function updatePlayerList() {
    let e = document.getElementById("playerList");
    (e.innerHTML = ""),
        players.forEach((t, l) => {
            e.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${t.name} - Skill: ${t.skill}
                <button class="btn btn-danger btn-sm" onclick="deletePlayer(${l})">X</button>
            </li>`;
        }),
        localStorage.setItem("players", JSON.stringify(players));
}
function updateSkillValue() {
    document.getElementById("skillValue").textContent = document.getElementById("skillLevel").value;
}
function deletePlayer(e) {
    players.splice(e, 1), updatePlayerList();
}
function balanceTeams() {
    players.sort((e, t) => t.skill - e.skill);
    let e = [],
        t = [],
        l = 0,
        s = 0;
    players.forEach((a) => {
        l <= s ? (e.push(a), (l += a.skill)) : (t.push(a), (s += a.skill));
    }),
        displayTeams(e, t),
        localStorage.setItem("lastTeams", JSON.stringify({ team1: e, team2: t }));
}
function reshuffleTeams() {
    if (players.length < 2) {
        alert("Add at least 2 players to reshuffle teams.");
        return;
    }
    players = players.sort(() => Math.random() - 0.5);
    let e = [],
        t = [],
        l = 0,
        s = 0;
    players.forEach((a) => {
        l <= s ? (e.push(a), (l += a.skill)) : (t.push(a), (s += a.skill));
    }),
        displayTeams(e, t),
        localStorage.setItem("lastTeams", JSON.stringify({ team1: e, team2: t }));
}
function displayTeams(e, t) {
    (document.getElementById("team1").innerHTML = e.map((e) => `<li class="list-group-item">${e.name} - ${e.skill}</li>`).join("")),
        (document.getElementById("team2").innerHTML = t.map((e) => `<li class="list-group-item">${e.name} - ${e.skill}</li>`).join(""));
}
function resetTeams() {
    (players = []), localStorage.clear(), localStorage.removeItem("players"), (document.getElementById("playerList").innerHTML = ""), (document.getElementById("team1").innerHTML = ""), (document.getElementById("team2").innerHTML = "");
}
document.addEventListener("DOMContentLoaded", () => {
    updatePlayerList();
}),
    document.addEventListener("DOMContentLoaded", () => {
        let e = JSON.parse(localStorage.getItem("lastTeams"));
        e && displayTeams(e.team1, e.team2);
    });