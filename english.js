// Object representing the professional profile of an IT person
let devProfile = {
  fullName: "Valentin Arroyo",
  age: 30,
  profession: "Backend Developer",
  skills: ["HTML", "CSS", "JavaScript, React, Express"],
  isEmployed: true,
  contact: {
    email: "valentinarroyo251122@gmail.com",
    location: "Gobernador Roca"
  }
};

// Function to generate an introduction in English based on the profile
function introduceProfile(profile) {
  let employmentStatus = profile.isEmployed ? "I am currently employed." : "I am currently looking for opportunities.";
  let skills = profile.skills.join(", ");
  
  return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${skills}. I live in ${profile.contact.location}. I am ${profile.age} years old. ${employmentStatus}`;
}

// Example usage
console.log(introduceProfile(devProfile));