import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// function formatName(user){
// 	return user.firstName + ' ' + user.lastName;
// }


// const user = {
// 	firstName: 'Julia',
// 	lastName: 'Nascimento',
// };

// const element = <h1>Fala, {formatName(user)}! Tudo tranquilo?</h1>;

// ReactDOM.render(element, document.getElementById('root'));

// ---------------------------------------------------------------------------------------//

	// const element1 = <div> <h1>julia</h1> <hr /></div>;



// setTimeout(um,1000);

// ---------------------------------------------------------------------------------------//

// function tick(){ // funcao
// 	return new Date().toLocaleTimeString();
// 	// ReactDOM.render(element, document.getElementById('root'));
// }

// const element4 = (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			<h2>It is {setInterval(tick(), 1000)}.</h2><hr />
// 		</div>
// 	);


// ---------------------------------------------------------------------------------------//

// function WelcomeOne(props) { // componente
// 	return <h1>Hello, {props.name}</h1>;
// }


// 	const element3 = <WelcomeOne name ="Julinha" />;

// 	const elementFinal = (
// 		<div>
// 			{element1}
// 			{element4}
// 			{element3}
// 		</div>
// 		);
// 	ReactDOM.render(elementFinal, document.getElementById('root'));





// ---------------------------------------------------------------------------------------//

// class WelcomeTwo extends React.Component { // componente usando ES6
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// ---------------------------------------------------------------------------------------//


// function WelcomeThree(props) { // componente
// 	return <h1>Hello, {props.name}</h1>;
// }

// function App() { // componente
// 	return (
// 		<div>
// 			<WelcomeThree name = "Sara"/>
// 			<WelcomeThree name = "Aras"/>
// 			<WelcomeThree name = "Rasa"/>
// 		</div>
// 	);
// }

// ReactDOM.render(<App />, document.getElementById('root'))


// ---------------------------------------------------------------------------------------//

// function formatDate(date) {
// 	return date.toLocaleDateString();
// }

// function Comment(props) { // funcao
// 	return (
// 		<div className="Comment">
// 			<div className="UserInfo">
// 				<img className="Avatar"
// 					src = {props.author.avatarUrl}
// 					alt = {props.author.name}
// 				/>
// 				<div className = "UserInfo-name">
// 					{props.author.name}
// 				</div>
// 			</div>
// 			<div className = "Comment-text">
// 				{props.text}
// 			</div>

// 			<div className = "Comment-date">
// 				{formatDate(props.date)}
// 			</div>
// 		</div>



// 		)
// }


