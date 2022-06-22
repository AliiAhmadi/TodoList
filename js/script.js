let $ = document;
// select elements we need
let inp = $.getElementById("input");
let SelectUl = $.querySelector("ul");
let form = $.getElementById("form");
let IconTags = $.getElementsByClassName("delete");

// set function prevent defult when enter clicked
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
// progress create an li element and add to ul
inp.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let InputVal = inp.value;
    if (InputVal) {
      let NewSpan = $.createElement("span");
      NewSpan.innerHTML = InputVal;
      let NewItag = $.createElement("i");
      NewItag.classList.add("fa", "fa-trash-o", "delete");
      let Newli = $.createElement("li");
      Newli.append(NewSpan);
      Newli.append(NewItag);
      // set event click in trash icons
      NewItag.addEventListener("click", function (event) {
        NewItag.parentElement.remove();
      });
      //
      Newli.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      SelectUl.append(Newli);
    }
    inp.value = "";
  }
});
