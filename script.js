// TODO: add code here
window.addEventListener("load", function() {

    let json = [];

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {

            const astronautsContainer = document.getElementById("container");

            let astronauts = `<h2>(${json.length} total)</h2>`;

            json.sort((a, b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1);

            astronautCounter = 0;

            for (const astronaut of json) {

                astronautCounter ++;

                if (astronaut.active === true) {
                    astronauts += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${astronautCounter}. ${astronaut.firstName} ${astronaut.lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                        <li style="color:green;">Active: ${astronaut.active}</li>
                                        <li>Skills: ${astronaut.skills}</li>
                                    </ul>
                            </div>
                            <img class="avatar" src=${astronaut.picture}>
                        </div>
                `;

                } else {
                    astronauts += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${astronautCounter}. ${astronaut.firstName} ${astronaut.lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                        <li>Active: ${astronaut.active}</li>
                                        <li>Skills: ${astronaut.skills}</li>
                                    </ul>
                            </div>
                            <img class="avatar" src=${astronaut.picture}>
                        </div>
                `;
                }
                
            }

            astronautsContainer.innerHTML = astronauts;

        })
    })

})