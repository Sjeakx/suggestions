document.getElementById('suggestionForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const suggestion = document.getElementById('suggestion').value;

    try {
        const response = await fetch('https://your-deployment-url/.netlify/functions/handler', {
            method: 'POST',
            body: JSON.stringify({ name, suggestion }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.getElementById('responseMessage').textContent = 'Suggestion submitted successfully!';
        } else {
            document.getElementById('responseMessage').textContent = 'Error submitting your suggestion.';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('responseMessage').textContent = 'An error occurred.';
    }
});
