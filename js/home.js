var skedList = "";
fetch("./storage.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.skedDetails.forEach(function (skedDetails) {
      skedList += `
    <div class="skedContainer">
      <div class="leftSkedContainer">
        <div class="senderInfo">
          <div class="groupNameContainer">${skedDetails.groupname}</div>
          <div class="emailContainer">${skedDetails.email}</div>
        </div>
        <div class="titleContainer">${skedDetails.title}</div>
      </div>
      <div class="skedContentContainer">${skedDetails.skedcontent}</div>
      <div class="rightSkedContainer">
        <div class="dateContainer">
          <div class="dateStartContainer">${skedDetails.datestart}</div>
          <div class="deadlineContainer">${skedDetails.deadline}</div>
        </div>
        <div class="daySendContainer">${skedDetails.daysend}</div>
        <div class="itemSentContainer" id="itemSent${skedDetails.id}">${skedDetails.itemSent}</div>
      </div>
    </div>`;
    });
    document.getElementById("skedContainer").innerHTML = skedList;
  })
  .catch((err) => {
    console.log(err);
  });
