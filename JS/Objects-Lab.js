const Students = {
    fname: "David",
    lname: "Park",
    grade: 8,
    age: 25,
    gender: "Male",
    math: 95,
    science: 90, 
    english: 85,
    average: (num1,num2,num3) => (num1+num2+num3)/3,
    year: function(gra) {
        for (i=0;i<=4;i++){
            if (gra === 6){
                return 'Freshmen'
            }
            else if (gra === 7){
                return 'Sophmore'
            }
            else if (gra === 8){
                return 'Junior'
            }
            else if (gra ===9){
                return 'Senior'
            }
            else {
                return "Not In Highschool"
            }
        }
    }
}

console.log(Students.average(Students.math,Students.science,Students.english))

console.log(Students.year(Students.grade))
