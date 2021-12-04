
let total = 0;

let loocation = prompt(` Type Place Of This Value [ Dhaka , Mirpur , Banani , Rangpur , Sherpur , Bogura  ] `)

student.map((data) => {

  let place = data.location;

// Dhaka , Mirpur , Banani , Rangpur , Sherpur , Bogura 

    if( place == loocation ){

        console.log(`
        
        ID          :   ${data.id} 
        Name        :   ${data.name}
        Age         :   ${data.age}
        Income      :   ${data.selary}
        Loocation   :   ${data.location}
    -----------------------------------------
        
        `);
    
    total = total + data.selary ;

    }
})
console.log(` Our Total Total Income Of ${loocation} Area = ${total} Taka 




`);
