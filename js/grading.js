

var data_table = []
var majorCount = 0

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#submitBt').onclick = function(){
        const newTR = document.createElement('tr')
        const className = document.createElement('td')
        const term = document.createElement('td')
        const grade = document.createElement('td')

        var datasheet = []

        datasheet.push(document.querySelector("#subjectName").value)
        datasheet.push(document.querySelector("#term").value)
        datasheet.push(document.querySelector("#grad").value)

        data_table.push(datasheet)

        className.innerHTML = document.querySelector("#subjectName").value
        term.innerHTML = document.querySelector("#term").value
        grade.innerHTML = document.querySelector("#grad").value

        const TR_List = document.querySelector('#data-table')

        newTR.append(className)
        newTR.append(term)
        newTR.append(grade)
        TR_List.append(newTR)

        return false
    }
})

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#overAllCal').onclick = overAllCal
})

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#majorCal').onclick = majorCal
})

function overAllCal(){
    var sum = 0
    for(var i = 0; i< data_table.length; i++){
        sum = sum+parseFloat(data_table[i][2])
    }
    alert("GPA of "+data_table.length+" subject is "+(sum/data_table.length))
    return false
}

function majorCal(){
    var sum = 0
    for(var i = 0; i< data_table.length; i++){
        if((data_table[i][0].charAt(0) == '2' && 
            data_table[i][0].charAt(1) == '6' &&
            data_table[i][0].charAt(2) == '1') 
            ||
           (data_table[i][0].charAt(0) == '2' && 
            data_table[i][0].charAt(1) == '6' &&
            data_table[i][0].charAt(2) == '9')){
                majorCount++
                sum = sum+parseFloat(data_table[i][2])
            }
        }
        alert("your major GPA is "+(sum/majorCount))
        return false
}