let HR = {
    "employees": [{
        "name": "Sam",
        "department": "tech",
        "designation": "manager",
        "salary": 40000,
        "raise-elibible": true},

        {
            "name": "Mary",
            "department": "finance",
            "designation": "trainee",
            "salary": 18500,
            "raise-elibible": true},

        {
             "name": "Bill",
             "department": "HR",
             "designation": "Executive",
             "salary": 21200,
             "raise-elibible": false}




    ]}

    let company = {

        "companyInfo": [{

          "companyName": "Tech Stars",
          "website": "www.techstars.site",
          "employees": HR["employees"]

        }]




    }


    //Question 1
    console.log(HR["employees"]);

    //Question 2
    console.log(company["companyInfo"]);

    //Question 3
    HR["employees"].push( {

        "name": "Anna",
        "department": "Tech",
        "designation": "executive",
        "salary": 25600,
        "raise-elibible": false
    }
    );
    console.log(company["companyInfo"][0]["employees"][3])

    //Question 4
    let totalSalary = 0;
    for (let i = 0; i < HR["employees"].length; i++) {

        totalSalary += HR["employees"][i]["salary"];
    }
    console.log(totalSalary);

    //Question 5
    function livingWage() {
        if (HR["employees"]["raise-eligible"] == true) {
            HR["employees"][i]["salary"] =  HR["employees"][i]["salary"] * 1.1;
            HR["employees"][i]["raise-eligible"] = false;
        }
      console.log(HR["employees"]);
    }
    livingWage();

    
    // Question 6
    const wfh = ["Anna", "Sam"];
    for (let i = 0; i < HR["employees"].length; i++) {
        if (wfh.includes(HR["employees"][i]["name"])) {
            HR["employees"][i]["wfh"] = true;
        }
        else {
            HR["employees"][i]["wfh"] = false; 
        }
    }
    console.log(HR["employees"])
  