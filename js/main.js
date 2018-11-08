(() => {
	// Simple JS file
	console.log("Fired! Or loaded... Or whatever!");

	// This is a single line comment
	var choices = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector(".winlose");

	function playGame()
	{
		// debugger;
		console.log("Called playGame");

		// Make the computer choose a random weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		var player_choice = player.value;

		// Check for a tie first
		if (computer.toLowerCase()== player_choice.toLowerCase())
		{
			// It's a tie
			status.textContent = "Tie! You live to shoot another day."
		}
		else if (player_choice.toLowerCase() == "rock")
		{
			if (computer.toLowerCase() == "scissors")
			{
				//Win
				status.textContent = `Win! ${player_choice} beats ${computer}!`;
			}
			else
			{
				//Lose
				status.textContent = `Lose! ${computer} beats ${player_choice}!`;
			}
		}
		else if (player_choice.toLowerCase() == "paper")
		{
			if (computer.toLowerCase() == "rock")
			{
				//Win
				status.textContent = `Win! ${player_choice} beats ${computer}!`;
			}
			else
			{
				//Lose
				status.textContent = `Lose! ${computer} beats ${player_choice}!`;
			}
		}
		else if (player_choice.toLowerCase() == "scissors")
		{
			if (computer.toLowerCase() == "paper")
			{
				//Win
				status.textContent = `Win! ${player_choice} beats ${computer}!`;
			}
			else
			{
				//Lose
				status.textContent = `Lose! ${computer} beats ${player_choice}!`;
			}
		}
		else
		{
			player.value="";
			alert("You didn't pick a valid weapon... Try again!");
		}
	}
	
	trigger.addEventListener("click", playGame);
})();