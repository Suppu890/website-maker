// Automated Functionality Intercept
document.addEventListener("DOMContentLoaded", () => {
  console.log("Suppu sandbox application initialization routine verified.");
  
  // Locates the main interactive button on your landing page
  const eventTriggerNode = document.getElementById("interactiveActionBtn");
  
  if (eventTriggerNode) {
    // Listens for a user click to trigger a responsive pop-up alert
    eventTriggerNode.addEventListener("click", () => {
      alert("Action event processed successfully!");
    });
  }
});
