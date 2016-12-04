$(document).ready(function onReady() {
   function loadResults(data) {
      console.log(data);
   }

   $.ajax({
      type: "GET",
      url: "https://wind-bow.hyperdev.space/twitch-api",
      dataType: "json",
      success: loadResults
   });
});
