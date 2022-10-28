const user = {
    getData : function(){
        return JSON.parse(localStorage.getItem("database")) ?? [];
    },
    setData : function(data){
        const studentData = [...this.getData() , data]
        localStorage.setItem("database",JSON.stringify(studentData));
    },
    add : function(id,name,family,age,birthday,fatherName,avg,grade){
        const student = {
            id,
            name,
            family,
            age,
            birthday,
            fatherName,
            avg,
            grade
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


