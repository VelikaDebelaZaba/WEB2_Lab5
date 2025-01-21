URL aplikacije u cloudu (npr. Render, Heroku...):
		https://web2-lab5-1q72.onrender.com

1. interpolation/one-way binding
		- src/components/TaskList.vue	 [:9]  showPreview koristi one-way binding

2. two-way binding
		- src/components/TaskList.vue  [:5, :14]  u 5. redu s v-model="newTask" vežem input s podatkom newTask iz data objekta. U 14. redu to koristim kako bih imao preview za naziv zadatka. To se vidi u aplikaciji kada idemo unjeti novi zadatak da se preview uživo updatea.
      
3. methods
		- src/components/TaskList.vue	 [:58]  od 58. reda nadalje unutar methods: nalazi se više različitih metoda poput addTask(), togglePreview(),...	
 
4. computed properties
		- src/components/TaskList.vue  [:44]  u computed: imam 3 computed propertiesa koje koristim kako bih updateao koliko je zadataka preostalo na To-do listi, koliko ih je uspješno obavljeno i koliko ih je neuspješno obavljeno.

5. barem jedan scoped style
		- src/pages/HomePage.vue  [:40]  koristim scoped style za h1 zato što je u EventStats.vue h1 postavljen sa style da ima malo veći margin-bottom. Budući da bih samo na home pageu htio da naslov ima malo manji margin smanjio sam ga sa scoped style.

6. koristiti barem jedan lifecycle hook
		- src/components/TaskList.vue  [:83]  koristim mounted kako bih učitao zadatke iz localStoragea čim se komponenta učita na stranicu.

7. routing (više stranica)
		aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
			- src/router/index.js  [cijeli dokument]  s komentarima su označene dvije bookmarkable stranice
		dinamičko usmjeravanje s 404 stranicom ("catch all")
			- src/router/index.js [:14]  s komentarima je označena linija koda za dinamičko usmjeravanje s 404 stranicom. Stranica je napravljena u src/pages/NotFound.vue 
   
8. (barem) dvije komponente
        	komponenta bez stanja, koristiti properties
         	- src/components/TaskHistory.vue  [:24]  TaskHistory.vue je stateless komponenta koja služi za prikaz povijesti zadataka. Ona prima podatke o zadacima putem props-a što vidimo u 24. redu. Komponenta ne upravlja vlastitim stanjem već se oslanja na podatke koje prima od roditeljske komponente EventsHistory.vue
        	komponenta sa stanjem
         	- src/components/TaskList.vue  [:37]  Komponenta TaskList.vue ima vlastito stanje definirano u data(), gdje upravlja trenutnim zadacima (tasks) i unosom korisnika (newTask).

9. barem jedna komponenta mora emitirati barem jedan event
		- src/components/TaskList.vue  [:64]  komponenta u metodi addTask() emita event update-tasks koji se sluša u src/pages/HomePage.vue u 6. redu.

10. store (Pinia)
		- nisam napravio

11. asinkroni dohvat podataka s backenda, možete:
			koristiti Firebase ili Back4App, Mocky, itd.
        	vlastiti storage, ili
        	možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
        	ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)
					- src/pages/HomePage.vue [:26]  kroz cijeli projekt koristim localStorage, tu se jasno vidi kako ga punim s taskovima kako bi ostali spremljeni kada se refresha stranica i mogli koristiti u projektu.
            	- src/router/index.js  [:8, :12]  stranice .../history i .../stats se lazy loadaju.
            	- to 2 napravio od ove 4 stvari





