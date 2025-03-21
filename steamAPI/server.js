import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "1F09533AC70759F54B04143564CAF370"; // Replace with your actual API key
const CS2_APP_ID = 730; // Counter-Strike 2 (CS:GO) App ID

app.use(cors()); // Allow frontend to access this API

// Route to fetch player Steam ID, profile, and K/D ratio
app.get("/getPlayer/:username", async (req, res) => {
    const username = req.params.username;

    // Step 1: Get Steam ID
    const vanityURL = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${API_KEY}&vanityurl=${username}`;

    try {
        let vanityResponse = await fetch(vanityURL);
        let vanityData = await vanityResponse.json();

        let steamID;
        if (vanityData.response.success === 1) {
            steamID = vanityData.response.steamid;
        } else if (!isNaN(username) && username.length === 17) {
            steamID = username;
        } else {
            return res.status(404).json({ error: "User not found." });
        }

        // Step 2: Fetch Player Summary
        const profileURL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${API_KEY}&steamids=${steamID}`;
        let profileResponse = await fetch(profileURL);
        let profileData = await profileResponse.json();

        if (!profileData.response.players.length) {
            return res.status(404).json({ error: "Player profile not found." });
        }

        const player = profileData.response.players[0];

        // Step 3: Fetch CS2 Stats
        const statsURL = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${API_KEY}&appid=${CS2_APP_ID}&steamid=${steamID}`;
        let statsResponse = await fetch(statsURL);
        let statsData = await statsResponse.json();

        // Check if stats exist
        let kills = 0, deaths = 1, kdRatio = "N/A"; // Default values

        if (statsData.playerstats && statsData.playerstats.stats) {
            const stats = statsData.playerstats.stats;
            const killStat = stats.find(s => s.name === "total_kills");
            const deathStat = stats.find(s => s.name === "total_deaths");

            if (killStat && deathStat) {
                kills = killStat.value;
                deaths = deathStat.value > 0 ? deathStat.value : 1; // Prevent division by zero
                kdRatio = (kills / deaths).toFixed(2);
            }
        }

        res.json({
            steamID: player.steamid,
            name: player.personaname,
            avatar: player.avatarfull,
            kdRatio: kdRatio
        });

    } catch (error) {
        console.error("Error fetching player data:", error);
        res.status(500).json({ error: "Failed to fetch player data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});