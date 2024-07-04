 const marvel_heros = ["thor", "ironman", "spiderman"]
 const dc_heros = ["superman","flash","batman"]

 //marvel_heros.push(dc_heros)

 //console.log(marvel_heros);
 //console.log(marvel_heros[3][1]);

 //const allHeros = marvel_heros.concat(dc_heros) // concat is using for add two herose
 //console.log(allHeros);

 //const all_new_heros = [...marvel_heros, ...dc_heros]; // spread operater new method to add arrays
 //console.log(all_new_heros);

 const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);

 console.log(Array.isArray("MDmukim"));
 console.log(Array.from("mdmukim"))
 console.log(Array.from({name:"mdmukim"}));// if we are not able to define array it alwyas gives as empaty space

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3));