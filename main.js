function submit(){
    Player1Name=document.getElementById("Player1_Name").value;
    Player2Name=document.getElementById("Player2_Name").value;
    localStorage.setItem("P1Name",Player1Name);
    localStorage.setItem("P2Name",Player2Name);
    console.log("P1 Name="+Player1Name);
    console.log("P2 Name"+Player2Name);
    window.location.replace("GamePage.html");
}
