document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const seats = document.getElementById('seats').value;

    // Create reservation object
    const reservationData = {
        name,
        email,
        phone,
        date,
        time,
        seats
    };

    fetch('/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Reservation failed, please try again.';
    });
});
