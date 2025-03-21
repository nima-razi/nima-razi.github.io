let players = []; // Stores added players

// Search for Steam player and fetch skill level
async function searchPlayer() {
    let username = document.getElementById("playerSearch").value.trim();
    if (!username) return;

    try {
        let response = await fetch(`http://localhost:3000/getPlayer/${username}`);
        let data = await response.json();

        if (data.error) {
            alert("Player not found!");
            return;
        }

        addPlayerToList(data.name, data.avatar, data.kdRatio, data.steamID);

    } catch (error) {
        console.error("Error fetching player data:", error);
    }
}

function addPlayerToList(name, avatar, kdRatio, steamID) {
    let list = document.getElementById("playerList");

    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "align-items-center", "justify-content-between");

    // Avatar
    let img = document.createElement("img");
    img.src = avatar;
    img.alt = "Player Avatar";
    img.classList.add("rounded-circle", "me-2");
    img.style.width = "50px";
    img.style.height = "50px";

    // Player Info (Name + K/D)
    let playerInfo = document.createElement("span");
    playerInfo.innerHTML = `<strong>${name}</strong> - K/D: ${kdRatio}`;

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
    deleteBtn.onclick = () => removePlayer(listItem, steamID);

    // Append elements
    listItem.appendChild(img);
    listItem.appendChild(playerInfo);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    // Store player data for balancing teams later
    players.push({ name, kdRatio: parseFloat(kdRatio), steamID });
}

// Update the player list UI
function updatePlayerList() {
    let playerList = document.getElementById("playerList");
    playerList.innerHTML = "";

    players.forEach((player, index) => {
        let li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `${player.name} (Skill: ${player.skill.toFixed(2)}) 
            <button class="btn btn-danger btn-sm" onclick="removePlayer(${index})">X</button>`;
        playerList.appendChild(li);
    });
}

// Remove player
function removePlayer(listItem, steamID) {
    // Remove from UI
    listItem.remove();

    // Remove from players array
    players = players.filter(player => player.steamID !== steamID);
}

// Balance teams based on skill level
function balanceTeams() {
    if (players.length < 2) {
        alert("At least 2 players needed to balance teams!");
        return;
    }

    // Sort players by skill level
    players.sort((a, b) => b.skill - a.skill);

    let team1 = [];
    let team2 = [];
    let skillSum1 = 0, skillSum2 = 0;

    players.forEach(player => {
        if (skillSum1 <= skillSum2) {
            team1.push(player);
            skillSum1 += player.skill;
        } else {
            team2.push(player);
            skillSum2 += player.skill;
        }
    });

    displayTeams(team1, team2);
}

// Reshuffle teams randomly
function reshuffleTeams() {
    if (players.length < 2) {
        alert("At least 2 players needed!");
        return;
    }

    let shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    let mid = Math.floor(shuffledPlayers.length / 2);
    let team1 = shuffledPlayers.slice(0, mid);
    let team2 = shuffledPlayers.slice(mid);

    displayTeams(team1, team2);
}

// Display teams in UI
function displayTeams(team1, team2) {
    document.getElementById("team1").innerHTML = team1.map(p => `<li>${p.name} (${p.skill.toFixed(2)})</li>`).join("");
    document.getElementById("team2").innerHTML = team2.map(p => `<li>${p.name} (${p.skill.toFixed(2)})</li>`).join("");
}

// Reset everything
function resetAll() {
    players.length = 0;
    updatePlayerList();
    document.getElementById("team1").innerHTML = "";
    document.getElementById("team2").innerHTML = "";
}
