// CREATION

const TopCntnt = document.createElement("div"), tvDiv = document.createElement("div"), notesies = document.createElement("div");

TopCntnt.setAttribute("id", "topContent");
tvDiv.setAttribute("class", "tv");
notesies.setAttribute("class", "note");

TopCntnt.innerHTML = `
    <h1>egg 🐣 fansite!</h1>
    <h3>(work in progress)</h3>
    <h3>(it's gonna be may)</h3>
`;
tvDiv.innerHTML = `
    <div class="tvGlow">
    </div>
`;
notesies.innerHTML = `
    To-do list:
    ${makeList()}
`;

function makeList(){
    let list = "", listitems = [
        `Category system!! ${miniList("video, still image") + miniList("animatic, animation") + miniList("minigames?")}`,
        "Different Views for IMG and video",
        `decide on aesthetic..... indecicion ${miniList("wallet") + miniList("dolphin-themed 2000s desktop") + miniList("bathroom, the bottles") + miniList("dubious vhs shop 'you wouldnt steal a TV'")}`,
    ];

    for(let i = 0; i < listitems.length; i++){
        list += `
        <li>
            ${listitems[i]}
        </li>
        `;
    }

    function miniList(parm){return `<li style="margin-left: 40px; color: steelblue;">${parm}</li>`;}

    return `<ul>${list}</ul>`;
}

document.getElementById("app").appendChild(TopCntnt);
document.getElementById("app").appendChild(tvDiv);
document.getElementById("app").appendChild(notesies);

//
// MANIPULATION: make the keywods

const getTVScreen = document.getElementById("app").getElementsByClassName("tv")[0].getElementsByClassName("tvGlow")[0];

// MANIPULATION: actual manipulation

getTVScreen.style.height = "100px";
getTVScreen.innerHTML = getTVScreen.offsetHeight;