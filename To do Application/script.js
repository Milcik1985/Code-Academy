// 1. Sukurti paprastą formą su input bei button;
// +
// 2. Padaryt, kad paspaudus ant button consolėje būtu išvestas tekstas įvestas input'e;

const buttonAddTask = document.getElementsByClassName("button-add-task")[0];

// 21. Perkrovus puslapį taskai turi būt imami iš localstorage bei atvaizduojami į ekraną;

/*const localStorageTasks = localStorage.getItem("MyTasks");
console.log(localStorageTasks);*/

// 20. Tas pats veiksmas turi būt padarytas atnaujinus kortelės statusą; // // naudot JSON.parse(yyyy)

const localStorageTasks =
  localStorage.getItem("Mytasks") &&
  JSON.parse(localStorage.getItem("MyTasks"));
console.log(localStorageTasks);

let MyTasks = [];

const generateCards = () => {
  // 11. Padaryt, kad naujausiai pridėta task kortelė būtu viršuje (prieš forEach reiks panaudot reverse() metodą);

  [...MyTasks].reverse().forEach((t) => {
    const taskCard = document.createElement("div");

    // 9. Task kortelei pridėti stilių klasę per JS. Stiliai turi apjuost border'iu task'o kortelę.

    taskCard.classList.add("taskCard");
    taskCard.style.border = "2px solid black";
    const wrapper = document.getElementsByClassName("taskWrapper")[0];
    taskCard.innerHTML = t.title;
    const taskStatusCircle = document.createElement("div");
    taskStatusCircle.style.width = "10px";
    taskStatusCircle.style.height = "10px";
    taskStatusCircle.style.borderRadius = "50%";

    // 8. Jeigu task yra atliktas - ekrane turi atsirast žalias mažasapskritimas, jei task nėra atliktas - turi atsirast raudonas apskritimas;

    const setStatus = (isDone) => {
      if (isDone === false) {
        taskStatusCircle.style.backgroundColor = "red";
      } else {
        taskStatusCircle.style.backgroundColor = "green";
      }
    };
    setStatus(t.isDone);
    taskCard.append(taskStatusCircle);
    wrapper.append(taskCard);

    // 10. Paspaudus ant korelės - atvaizdoti consolėj task title;
    // 12. Rasti bei atvaizduoti paspaustos kortelės index'ą;
    // 13. Pamodifikuot task status reikšmę masyve kreipantis į teisingo indexo narį;
    // 14. Atnaujintą objektą atvaizduoti consolėj;

    taskCard.addEventListener("click", () => {
      const index = MyTasks.findIndex((taskObj) => {
        return taskObj.title === t.title;
      });
      // console.log(index);
      MyTasks[index].isDone = !MyTasks[index].isDone;

      // 19. Pridėjus naują taską: nauja masyvo reikšmė turi būt pridėta į localstorage bei overridint seną masyvo reikšmę;

      localStorage.setItem("MyTasks", JSON.stringify(MyTasks));

      console.log(MyTasks[index]);

      // 16. Padaryt, kad paspaudus ant kortelės - senos kortelės iš ekrano išsitrintu bei kortelės atsivaizduoti iš naujo, tam kad matytume atnaujinta korelę ant kurios buvo paspausta;

      wrapper.innerHTML = "";
      generateCards();
    });
  });
};

const onAddTask = () => {
  let taskInput = document.getElementsByClassName("task")[0].value;
  // 3. Ekrane atvaizduot objektą kuriame yra title, isDone ir creationDate;
  const task = {
    title: taskInput,
    isDone: false,
    creationDate: "2024.01.25",
  };
  // console.log(task);

  // 4. Pridėti minimalią validaciją, padaryt, kad consolėj atsirastu informacinė žinutė vietoj objekto jeigu task title bus trumpesnis už 3 simbolius;
  const tasks = () => {
    if (task.title.length >= 3) {
      console.log(task);
    } else {
      console.log("The title is shorter than 3 letters");
    }
  };
  tasks();

  // 5. Sukurti masyvą bei sukurtus bei pravaliduotus objektus dėti į masyvą;

  MyTasks.push(task);
  console.log(MyTasks);

  // 18. Pridėjus tas'ą masyvas su taskais turi būt pridėtas į localstorage;

  localStorage.setItem("MyTasks", JSON.stringify(MyTasks));

  // kad nereiktu inpute istrinti kaskart tai, ka irasem:

  document.getElementsByClassName("task")[0].value = "";

  // 6. forEach pagalba atvaizduoti task title consolej;
  // 7. Prieš atvaizduojant taskTitle į ekraną jį reikia pridėti į prie taskCard komponento, tik tada taskCard pridėt į ekraną;
  // ivedus title i input isveda pirma reiksme, ivedus antra, isveda pirma ir antra ir t.t. pasalinam problema irasydami koda pries forEach:
  //   const wrapper = document.getElementsByClassName("taskWrapper")[0];
  //   wrapper.innerHTML = "";

  const wrapper = document.getElementsByClassName("taskWrapper")[0];
  wrapper.innerHTML = "";

  generateCards();
};

buttonAddTask.addEventListener("click", onAddTask);

// 15. Išskirstyti atskiras dalis kodo į atitinkamai užvadintas funkcijas bei užtikrint, kad "parefaktorintas" kodas nesugriovė applikacijos veikimo;
// +
// 17. Padaryt, kad atliktos kortelės borderis būtu žalias, neatliktos raudonas;// // naudot JSON.stringify(xxxx)

// 22. Užtikrinti, kad applikacija veiks jei localstorage taskų nėra;
/* einam i Application, istrinam visus taskus ir is naujo praruninam koda. Gaunam null, vadinasi, veikia*/

// 23. Duoti tasko kortelei stilius: cursor, hover spalvą;
// +
