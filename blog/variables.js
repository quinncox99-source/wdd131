
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];



articles.forEach(makeArticle);
const node = document.getElementsByClassName("book")[0];
node.remove();



function makeArticle(item, index){




document.getElementsByClassName("title")[0].innerHTML = articles[index].title;
document.getElementsByClassName("date")[0].innerHTML = articles[index].date;
document.getElementsByClassName("description")[0].innerHTML = articles[index].description;
document.getElementsByClassName("imgSrc")[0].src = articles[index].imgSrc;
document.getElementsByClassName("imgSrc")[0].alt=articles[index].imgAlt;
document.getElementsByClassName("ages")[0].innerHTML = articles[index].ages;
document.getElementsByClassName("genre")[0].innerHTML = articles[index].genre;
document.getElementsByClassName("stars")[0].innerHTML = articles[index].stars;
const node = document.getElementsByClassName("book")[0];
const clone = node.cloneNode(true);



document.getElementById("book-list").appendChild(clone);
}




/*document.getElementById("book-list").appendChild(clone);
}



       <article class="book">
        <hr>
        <section class="rating">
      <p><em class="date"> July 5,2022</em></p>
      <p  class="age">10-14</p>
      <p><strong class="type">Fantasy</strong> </p>
      <p><span class="stars">⭐⭐⭐⭐</span></p>
      </section>
        <h2 class="title">Septimus Heap Book One:Magyk</h2>
      <img class ="cover" src="images\Magkycover2.jpg" alt="Magyk by Angie Sage">
      
      <p class='desc'>If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you</p>
    </article>         
*/
