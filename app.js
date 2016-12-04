$(document).ready(function onReady() {

   function getTwitchInfo() {
      function loadResults(data) {
         console.log(data);
      }

      function errAjax(obj) {
         console.error(obj.getAllResponseHeaders());
      }

      var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

      $.ajax({
         accepts: {
           v3: "application/vnd.twitchtv.v3+json",
         },
         type: "GET",
         url: "https://wind-bow.hyperdev.space/twitch-api/users/ESL_SC2",
         dataType: "jsonp",
         error: errAjax,
         success: loadResults,
      });
   }
   getTwitchInfo();
});
