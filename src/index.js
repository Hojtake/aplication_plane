import "./styles.css";

const onclickAdd = () => {
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputtext; //テキストの追加を行うコマンド

  const completeButten = document.createElement("button");
  completeButten.innerText = "完了";

  const deleteButten = document.createElement("button");
  completeButten.innerText = "削除";

  div.appendChild(li);
  div.appendChild(completeButten);
  div.appendChild(deleteButten);
  console.log(div);
  document.getElementById("imcomplete_list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