// ---------------------------------------------------------------------------------------//

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props){
// 	return(
// 		<img className = "Avatar"
// 			src = {props.user.avatarUrl}
// 			alt = {props.user.name}
// 		/>
// 	);
// }

// function UserInfo(props) {
// 	return (
// 		<div className="UserInfo">
// 			<Avatar user = {props.user} />
// 			<div className = "UserInfo-name">
// 				{props.user.name}
// 			</div>
// 		</div>
// 	);
// }

// // function CommentText(props){
// // 	return (
// // 		<div className = "Comment-text">
// // 			{props.user.text}
// // 		</div>
// // 	);
// // }

// function Comment(props) { // funcao
// 	return (
// 		<div className="Comment">
// 			<UserInfo user = {props.author} />
// 			<div className = "Comment-text">
// 				{props.text}
// 			</div>
// 			<div className = "Comment-date">
// 				{formatDate(props.date)}
// 			</div>
// 		</div>
// 		);
// }

// const comment = {
// 	date: new Date(),
// 	text: 'SERÁ QUE TO APRENDENDO TUDO CERTINHO????',
// 	author: {
// 		name: 'Julinha',
// 		avatarUrl: 'http://placekitten.com/g/64/64',
// 	},
// };


// ReactDOM.render(<Comment date = {comment.date} text = {comment.text} author = {comment.author} />, document.getElementById('root'))

// ---------------------------------------------------------------------------------------//


// function sum(a,b) { // funcao pura
// 	return a + b;
// }

// function withdraw(account, amount) { // funcao impura
// 	account.total -= amount;
// }

// ---------------------------------------------------------------------------------------//

// function tick() {
// 	const element = (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// 	ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// ---------------------------------------------------------------------------------------//

// function Clock(props) {
// 	return (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			<h2>It is {props.date.toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// }

// function tick() {
// 	ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// ---------------------------------------------------------------------------------------//

// // convertendo a funcao Clock na classe Clock
// class Clock extends React.Component{
// 	render(){
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
// 			</div>
// 		);
// 	}
// }


// ---------------------------------------------------------------------------------------//

// class Clock extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {date: new Date()};
// 	}

// 	componentDidMount(){
// 		this.timerID = setInterval(
// 			() => this.tick(), 1000
// 		);
// 	}

// 	componentWillUnmount(){
// 		clearInterval(this.timerID);
// 	}

// 	tick(){
// 		this.setState({
// 			date: new Date()
// 		});
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<h1> Hello, world! </h1>
// 				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// 			</div>
// 		);
// 	}
// }

// function tick() {
// 	ReactDOM.render(<Clock />, document.getElementById('root'));
// }

// setInterval(tick, 1000);


// ---------------------------------------------------------------------------------------//


// // this.state.comment = 'Hello'; // wrong
// this.setState({comment: 'Hello'}); // correct

// // this.setState({ // wrong
// 	// counter: this.state.counter + this.props.increment,
// // });


// this.setState((prevState, props) => ({ // correct usando arrow function
// 	counter: prevState.counter + props.increment
// }));


// this.setState(function(prevState, props){ // correct usando uma funcao normal
// 	return {
// 		counter: prevState.counter + props.increment
// 	};
// });


// ---------------------------------------------------------------------------------------//

// constructor(props){
// 	super(props);
// 	this.state = {
// 		posts: [],
// 		comments: []
// 	};
// }


// componentDidMount(){
// 	fetchPosts().then(response => {
// 		this.setState({
// 			posts: response.posts
// 		});
// 	});
// }


// ---------------------------------------------------------------------------------------//
// State and Lifecycle

// function FormattedDate(props){
// 	return <h2> it is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {date: new Date()};
// 	}

// 	componentDidMount(){
// 		this.timerID = setInterval(
// 			() => this.tick(), 1000
// 		);
// 	}

// 	componentWillUnmount(){
// 		clearInterval(this.timerID);
// 	}

// 	tick(){
// 		this.setState({
// 			date: new Date()
// 		});
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<h1> Hello, world! </h1>
// 				<FormattedDate date = {this.state.date}/>
// 			</div>
// 		);
// 	}
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ---------------------------------------------------------------------------------------//
// Handling Events (Incompleto)

// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));

// // You can now get a ref directly to the DOM button:
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;

//-----------------------------------------------//

// function logProps(WrappedComponent) {
// 	class LogProps extends React.Component {
// 		componentDidUpdate(prevProps) {
// 			console.log('old props:', prevProps);
// 			console.log('new props:', this.props);
// 		}
// 		render(){
// 			return <WrappedComponent {...this.props}/>;
// 		}
// 	}
// 	return LogProps;
// }


//-----------------------------------------------//

// import FancyButton from './FancyButton';

// const ref = React.createRef();

// <FancyButton label="Click me!" handleClick={handleClick} ref={ref}/>;

// class FancyButton extends React.Component {
// 	focus() {

// 	}
// }
// export default logProps(FancyButton);

// ---------------------------------------------------------------------------------------//
// Condition Rendering

// function UserGreeting(props){
// 	return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props){
// 	return <h1>Please sign up</h1>;
// }

// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if(isLoggedIn) {
// 		return <UserGreeting />;
// 	}
// 	return <GuestGreeting />;
// }

// ReactDOM.render(
// 	<Greeting isLoggedIn={false} />,
// 	document.getElementById('root'))

//-----------------------------------------------//


// function UserGreeting(props){
// 	return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props){
// 	return <h1>Please sign up</h1>;
// }

// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if(isLoggedIn) {
// 		return <UserGreeting />;
// 	}
// 	return <GuestGreeting />;
// }

// function LoginButton(props){
// 	return (
// 		<button onClick={props.onClick}>
// 			Login
// 		</button>
// 	);
// }

// function LogoutButton(props){
// 	return (
// 		<button onClick={props.onClick}>
// 			Logout
// 		</button>
// 	);
// }

// class LoginControl extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 		this.state = {isLoggedIn: false};

// 	}

// 	handleLoginClick() {
// 		this.setState({isLoggedIn: true});
// 	}

// 	handleLogoutClick() {
// 		this.setState({isLoggedIn: false});
// 	}

// 	render() {
// 		const isLoggedIn = this.state.isLoggedIn;

// 		const button = isLoggedIn ?
// 			(<LogoutButton onClick = {this.handleLogoutClick}/>) :
// 			(<LoginButton onClick = {this.handleLoginClick}/>);


// 	return (
// 		<div>
//         	<Greeting isLoggedIn={isLoggedIn} />
//         	{button}
//       	</div>
//       );

// 	}
// }

// ReactDOM.render(<LoginControl/>, document.getElementById('root'));


//-----------------------------------------------//

// function Mailbox(props) {
// 	const unreadMessages = props.unreadMessages;
// 	const message = props.message;


// 	return (
// 		<div>
// 			<h1>Hello!</h1>
// 			{unreadMessages.length > 0 &&
// 				<h2>You have {unreadMessages.length} unread messages.</h2>}
// 		</div>
// 	);
// }

// const messages = ['React', 'Re: React', 'Re: Re: React', 'Mensagem da Julia'];
// ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('root'));


//-----------------------------------------------//

// function WarningBanner(props) {
// 	if(!props.warn) {
// 		return null;
// 	}

// 	return (
// 		<div className="warning">
// 			Warning!
// 		</div>
// 	);
// }

// class Page extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {showWarning: true};
// 		this.handleToggleClick = this.handleToggleClick.bind(this);
// 	}

// 	handleToggleClick(){
// 		this.setState(prevState => ({
// 			showWarning: !prevState.showWarning
// 		}));
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<WarningBanner warn={this.state.showWarning} />
// 				<button onClick={this.handleToggleClick}>
// 					{this.state.showWarning ? 'Hide' : 'Show'}
// 				</button>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<Page />, document.getElementById('root'));


//---------------------------------------------------------------------------------------//
// Lists and Keys

// const numbers = [1,2,'abacate',4,5];

// const listItems = numbers.map((number) => <li>{number}</li>);

// ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));

//-----------------------------------------------//

// function NumberList(props) {
// 	const numbers = props.numbers;
// 	const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);

// 	return (
// 		<ul>{listItems}</ul>
// 	);
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));

