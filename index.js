const students = [
    { name: 'Alex', year: 2021, vote: 6 },
    { name: 'Susan', year: 2021, vote: 4 },
    { name: 'Jim', year: 2022, vote: 8 },
    { name: 'Kate', year: 2020, vote: 3 },
    { name: 'Anne', year: 2021, vote: 7 },
  ]
  
  //recuperare il nome degli studenti anno 2021 voto superiore 6 o superiore 
  
   const searchedStudent = students.filter(student => student.year === 2021 && student.vote >= 6).map(student => student.name)
   
  
  
   
   console.log(searchedStudent)