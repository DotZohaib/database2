use('Courses for the first time');

// Insert a few documents into the Courses collection.
db.getCollection('Courses').insertMany(
   
      [
        {
          "Instructor": "Alice",
          "Course": "JavaScript",
          "Price": "35000",
          "City": "Karachi"
        },
        {
            "Instructor": "Zohaib",
            "Course": "Python",
            "Price": "40000",
            "city": "larkana"
          },
        {
          "Instructor": "Bob",
          "Course": "Data Science",
          "Price": "50000",
          "City": "Islamabad"
        },
        {
          "Instructor": "Charlie",
          "Course": "Java",
          "Price": "45000",
          "City": "Lahore"
        },
        {
          "Instructor": "David",
          "Course": "Web Development",
          "Price": "42000",
          "City": "Quetta"
        },
        {
          "Instructor": "Eva",
          "Course": "C++",
          "Price": "48000",
          "City": "Peshawar"
        },
        {
          "Instructor": "Frank",
          "Course": "Machine Learning",
          "Price": "55000",
          "City": "Multan"
        },
        {
          "Instructor": "Grace",
          "Course": "React",
          "Price": "38000",
          "City": "Faisalabad"
        },
        {
          "Instructor": "Hank",
          "Course": "Python",
          "Price": "40000",
          "City": "Rawalpindi"
        },
        {
          "Instructor": "Ivy",
          "Course": "Angular",
          "Price": "47000",
          "City": "Gujranwala"
        },
        {
          "Instructor": "Jack",
          "Course": "Artificial Intelligence",
          "Price": "60000",
          "City": "Sialkot"
        },
        {
          "Instructor": "Karen",
          "Course": "HTML/CSS",
          "Price": "32000",
          "City": "Hyderabad"
        },
        {
          "Instructor": "Liam",
          "Course": "Cybersecurity",
          "Price": "53000",
          "City": "Sukkur"
        },
        {
          "Instructor": "Mia",
          "Course": "Vue.js",
          "Price": "42000",
          "City": "Bahawalpur"
        },
        {
          "Instructor": "Noah",
          "Course": "SQL",
          "Price": "36000",
          "City": "Gujrat"
        },
        {
          "Instructor": "Olivia",
          "Course": "DevOps",
          "Price": "49000",
          "City": "Jhelum"
        },
        {
          "Instructor": "Peter",
          "Course": "Node.js",
          "Price": "43000",
          "City": "Sargodha"
        },
        {
          "Instructor": "Quinn",
          "Course": "Ruby on Rails",
          "Price": "47000",
          "City": "Mardan"
        },
        {
          "Instructor": "Ryan",
          "Course": "Blockchain",
          "Price": "58000",
          "City": "Swat"
        },
        {
          "Instructor": "Sara",
          "Course": "Flutter",
          "Price": "41000",
          "City": "Chiniot"
        },
        {
          "Instructor": "Tom",
          "Course": "UX/UI Design",
          "Price": "39000",
          "City": "Kohat"
        }
      ]
      
);


console.log(` Done You are now Selected!`);