//-----------------------------------------------//

// const todoItems = todos.map((todo, index) =>
// 	<li key={index}>{todo.text}</li>);

// -----------------------------------------------//

// function ListItem(props) {
// 	const value = props.value;
// 	return (
// 		<li>{value}</li>
// 	);
// }

// function NumberListOne(props) {
// 	const numbers = props.numbers;
// 	const listItems = numbers.map((number) =>
// 		<ListItem key={number.toString()} value={number} />
// 	);

// 	return (
// 		<ul>
// 			{listItems}
// 		</ul>
// 	);
// }

// const numbers = [1,2,3,4,5];
// ReactDOM.render(<NumberListOne numbers={numbers} />, document.getElementById('root'));


// -----------------------------------------------//


// function Blog(props) {
// 	const sidebar = (
// 		<ul>
// 			{props.posts.map((post) =>
// 				<li key={post.id}>
// 					{post.title}
// 				</li>
// 			)}
// 		</ul>
// 	);

// 	const content = props.posts.map((post) =>
// 		<div key={post.id}>
// 			<h3>{post.title}</h3>
// 			<p>{post.content}</p>
// 		</div>
// 	);

// 	return (
// 		<div>
// 			{sidebar}
// 			<hr/>
// 			{content}
// 		</div>
// 	);
// }

// const posts = [
// 	{id: 1, title: 'Hello Word', content: 'Welcome to learning React!'},
// 	{id: 2, title: 'Olá mundo', content: 'Welcome to learning React!'},
// 	{id: 3, title: 'हैलो दुनिया!', content: 'Welcome to learning React!'},
// 	{id: 4, title: 'Hallo wêreld!', content: 'Welcome to learning React!'},
// 	{id: 5, title: 'Zdravo svijet!', content: 'Welcome to learning React!'},
// ];

// ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));

// -----------------------------------------------//

// function NumberList(props) {
// 	const numbers = props.numbers;
// 	return (
// 		<ul>
// 			{numbers.map((number) =>
// 				<ListItem key={number.toString()} value={number} />
// 			)}
// 		</ul>
// 	);
// }

// function ListItem(props) {
// 	return <li>{props.value}</li>
// }

// const numbers = [1,2,3,4,5]

// ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('root'));

//---------------------------------------------------------------------------------------//
// Forms

// class NameForm extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {name: '', email: '', text:'Insira aqui sua estimada opinião', option:'selecionar', isGoing: true, numberOfGuests: 2};

