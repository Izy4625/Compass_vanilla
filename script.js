// Function to handle sensor data
function handleSensorData() {
    if ('Magnetometer' in window) {
      const sensor = new Magnetometer();
  
      // Add event listener for reading changes
      sensor.addEventListener('reading', () => {
        // Update the displayed values for x, y, and z axes
        document.getElementById('x').textContent = sensor.x.toFixed(2); // x-axis value
        document.getElementById('y').textContent = sensor.y.toFixed(2); // y-axis value
        document.getElementById('z').textContent = sensor.z.toFixed(2); // z-axis value
      });
  
      sensor.start(); // Start the sensor
    } else {
      document.getElementById('x').textContent = "Magnetometer is not supported in this browser.";
      document.getElementById('y').textContent = "Magnetometer is not supported in this browser.";
      document.getElementById('z').textContent = "Magnetometer is not supported in this browser.";
    }
  }
  
  // Initialize sensor data when the page loads
  window.addEventListener('load', handleSensorData);
  