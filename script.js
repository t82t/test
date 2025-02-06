document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const comments = document.getElementById('comments').value;
    const notification = document.getElementById('notification');

    // Simulate sending an email notification
    if (name && date) {
        // Simulate email content
        const emailContent = `
            To: mehrsonne2013@gmail.com
            Subject: Neue Buchung
            Body:
            Name: ${name}
            Date: ${date}
            Comments: ${comments}
        `;

        // Display notification
        notification.textContent = `Reservation successful! An email has been sent with the following details:\n${emailContent}`;
        notification.className = 'notification success';
    } else {
        notification.textContent = 'Please fill in all required fields.';
        notification.className = 'notification error';
    }

    notification.style.display = 'block';
});
