# Twitch_JSON_API

Use the Twitchtv JSON API
---

1. **Objective:** Build a [CodePen.io](https://codepen.io/) app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.

2. Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story). Use whichever libraries or APIs you need. Give it your own personal style.

3. **User Story:** I can see whether Free Code Camp is currently streaming on Twitch.tv.

4. **User Story:** I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

5. **User Story:** if a Twitch user is currently streaming, I can see additional details about what they are streaming.

6. **User Story:** I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.

7. **Hint:** See an example call to Twitch.tv's JSONP API at http://forum.freecodecamp.com/t/use-the-twitchtv-json-api/19541.

8. **Hint:** The relevant documentation about this API call is here: https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel.

9. **Hint:** Here's an array of the Twitch.tv usernames of people who regularly stream:
```javascript
["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
```

10. **UPDATE** Due to a change in conditions on API usage explained [here](https://blog.twitch.tv/client-id-required-for-kraken-api-calls-afbb8e95f843#.2eo62laqz) Twitch.tv now requires an API key, but we've built a workaround. Use https://wind-bow.hyperdev.space/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken ) and you'll still be able to get account information, without needing to sign up for an API key.

11. Remember to use [Read-Search-Ask](https://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck.

12. When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

13. You can get feedback on your project by sharing it with your friends on Facebook.

Construction
---
**Dependencies:** [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js), [asyquence](https://cdnjs.cloudflare.com/ajax/libs/asynquence/0.9.0/asq.js)

**Stage 1:** My customary startpoint for the Intermediate FE Projects is to explore the API options. In this case we won't be using the Twitch API, because of restrictions like user permissions. Instead we will use a third-party API @ [windbow.hyperdev.space](https://wind-bow.hyperdev.space/twitch-api), which, though its features are limited, has exactly what we will need for this project.
* Now let's flesh out our AJAX call to said API
```javascript
$.ajax({
   accepts: {
     v3: "application/vnd.twitchtv.v3+json",
   },
   type: "GET",
   url: "https://wind-bow.hyperdev.space/twitch-api/users/" + users,
   dataType: "jsonp",
   error: errAjax,
   success: loadResults,
});
```
* Here is an example of the server response
```javascript
{
  _id: 30220059,
  _links: {
    self: "https://api.twitch.tv/kraken/users/esl_sc2"
  },
  bio: "For standings, schedule, and results, visit http://www.intelextrememasters.com/",
  created_at: "2012-05-02T09:59:20Z",
  display_name: "ESL_SC2",
  logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
  name: "esl_sc2",
  type: "user",
  updated_at: "2016-12-04T22:34:50Z"
}
```
