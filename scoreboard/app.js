const title = 'My First React Element!';
const desc =   'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Jesse';

const header = (
    <header>
        <h1 id={myTitleID }>{ name }'s First React Element!</h1>;
         <p> { desc }</p>;
         <input value ={10*20}></input>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
)


//localhost:8000/scoreboard/ to view in browser  