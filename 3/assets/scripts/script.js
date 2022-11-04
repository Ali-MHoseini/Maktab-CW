const $ = document;
const table = $.querySelector("table");

//----------------------------------------
const button = $.createElement("button");
button.innerText= "Remove";
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.width = "4rem";
button.style.height = "1.5rem";

//----------------------------------------


const user = {
    getData : function(){
        return JSON.parse(localStorage.getItem("database")) ?? [];
    },
    setData : function(data){
        const studentData = [...this.getData() , data]
        localStorage.setItem("database",JSON.stringify(studentData));
    },
    add : function(name,age,img,salary){
        const student = {
            id : Math.floor(Math.random() *10000000),
            name,
            age,
            img,
            salary,
            remove,
        };

        this.setData(student);

    },
    find : function(name,family) {
        const studentData = this.getData();
        return studentData.filter(item => item.name == name && item.family == family);
    },
    remove : function (id) {
        const studentData = this.getData();
        const newStudentData = studentData && studentData.filter(item => item.id !== id)
        localStorage.setItem("database",JSON.stringify(newStudentData));
    },
    getinfo: function(id) {
        const studentData = this.getData();
        return studentData.filter(item => item.id == id);
    }
}

let flag = true;
while (flag) {
    let avg = 0
    let userInfo = prompt("");
    if(userInfo != "" && userInfo != null) {
        const userSplited = userInfo.split(',');
        user.add(userSplited[0],+(userSplited[1]),(userSplited[2] == "no" ? false:true),+(userSplited[3]));
    }
    else {
        flag = false;
    }
    userInfo = "";

}

function addIcon(element) {
    if (element.innerText == "false") {
        element.innerText = "✖";
    }else if (element.innerText == "true") {
        element.innerText = "✔";
    }
    return element;
}

function intlFormat(item) {
    const numberFormatter = Intl.NumberFormat('en-US');
    const formatedNumber = numberFormatter.format(item.innerText);
    return formatedNumber;
}

function render() {
   const userlist =  user.getData();
   const tfoot = $.createElement("tfoot");
   const tdfoot = $.createElement("td");
   tdfoot.colSpan = "6";
   let result = 0;
   let count = 0;

   userlist.forEach((person) => {
    const row = $.createElement("tr");
    const tdButton = $.createElement("td");

    for (let property of Object.keys(person)) {
        const tdElement = $.createElement("td");
        tdElement.innerText = person[property];
        if (tdElement.innerText == "false" || tdElement.innerText == "true" ) {
            row.append(addIcon(tdElement));
        }
        else if (property == "salary") {
            row.append(intlFormat(tdElement));
        } else {
            row.append(tdElement);
        }
        
    tdButton.append(button);
    row.append(tdButton);
    table.append(row);
    }
    

    })
    userlist.forEach((persons) => {
    for (let key of Object.keys(persons)) {
        if (key == "salary") {
            result += persons[key];
            count += 1;
        }
    }
    })
    
    let avg = Math.floor(result / count);
    formatedAvg = Intl.NumberFormat('en-US').format(avg);
    tdfoot.innerText = `Avg of Salaries is: ${formatedAvg}`;
    tfoot.append(tdfoot);
    table.append(tfoot);
}

render();