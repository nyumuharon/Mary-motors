const token = 'skuAJgBrSX83lUeZjlMDAcGNomLHJjF2daLVcq9tXp4cbbI6qbrNMrFUNQFgXF5g1vDKowLAyop8tkXBrU53NOtwJZ5mR2B9gCcvfPN7gMBJPnC5QgtzQnILegIenfrBwd2pccx7CpqF0zfyWYaaw0AA4l25NSdlzkOXtIFMpyEyAKg6OuIE';
const projectId = 'khqg9ywx';

async function addCors() {
    console.log("Unblocking Vercel Server on Sanity...");
    const res = await fetch(`https://api.sanity.io/v1/projects/${projectId}/cors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            origin: 'https://mary-motors.vercel.app',
            allowCredentials: true
        })
    });

    if (res.ok) {
        console.log("Successfully Authorized! Cars will now load instantly.");
    } else {
        console.error("Failed to Authorize:", await res.text());
    }
}
addCors();
