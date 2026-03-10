const token = 'skQOJOLCdLvNipOmBf0OiyUOkmQmeZRUwx11wDkvsJVInWjU4E3VYJz6Gk1B39MkQ7bK1kN1TlAIefNKybw7elogQMQeua5WaDNkvGu32qGOOihaT4N5zxtzOm83BLY5G2bryaxH1xbsXUgdk2QjsexqVfHf8HfQyW2BozhC4X57Gdmu1beH';
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