// 		this.handleChangeNome = this.handleChangeNome.bind(this);
// 		this.handleChangeEmail = this.handleChangeEmail.bind(this);
// 		this.handleChangeOpinion = this.handleChangeOpinion.bind(this);
// 		this.handleChangeSelect = this.handleChangeSelect.bind(this);
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChangeNome(event){
// 		this.setState({"name": event.target.value.toUpperCase()});
// 	}
// 	handleChangeEmail(event){
// 		this.setState({"email": event.target.value.toUpperCase()});
// 	}
// 	handleChangeOpinion(event){
// 		this.setState({"text": event.target.value.toUpperCase()});
// 	}
// 	handleChangeSelect(event){
// 		this.setState({"option": event.target.value.toUpperCase()});
// 	}
// 	handleSubmit(event){
// 		alert('A name was submited: ' + this.state.name + ' with email: ' + this.state.email + ' o texto foi inserido corretamente.' + this.state.option);
// 		event.preventDefault();
// 	}

// 	handleInputChange(event) {
// 		const target = event.target;
// 		const value = target.type === 'checkbox' ?is target.checked : target.value;
// 		const name = target.name;

// 		this.setState({[name]: value});
// 	}

// 	render(){
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>Name:</label>
// 				<input name="name" ref={(ref) => {this.nomeRef = ref}} type="text" value={this.state.name} onChange={this.handleChangeNome}/>

// 				<label>Email:</label>
// 				<input name="email" ref={(ref) => {this.emailRef = ref}} type="email" value={this.state.email} onChange={this.handleChangeEmail}/>

// 				<label>Insira aqui sua opnião:</label>
// 				<textarea name="text" ref={(ref) => {this.textoRef = ref}} value={this.state.text} onChange={this.handleChangeOpinion}/>

// 				<label>Escolha sua fruta preferida:</label>
// 				<select name="option" ref={(ref) => {this.selectRef = ref}} value={this.state.value} onChange={this.handleChangeSelect}>
// 					<option value="Selecionar">Selecione uma opção</option>
// 					<option value="Abacaxi">Abacaxi</option>
// 					<option value="maçã">Maçã</option>
// 					<option value="banana">Banana</option>
// 					<option value="laranja">Laranja</option>
// 					<option value="manga">Manga</option>
// 				</select>

// 				<label>Is Going:</label>
// 				<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>

// 				<label>Number of Guests</label>
// 				<input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>

// 				<input type="submit" value="Submit"/>
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(<NameForm />,document.getElementById('root'));



//---------------------------------------------------------------------------------------//
// Lifting State Up

// function BoilingVerdict(props) {
// 	if (props.celsius >= 100) {
// 		return <p>The water would boil.</p>;
// 	}
// 	return <p>The water would not boil.</p>;
// }

// class Calculator extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 		this.state = {temperature: ''};
// 	}

// 	handleChange(e) {
// 		this.setState({temperature: e.target.value});
// 	}

// 	render() {
// 		const temperature = this.state.temperature;
// 		return (
// 			<fieldset>
// 				<legend>Enter temperature in Celsius:</legend>
// 				<input value={temperature} onChange={this.handleChange} />
// 				<BoilingVerdict celsius={parseFloat(temperature)} />
// 			</fieldset>
// 		);
// 	}
// }

// ReactDOM.render(<Calculator />, document.getElementById('root'));


// -----------------------------------------------//


// const scaleNames = {
// 	c: 'Celsius',
// 	f: 'Fahrenheit'
// };


// function toCelsius(fahrenheit){
// 	return (fahrenheit - 32)*5/9;
// }

// function toFahrenheit(celsius){
// 	return (celsius * 9/5) + 32;
// }

// function tryConvert(temperature, convert) {
// 	const input = parseFloat(temperature);
// 	if (Number.isNaN(input)) {
// 		return 'INSIRA UM NÚMERO VÁLIDO';
// 	}
// 	const output = convert(input);
// 	const rounded = Math.round(output * 100) / 1000;
// 	return rounded.toString();
// }

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class TemperatureInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e) {
// 		this.props.onTemperatureChange(e.target.value);
// 	}

// 	render() {
// 		const  temperature = this.props.temperature;
// 		const scale = this.props.scale;

// 		return (
// 			<fieldset>
// 				<legend>Enter temperature in {scaleNames[scale]}:</legend>
// 				<input value={temperature} onChange={this.handleChange}/>
// 			</fieldset>
// 		);
// 	}
// }


// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

// //---------------------------------------------------------------------------------------//
// // Composition vc Inheritance


// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }

// function WelcomeDialog() {
// 	return (
// 		<FancyBorder color='blue'>
// 			<h1 className = 'Dialog-title'>
// 				Welcome
// 			</h1>
// 			<p className='Dialog-message'>Thank you for visiting our spacecraft!</p>
// 		</FancyBorder>
// 	);
// }


// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));

// -----------------------------------------------//

// function Contacts() {
// 	return <div className='Contacts' />
// }

// function Chat() {
// 	return <div className='Chat' />
// }


// function SplitPane(props) {
// 	return (
// 		<div className='SplitPane'>
// 			<div className='SplitPane-left'>
// 				{props.left}
// 			</div>
// 			<div className='SplitPane-left'>
// 				{props.right}
// 			</div>
// 		</div>
// 	);
// }

// function  App() {
// 	return (
// 		<SplitPane left={<Contacts />} right={<Chat />}/>
// 	);
// }


// ReactDOM.render(<App />, document.getElementById('root'));


//---------------------------------------------------------------------------------------//
// Thinking in React


class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
