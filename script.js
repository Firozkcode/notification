function notificationMessage(type, messageText) {
  const notificationContainer = document.getElementById("notificationContainer");

  // Select sound based on notification type

  if(type ==="success"){
    soundFile = "success.mp3";
  }
  else if(type === "error"){
    soundFile = "message.wav";
  }
  else{
    soundFile = "message.wav";
  }

  // const soundFile = type === "success" ? "success.mp3" : "message.wav";
  const audio = new Audio(soundFile);
  audio.play().catch(error => console.log("Audio play failed:", error));

  // Create the notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`; // Add class for styling

  // Add the message
  const message = document.createElement("div");
  message.className = "message";
  message.textContent = messageText;

  // Add a close button
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", () => {
      notification.remove();
  });

  // Add the progress bar
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  // Append elements to the notification
  notification.appendChild(message);
  notification.appendChild(closeBtn);
  notification.appendChild(progressBar);

  // Append the notification to the container
  notificationContainer.appendChild(notification);

  // Remove the notification after 5 seconds
  setTimeout(() => {
      notification.remove();
  }, 5000);
}

// Example Usage:
document.getElementById("notice_text_error").addEventListener("click", () => {
  notificationMessage("error", "An error occurred. Please try again.");
});

//  Trigger a processing notification
document.getElementById("notice_text_processing").addEventListener("click", () => {
  notificationMessage("processing", "Your Request is processing, please wait...");
});

// Trigger a success notification (you can call it anywhere)
document.getElementById("notice_text_success").addEventListener("click", () => {
  notificationMessage("success", "Completed Successfully!");
});