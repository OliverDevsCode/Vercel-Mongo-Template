const express = require('express');
const router = express.Router();
const LeaderboardEntry = require('../models/LeaderBoardEntry'); // adjust the path as needed
const mongoose = require('mongoose');


// GET /leaderboard - Retrieve all leaderboard entries
router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = (await LeaderboardEntry.find({})).sort(function(a, b){return b.score - a.score});
    

    if (!leaderboard || leaderboard.length === 0) {
      
      return res.status(404).json({ error: 'Leaderboard is empty or not found.' });
    }
    if(leaderboard.length > 15){
      console.log("leaderboard longer than 15")
      const leaderboardResponse = [];
      for(let i =0; i < 15;i++){
        //remove the leaderboard IDs for security purposes & reducing data sent 
        entry = {
          username: leaderboard[i].username, //change the fiels depending on your database structure
          score: leaderboard[i].score,
          subject: leaderboard[i].subject
        }
        leaderboardResponse.push(entry)//add all the database entries to an array
      }
      console.log(leaderboardResponse.length)
      return res.status(200).json({ data: leaderboardResponse }); //send the array back to client
    }else{
      return res.status(200).json({ data: leaderboard });
    }
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /enterScore - Add a new score entry
router.post('/enterScore', async (req, res) => {
  const { score, username } = req.body; // CHANGE DEPENDING ON WHAT CLIENT SENDS

  if (!username || typeof score === 'undefined') {
    return res.status(400).json({ error: 'Both username and score are required.' });
  }

  if(score == 0){
    return res.status(400).json({ error: 'Please Enter Score' });
  }

  console.log(`Received score: ${score}`);
  console.log(`Received username: ${username}`);

  try {
    //check if entry already exits
    const duplicates = await LeaderboardEntry.find({ username: username, score: score}); //change for your schema
    if(duplicates.length > 0){
    return res.status(500).json({ error: 'Already Submitted' });
    }else{
      //check for previous score and username on the same subject
      const duplicateEntries = await LeaderboardEntry.deleteOne({ username: username, score:score}) //change for your schema
      console.log("Removed:",duplicateEntries)

      // Create a new leaderboard entry
      const newEntry = new LeaderboardEntry({ username, score, subject });//change for your schema
      await newEntry.save();
      const ID = newEntry._id//returns id of the new entry - remove if not needed
      return res.status(201).json({ message: 'Score added successfully' ,leaderboardID: ID});
    }
   
  } catch (error) {
    console.error('Error saving new score:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
