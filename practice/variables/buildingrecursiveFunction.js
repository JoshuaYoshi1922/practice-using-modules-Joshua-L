function reverse(str)  {
 if(str.length ===0) return "";

 return reverse(str.slice(1)) + str[0];

}

console.log(reverse("Royals"));

// reverse("Royals")

// revervse("oyals") + "R" = "slayoR"
// revervse("yals") + "o" = "slayo"
// revervse("als") + "y" = "slay"
// revervse("ls") + "a" = "sla"
// revervse("s") + "l" = "sl"
// revervse("") + "s" = "s"
// revervse("") = 0