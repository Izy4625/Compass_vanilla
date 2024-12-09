// Establish WebSocket connection
const socket = new WebSocket('ws://your-server-url'); // Replace with your backend URL

// Update the heading on the webpage
const headingElement = document.getElementById('heading');

// Function to handle sensor data
function handleSensorData() {
  if ('Magnetometer' in window) {
    const sensor = new Magnetometer();

    // Add event listener for reading changes
    sensor.addEventListener('reading', () => {
      // Send compass heading data to the backend
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          movement: { heading: sensor.x }, // Send the x-axis magnetic data (compass heading)
        }));
      }

      // Update the heading value on the page
      headingElement.textContent = sensor.x.toFixed(2); // Round to 2 decimal places
    });

    sensor.start(); // Start the sensor
  } else {
    headingElement.textContent = "Magnetometer is not supported in this browser.";
  }
}

// Initialize sensor data when the page loads
window.addEventListener('load', handleSensorData);

// Clean up the WebSocket connection when the window is closed
window.addEventListener('beforeunload', () => {
  if (socket.readyState === WebSocket.OPEN) {
    socket.close();
  }
});
